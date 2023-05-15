import React from 'react';
import type { GetPagePropertyResponse } from '../../server/types';
export type GalleryHandlerProps = {
    items: GetPagePropertyResponse | undefined;
    path: string;
};
export declare const GalleryHandler: ({ items, path }: GalleryHandlerProps) => React.JSX.Element | null | undefined;
export default GalleryHandler;
//# sourceMappingURL=handler.d.ts.map