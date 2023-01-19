"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchPage = exports.FetchDatabase = exports.FetchBlocks = void 0;
var _client = require("@notionhq/client");
var _files = require("./files");
const cacheDir = process.env.NOTIONATE_CACHEDIR || '.cache';
const auth = process.env.NOTION_TOKEN;
const notion = new _client.Client({
  auth
});
const isEmpty = obj => {
  return !Object.keys(obj).length;
};
const FetchDatabase = async params => {
  const {
    database_id
  } = params;
  const limit = 'page_size' in params ? params.page_size : undefined;
  const paramsHash = (0, _files.atoh)(JSON.stringify(params));
  const useCache = process.env.NOTION_CACHE === 'true';
  if (useCache) {
    await (0, _files.createDirWhenNotfound)(cacheDir);
  }
  const cacheFile = `${cacheDir}/notion.databases.query-${paramsHash}${limit !== undefined ? `.limit-${limit}` : ''}`;
  let cursor;
  let allres;
  if (useCache) {
    try {
      const list = await (0, _files.readCache)(cacheFile);
      if (!isEmpty(list)) {
        return list;
      }
    } catch (_) {
      /* not fatal */
    }
  }
  while (true) {
    const res = await notion.databases.query(params);
    if (allres === undefined) {
      allres = res;
    } else {
      allres.results.push(...res.results);
    }
    if (res.next_cursor === null || limit !== undefined) {
      break;
    }

    /* eslint-disable no-unused-vars */
    cursor = res.next_cursor;
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
      const props = await notion.pages.properties.retrieve({
        page_id,
        property_id
      });
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
  const meta = await notion.databases.retrieve({
    database_id
  });
  if ('cover' in meta && meta.cover !== null) {
    const imageUrl = meta.cover.type === 'external' ? meta.cover.external.url : meta.cover.file.url;
    meta.cover.src = await (0, _files.saveImage)(imageUrl, `database-cover-${database_id}`);
  }
  allres.meta = meta;
  if (useCache) {
    await (0, _files.writeCache)(cacheFile, allres);
  }
  return allres;
};
exports.FetchDatabase = FetchDatabase;
const FetchPage = async page_id => {
  const useCache = process.env.NOTION_CACHE === 'true';
  if (useCache) {
    await (0, _files.createDirWhenNotfound)(cacheDir);
  }
  const cacheFile = `${cacheDir}/notion.pages.retrieve-${page_id}`;
  if (useCache) {
    try {
      const page = await (0, _files.readCache)(cacheFile);
      if (!isEmpty(page)) {
        return page;
      }
    } catch (_) {
      /* not fatal */
    }
  }
  const page = await notion.pages.retrieve({
    page_id
  });
  if ('properties' in page) {
    let list;
    for (const [, v] of Object.entries(page.properties)) {
      const property_id = v.id;
      const res = await notion.pages.properties.retrieve({
        page_id,
        property_id
      });
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
  if (useCache) {
    if (page.cover !== null) {
      if (page.cover.type === 'external') {
        page.cover.src = await (0, _files.saveImage)(page.cover.external.url, `page-cover-${page.id}`);
      } else if (page.cover.type === 'file') {
        page.cover.src = await (0, _files.saveImage)(page.cover.file.url, `page-cover-${page.id}`);
      }
    }
    if (page.icon?.type === 'file') {
      page.icon.src = await (0, _files.saveImage)(page.icon.file.url, `page-icon-${page.id}`);
    }
    await (0, _files.writeCache)(cacheFile, page);
  } else {
    if (page.cover !== null) {
      if (page.cover.type === 'external') {
        page.cover.src = page.cover.external.url;
      } else if (page.cover.type === 'file') {
        page.cover.src = page.cover.file.url;
      }
    }
    if (page.icon?.type === 'file') {
      page.icon.src = page.icon.file.url;
    }
  }
  return page;
};
exports.FetchPage = FetchPage;
const FetchBlocks = async block_id => {
  const useCache = process.env.NOTION_CACHE === 'true';
  if (useCache) {
    await (0, _files.createDirWhenNotfound)(cacheDir);
  }
  const cacheFile = `${cacheDir}/notion.blocks.children.list-${block_id}`;
  if (useCache) {
    try {
      const list = await (0, _files.readCache)(cacheFile);
      if (!isEmpty(list)) {
        return list;
      }
    } catch (_) {
      /* not fatal */
    }
  }
  const list = await notion.blocks.children.list({
    block_id
  });
  if (useCache) {
    for (const block of list.results) {
      try {
        if (block.type === 'table' && block.table !== undefined) {
          block.children = await FetchBlocks(block.id);
        } else if (block.type === 'toggle' && block.toggle !== undefined) {
          block.children = await FetchBlocks(block.id);
        } else if (block.type === 'column_list' && block.column_list !== undefined) {
          block.children = await FetchBlocks(block.id);
          block.columns = [];
          for (const b of block.children.results) {
            block.columns.push(await FetchBlocks(b.id));
          }
        } else if (block.type === 'child_page' && block.child_page !== undefined) {
          block.page = await FetchPage(block.id);
          block.children = await FetchBlocks(block.id);
        } else if (block.type === 'child_database' && block.child_database !== undefined && block.has_children) {
          const database_id = block.id;
          block.database = await notion.databases.retrieve({
            database_id
          });
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
  }
  return list;
};
exports.FetchBlocks = FetchBlocks;