"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchPage = exports.FetchDatabase = exports.FetchBlocks = void 0;
var _client = require("@notionhq/client");
var _files = require("./files");
const cacheDir = process.env.NOTIONATE_CACHEDIR || '.cache';
const incrementalCache = process.env.NOTIONATE_INCREMENTAL_CACHE === 'true';
const waitingTimeSec = process.env.NOTIONATE_WAITTIME || 0;
const waitTimeSecAfterLimit = process.env.NOTIONATE_LIMITED_WAITTIME || 60 * 1000;
const auth = process.env.NOTION_TOKEN;
const notion = new _client.Client({
  auth
});
const isEmpty = obj => {
  return !Object.keys(obj).length;
};
async function reqAPIWithBackoff(func, args, count) {
  if (count < 1) {
    throw new Error('backoff count exceeded');
  }
  let res = null;
  try {
    res = await func(args);
    if (waitingTimeSec > 0) {
      await new Promise(resolve => setTimeout(resolve, waitingTimeSec));
    }
  } catch (error) {
    if ((0, _client.isNotionClientError)(error)) {
      switch (error.code) {
        case _client.APIErrorCode.RateLimited:
        case _client.APIErrorCode.InternalServerError:
        case _client.ClientErrorCode.ResponseError:
        case _client.ClientErrorCode.RequestTimeout:
          console.log(`backoff(${count}) -- error code: ${error.code}`);
          if (waitTimeSecAfterLimit > 0) {
            await new Promise(resolve => setTimeout(resolve, waitTimeSecAfterLimit));
          }
          res = await reqAPIWithBackoff(func, args, count--);
          break;
      }
    }
    console.error('error:', error);
    console.error('args:', args);
  }
  if (res === null) {
    throw new Error(`request to notion api failed: ${func.name}`);
  }
  return res;
}
async function reqAPIWithBackoffAndCache(name, func, args, count) {
  const key = (0, _files.atoh)(JSON.stringify({
    func: func.name,
    args
  }));
  const cacheFile = `${cacheDir}/${name}-${key}`;
  try {
    const cache = await (0, _files.readCache)(cacheFile);
    if (await (0, _files.isAvailableCache)(cacheFile, 600)) {
      return cache;
    }
  } catch (_) {
    /* not fatal */
  }
  const res = await reqAPIWithBackoff(func, args, count);
  await (0, _files.writeCache)(cacheFile, res);
  return res;
}

/**
 * FetchDatabase retrieves database and download images in from blocks.
 * And create cache that includes filepath of downloaded images.
 */
const FetchDatabase = async params => {
  const {
    database_id
  } = params;
  const limit = 'page_size' in params ? params.page_size : undefined;
  const paramsHash = (0, _files.atoh)(JSON.stringify(params));
  await (0, _files.createDirWhenNotfound)(cacheDir);
  const cacheFile = `${cacheDir}/notion.databases.query-${paramsHash}${limit !== undefined ? `.limit-${limit}` : ''}`;
  let allres;
  let res;
  try {
    const list = await (0, _files.readCache)(cacheFile);
    if (!isEmpty(list)) {
      if (!incrementalCache) {
        return list;
      }
      if (await (0, _files.isAvailableCache)(cacheFile, 120)) {
        return list;
      }
    }
  } catch (_) {
    /* not fatal */
  }
  while (true) {
    if (res && res.next_cursor) {
      params.start_cursor = res.next_cursor;
    }
    res = await reqAPIWithBackoff(notion.databases.query, params, 3);
    if (allres === undefined) {
      allres = res;
    } else {
      allres.results.push(...res.results);
    }
    if (res.next_cursor === null || limit !== undefined) {
      break;
    }
  }
  for (const result of allres.results) {
    const page = result;
    // Save page cover files
    if ('cover' in page && page.cover != null) {
      const imageUrl = page.cover.type === 'external' ? page.cover.external.url : page.cover.file.url;
      page.cover.src = await (0, _files.saveImage)(imageUrl, `page-cover-${page.id}`);
    }
    // Set page property items
    page.property_items = [];
    for (const [, v] of Object.entries(page.properties)) {
      const page_id = page.id;
      const property_id = v.id;
      const props = await reqAPIWithBackoffAndCache('notion.pages.properties.retrieve', notion.pages.properties.retrieve, {
        page_id,
        property_id
      }, 3);
      page.property_items.push(props);
      // Save avatar in people property type
      if (v.type === 'people') {
        const peoples = v.people;
        for (const people of peoples) {
          if (people.avatar_url) {
            people.avatar = await (0, _files.saveImage)(people.avatar_url, `database-avatar-${people.id}`);
          }
        }
      }
    }
  }
  const meta = await reqAPIWithBackoff(notion.databases.retrieve, {
    database_id
  }, 3);
  if ('cover' in meta && meta.cover !== null) {
    const imageUrl = meta.cover.type === 'external' ? meta.cover.external.url : meta.cover.file.url;
    meta.cover.src = await (0, _files.saveImage)(imageUrl, `database-cover-${database_id}`);
  }
  allres.meta = meta;
  await (0, _files.writeCache)(cacheFile, allres);
  return allres;
};

/**
 * FetchPage retrieves page properties and download images in from properties.
 * And create cache that includes filepath of downloaded images.
 * The last_edited_time of 2nd args is for NOTIONATE_INCREMENTAL_CACHE.
 */
exports.FetchDatabase = FetchDatabase;
const FetchPage = async (page_id, last_edited_time) => {
  await (0, _files.createDirWhenNotfound)(cacheDir);
  const cacheFile = `${cacheDir}/notion.pages.retrieve-${page_id}`;
  try {
    const page = await (0, _files.readCache)(cacheFile);
    if (!isEmpty(page)) {
      if (incrementalCache && last_edited_time === undefined) {
        console.log('last_edited_time is required as a FetchPage() args when incremental cache');
        return page;
      }
      if (!incrementalCache || 'last_edited_time' in page && page.last_edited_time === last_edited_time) {
        return page;
      }
      console.log(`incremental page cache: ${cacheFile}`);
    }
  } catch (_) {
    /* not fatal */
  }
  const page = await reqAPIWithBackoff(notion.pages.retrieve, {
    page_id
  }, 3);
  if ('properties' in page) {
    let list;
    for (const [, v] of Object.entries(page.properties)) {
      const property_id = v.id;
      const res = await reqAPIWithBackoffAndCache('notion.pages.properties.retrieve', notion.pages.properties.retrieve, {
        page_id,
        property_id
      }, 3);
      if (res.object !== 'list') {
        continue;
      }
      if (list === undefined) {
        list = res;
      } else {
        list.results.push(...res.results);
      }
    }
    page.meta = list;
  }
  if ('cover' in page && page.cover !== null) {
    if (page.cover.type === 'external') {
      page.cover.src = await (0, _files.saveImage)(page.cover.external.url, `page-cover-${page.id}`);
    } else if (page.cover.type === 'file') {
      page.cover.src = await (0, _files.saveImage)(page.cover.file.url, `page-cover-${page.id}`);
    }
  }
  if ('icon' in page && page.icon?.type === 'file') {
    page.icon.src = await (0, _files.saveImage)(page.icon.file.url, `page-icon-${page.id}`);
  }
  await (0, _files.writeCache)(cacheFile, page);
  return page;
};

/**
 * FetchBlocks retrieves page blocks and download images in from blocks.
 * And create cache that includes filepath of downloaded images.
 * The last_edited_time of 2nd args is for NOTIONATE_INCREMENTAL_CACHE.
 */
exports.FetchPage = FetchPage;
const FetchBlocks = async (block_id, last_edited_time) => {
  await (0, _files.createDirWhenNotfound)(cacheDir);
  const cacheFile = `${cacheDir}/notion.blocks.children.list-${block_id}`;
  try {
    const list = await (0, _files.readCache)(cacheFile);
    if (!isEmpty(list)) {
      if (incrementalCache && last_edited_time === undefined) {
        console.log('last_edited_time is required as a FetchBlocks() args when incremental cache');
        return list;
      }
      if (!incrementalCache || list.last_edited_time === last_edited_time) {
        return list;
      }
      console.log(`incremental block cache: ${cacheFile}`);
    }
  } catch (_) {
    /* not fatal */
  }
  const list = await reqAPIWithBackoff(notion.blocks.children.list, {
    block_id
  }, 3);

  // With the blocks api, you can get the last modified date of a block,
  // but not the last modified date of all blocks. So extend the type and add it.
  if (last_edited_time) {
    list.last_edited_time = last_edited_time;
  }
  for (const block of list.results) {
    try {
      if (block.type === 'table' && block.table !== undefined) {
        block.children = await FetchBlocks(block.id, block.last_edited_time);
      } else if (block.type === 'toggle' && block.toggle !== undefined) {
        block.children = await FetchBlocks(block.id, block.last_edited_time);
      } else if (block.type === 'column_list' && block.column_list !== undefined) {
        block.children = await FetchBlocks(block.id, block.last_edited_time);
        block.columns = [];
        for (const b of block.children.results) {
          block.columns.push(await FetchBlocks(b.id, block.last_edited_time));
        }
      } else if (block.type === 'child_page' && block.child_page !== undefined) {
        block.page = await FetchPage(block.id, block.last_edited_time);
        block.children = await FetchBlocks(block.id, block.last_edited_time);
      } else if (block.type === 'child_database' && block.child_database !== undefined && block.has_children) {
        const database_id = block.id;
        block.database = await reqAPIWithBackoffAndCache('notion.databases.retrieve', notion.databases.retrieve, {
          database_id
        }, 3);
      } else if (block.type === 'bookmark' && block.bookmark !== undefined) {
        block.bookmark.site = await (0, _files.getHtmlMeta)(block.bookmark.url);
      } else if (block.type === 'image' && block.image !== undefined) {
        const {
          id,
          image
        } = block;
        if (image !== undefined) {
          const imageUrl = image.type === 'file' ? image.file.url : image.external.url;
          block.image.src = await (0, _files.saveImage)(imageUrl, `block-${id}`);
        }
      } else if (block.type === 'video' && block.video !== undefined && block.video.type === 'external') {
        block.video.html = await (0, _files.getVideoHtml)(block);
      } else if (block.type === 'embed' && block.embed !== undefined) {
        block.embed.html = await (0, _files.getEmbedHtml)(block);
      }
    } catch (e) {
      console.log(`error for ${block.type} contents get`, block, e);
    }
  }
  await (0, _files.writeCache)(cacheFile, list);
  return list;
};
exports.FetchBlocks = FetchBlocks;