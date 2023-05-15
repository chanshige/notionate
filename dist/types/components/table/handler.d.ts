/// <reference types="node" />
import React from 'react';
import type { GetPagePropertyResponse, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type TableHandlerProps = {
    name: string;
    items: GetPagePropertyResponse | undefined;
    path?: string;
    slug?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const TableHandler: ({ name, items, path, slug, link, query }: TableHandlerProps) => React.JSX.Element | null | undefined;
export default TableHandler;
//# sourceMappingURL=handler.d.ts.map