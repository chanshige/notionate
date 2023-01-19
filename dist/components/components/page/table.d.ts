import React from 'react';
import type { TableBlockObjectResponseEx, RichTextItemResponse } from '../../server/types';
export type TableBlockProps = {
    block: TableBlockObjectResponseEx;
};
export type TrProps = React.PropsWithChildren & {
    key: string;
};
export type ThTdProps = {
    cell: RichTextItemResponse;
    key: string;
};
declare const TableBlock: React.FC<TableBlockProps>;
export default TableBlock;
//# sourceMappingURL=table.d.ts.map