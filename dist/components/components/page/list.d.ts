/// <reference types="node" />
import React from 'react';
import type { BlockObjectResponse, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ListBlockProps = {
    tag: keyof JSX.IntrinsicElements;
    blocks: BlockObjectResponse[];
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const ListBlock: ({ tag, blocks, href, link, query }: ListBlockProps) => React.JSX.Element;
export default ListBlock;
//# sourceMappingURL=list.d.ts.map