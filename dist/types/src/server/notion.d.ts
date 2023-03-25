import type { QueryDatabaseParameters, QueryDatabaseResponseEx, ListBlockChildrenResponseEx, GetPageResponseEx } from './types';
export declare const FetchDatabase: (params: QueryDatabaseParameters) => Promise<QueryDatabaseResponseEx>;
export declare const FetchPage: (page_id: string, last_edited_time?: string) => Promise<GetPageResponseEx>;
export declare const FetchBlocks: (block_id: string, last_edited_time?: string) => Promise<ListBlockChildrenResponseEx>;
//# sourceMappingURL=notion.d.ts.map