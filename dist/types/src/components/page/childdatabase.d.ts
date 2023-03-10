/// <reference types="node" />
import React from 'react';
import type { ChildDatabaseBlockObjectResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ChilddatabaseBlockProps = {
    block: ChildDatabaseBlockObjectResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
declare const ChilddatabaseBlock: React.FC<ChilddatabaseBlockProps>;
export default ChilddatabaseBlock;
//# sourceMappingURL=childdatabase.d.ts.map