/// <reference types="react" />
/// <reference types="node" />
import type { BlockObjectResponse, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ListBlockProps = {
    tag: keyof JSX.IntrinsicElements;
    blocks: BlockObjectResponse[];
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const ListBlock: ({ tag, blocks, href, link, query }: ListBlockProps) => JSX.Element;
export default ListBlock;
//# sourceMappingURL=list.d.ts.map