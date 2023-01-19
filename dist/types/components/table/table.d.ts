/// <reference types="node" />
import React from 'react';
import type { QueryDatabaseResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type TableProps = React.PropsWithChildren & {
    keys: string[];
    db: QueryDatabaseResponseEx;
    href: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
};
export declare const Table: React.FC<TableProps>;
export default Table;
//# sourceMappingURL=table.d.ts.map