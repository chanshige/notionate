/// <reference types="node" />
/// <reference types="react" />
import type { ParsedUrlQueryInput } from 'node:querystring';
import type { GetPagePropertyResponse, Link } from '../../server/types';
export type ListHandlerProps = {
    name: string;
    items: GetPagePropertyResponse | undefined;
    path: string;
    slug: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const ListHandler: ({ name, items, path, slug, link, query }: ListHandlerProps) => JSX.Element | null | undefined;
export default ListHandler;
//# sourceMappingURL=handler.d.ts.map