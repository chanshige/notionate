/// <reference types="node" />
import React from 'react';
import type { ChildPageBlockObjectResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ChildpageBlockProps = {
    block: ChildPageBlockObjectResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
declare const ChildpageBlock: React.FC<ChildpageBlockProps>;
export default ChildpageBlock;
//# sourceMappingURL=childpage.d.ts.map