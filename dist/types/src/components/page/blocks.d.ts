/// <reference types="node" />
import React from 'react';
import type { ListBlockChildrenResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type BlocksProps = {
    blocks: ListBlockChildrenResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const Blocks: React.FC<BlocksProps>;
export default Blocks;
//# sourceMappingURL=blocks.d.ts.map