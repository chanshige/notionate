import { Client } from '@notionhq/client'
import type {
  GetPageResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
  QueryDatabaseResponseEx,
  ListBlockChildrenResponseEx,
  GetPageResponseEx,
  GetDatabaseResponseEx,
  PropertyItemPropertyItemListResponse,
} from './types'
import {
  createDirWhenNotfound,
  saveImage,
  saveImageInBlock,
  saveImageInPage,
  readCache,
  writeCache,
  getHtmlMeta,
  getVideoHtml,
  getEmbedHtml,
} from './files'

const cacheDir = process.env.NOTIONATE_CACHEDIR || '.cache'
const auth = process.env.NOTION_TOKEN
const notion = new Client({ auth })

const isEmpty = (obj: Object) => {
  return !Object.keys(obj).length
}

export const FetchDatabase = async (params: QueryDatabaseParameters): Promise<QueryDatabaseResponseEx> => {
  const { database_id } = params
  if ('page_size' in params) {
    params.page_size = 100
  }
  const limit = params.page_size

  const useCache = process.env.NOTION_CACHE === 'true'
  if (useCache) {
    await createDirWhenNotfound(cacheDir)
  }
  const cacheFile = `${cacheDir}/notion.databases.query-${database_id}${limit !== undefined ? `.limit-${limit}` : ''}`
  let cursor: undefined|string
  let allres: undefined|QueryDatabaseResponseEx

  if (useCache) {
    try {
      const list = await readCache<QueryDatabaseResponseEx>(cacheFile)
      if (!isEmpty(list)) {
        return list
      }
    } catch (_) {
      /* not fatal */
    }
  }

  while (true) {
    const res: QueryDatabaseResponse = await notion.databases.query(params)

    if (allres === undefined) {
      allres = res as QueryDatabaseResponseEx
    } else {
      allres.results.push(...res.results)
    }

    if (res.next_cursor === null || limit !== undefined) {
      break
    }

    /* eslint-disable no-unused-vars */
    cursor = res.next_cursor
  }

  for (const result of allres.results) {
    result.property_items = []
    for (const [, v] of Object.entries(result.properties)) {
      const page_id = result.id
      const property_id = v.id
      const props = await notion.pages.properties.retrieve({ page_id, property_id })
      result.property_items.push(props)
    }
  }

  const meta = await notion.databases.retrieve({ database_id }) as GetDatabaseResponseEx
  if ('cover' in meta && meta.cover !== null) {
    const imageUrl = (meta.cover.type === 'external') ? meta.cover.external.url : meta.cover.file.url
    meta.cover.src = await saveImage(imageUrl)
  }
  allres.meta = meta

  if (useCache) {
    await writeCache(cacheFile, allres)
  }

  return allres
}

export const FetchPage = async (page_id: string): Promise<GetPageResponseEx> => {
  const useCache = process.env.NOTION_CACHE === 'true'
  if (useCache) {
    await createDirWhenNotfound(cacheDir)
  }
  const cacheFile = `${cacheDir}/notion.pages.retrieve-${page_id}`

  if (useCache) {
    try {
      const page = await readCache<GetPageResponse>(cacheFile)
      if (!isEmpty(page)) {
        return page as GetPageResponseEx
      }
    } catch (_) {
      /* not fatal */
    }
  }

  const page = await notion.pages.retrieve({ page_id }) as GetPageResponseEx

  if ('properties' in page) {
    let list: undefined|PropertyItemPropertyItemListResponse
    for (const [, v] of Object.entries(page.properties)) {
      const property_id = v.id
      const res = await notion.pages.properties.retrieve({ page_id, property_id })
      if (res.object !== 'list') {
        continue
      }
      if (list === undefined) {
        list = res
      } else {
        list.results.push(...res.results)
      }
    }
    page.meta = list
  }

  if (useCache) {
    if (page.cover !== null) {
      if (page.cover.type === 'external') {
        page.cover.src = await saveImageInPage(page.cover.external.url, `page-${page.id}-cover`)
      } else if (page.cover.type === 'file') {
        page.cover.src = await saveImageInPage(page.cover.file.url, `page-${page.id}-cover`)
      }
    }
    if (page.icon?.type === 'file') {
      page.icon.src = await saveImageInPage(page.icon.file.url, `page-${page.id}-icon`)
    }
    await writeCache(cacheFile, page)
  } else {
    if (page.cover !== null) {
      if (page.cover.type === 'external') {
        page.cover.src = page.cover.external.url
      } else if (page.cover.type === 'file') {
        page.cover.src = page.cover.file.url
      }
    }
    if (page.icon?.type === 'file') {
      page.icon.src = page.icon.file.url
    }
  }

  return page
}

export const FetchBlocks = async (block_id: string): Promise<ListBlockChildrenResponseEx> => {
  const useCache = process.env.NOTION_CACHE === 'true'
  if (useCache) {
    await createDirWhenNotfound(cacheDir)
  }
  const cacheFile = `${cacheDir}/notion.blocks.children.list-${block_id}`

  if (useCache) {
    try {
      const list = await readCache<ListBlockChildrenResponseEx>(cacheFile)
      if (!isEmpty(list)) {
        return list
      }
    } catch (_) {
      /* not fatal */
    }
  }

  const list = await notion.blocks.children.list({ block_id }) as ListBlockChildrenResponseEx

  if (useCache) {
    for (const block of list.results) {
      try {
        if (block.type === 'table' && block.table !== undefined) {
          block.children = await FetchBlocks(block.id)
        } else if (block.type === 'toggle' && block.toggle !== undefined) {
          block.children = await FetchBlocks(block.id)
        } else if (block.type === 'column_list' && block.column_list !== undefined) {
          block.children = await FetchBlocks(block.id)
          block.columns = []
          for (const b of block.children.results) {
            block.columns.push(await FetchBlocks(b.id))
          }
        } else if (block.type === 'child_page' && block.child_page !== undefined) {
          block.page = await FetchPage(block.id)
          block.children = await FetchBlocks(block.id)
        } else if (block.type === 'child_database' && block.child_database !== undefined) {
          const database_id = block.id
          block.database = await notion.databases.retrieve({ database_id })
        } else if (block.type === 'bookmark' && block.bookmark !== undefined) {
          block.bookmark.site = await getHtmlMeta(block.bookmark.url)
        } else if (block.type === 'image' && block.image !== undefined) {
          block.image.src = await saveImageInBlock(block)
        } else if (block.type === 'video' && block.video !== undefined && block.video.type === 'external') {
          block.video.html = await getVideoHtml(block)
        } else if (block.type === 'embed' && block.embed !== undefined) {
          block.embed.html = await getEmbedHtml(block)
        }
      } catch (e) {
        console.log(`error for ${block.type} contents get`, block, e)
      }
    }
    await writeCache(cacheFile, list)
  }

  return list
}
