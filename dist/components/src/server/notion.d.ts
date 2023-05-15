import type { QueryDatabaseParameters, QueryDatabaseResponseEx, ListBlockChildrenResponseEx, GetPageResponseEx } from './types';
/**
 * FetchDatabase retrieves database and download images in from blocks.
 * And create cache that includes filepath of downloaded images.
 */
export declare const FetchDatabase: (params: QueryDatabaseParameters) => Promise<QueryDatabaseResponseEx>;
/**
 * FetchPage retrieves page properties and download images in from properties.
 * And create cache that includes filepath of downloaded images.
 * The last_edited_time of 2nd args is for NOTIONATE_INCREMENTAL_CACHE.
 */
export declare const FetchPage: (page_id: string, last_edited_time?: string) => Promise<GetPageResponseEx>;
/**
 * FetchBlocks retrieves page blocks and download images in from blocks.
 * And create cache that includes filepath of downloaded images.
 * The last_edited_time of 2nd args is for NOTIONATE_INCREMENTAL_CACHE.
 */
export declare const FetchBlocks: (block_id: string, last_edited_time?: string) => Promise<ListBlockChildrenResponseEx>;
//# sourceMappingURL=notion.d.ts.map