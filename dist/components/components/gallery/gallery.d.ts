/// <reference types="node" />
import React from 'react';
import type { QueryDatabaseResponseEx, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type GalleryProps = React.PropsWithChildren & {
    keys: string[];
    db: QueryDatabaseResponseEx;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
    preview?: 'cover' | 'content';
    size?: 'small' | 'medium' | 'large';
    fit?: boolean;
};
export declare const Gallery: React.FC<GalleryProps>;
export default Gallery;
//# sourceMappingURL=gallery.d.ts.map