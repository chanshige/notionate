/// <reference types="node" />
import type { ParsedUrlQueryInput } from 'node:querystring';
import React from 'react';
import type { TitlePropertyItemObjectResponse, Link } from '../../server/types';
export type TableTitleProps = {
    payload: Array<TitlePropertyItemObjectResponse>;
    path: string;
    slug: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const TableTitleField: React.FC<TableTitleProps>;
export default TableTitleField;
//# sourceMappingURL=title.d.ts.map