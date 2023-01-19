/// <reference types="node" />
import React from 'react';
import type { QueryDatabaseResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ListProps = React.PropsWithChildren & {
    keys: string[];
    db: QueryDatabaseResponseEx;
    href: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const List: React.FC<ListProps>;
export default List;
//# sourceMappingURL=list.d.ts.map