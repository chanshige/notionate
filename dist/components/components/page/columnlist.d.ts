/// <reference types="node" />
import React from 'react';
import type { ColumnListBlockObjectResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ColumnlistBlockProps = {
    block: ColumnListBlockObjectResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
declare const ColumnlistBlock: React.FC<ColumnlistBlockProps>;
export default ColumnlistBlock;
//# sourceMappingURL=columnlist.d.ts.map