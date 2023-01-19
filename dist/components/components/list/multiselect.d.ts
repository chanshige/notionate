/// <reference types="node" />
import type { ParsedUrlQueryInput } from 'node:querystring';
import React from 'react';
import type { MultiSelectPropertyItemObjectResponse, Link } from '../../server/types';
export type ListMultiSelectProps = {
    payload: MultiSelectPropertyItemObjectResponse;
    path: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const ListMultiSelectField: React.FC<ListMultiSelectProps>;
export default ListMultiSelectField;
//# sourceMappingURL=multiselect.d.ts.map