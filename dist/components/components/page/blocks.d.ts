/// <reference types="node" />
import React from 'react';
import { ExternalModules } from './handler';
import type { ListBlockChildrenResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type BlocksProps = {
    blocks: ListBlockChildrenResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
    modules?: ExternalModules;
};
export declare const Blocks: React.FC<BlocksProps>;
export default Blocks;
//# sourceMappingURL=blocks.d.ts.map