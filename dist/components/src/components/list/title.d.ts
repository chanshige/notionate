/// <reference types="node" />
import React from 'react';
import type { ParsedUrlQueryInput } from 'node:querystring';
import type { TitlePropertyItemObjectResponse, Link } from '../../server/types';
export type ListTitleProps = {
    payload: Array<TitlePropertyItemObjectResponse>;
    path: string;
    slug: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const ListTitleField: React.FC<ListTitleProps>;
export default ListTitleField;
//# sourceMappingURL=title.d.ts.map