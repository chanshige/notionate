/// <reference types="node" />
/// <reference types="react" />
import type { BlockObjectResponse, Link } from '../../server/types';
import type { ParsedUrlQueryInput } from 'node:querystring';
export type ExternalModules = {
    mermaid?: {
        init: (config?: {}, nodes?: string | HTMLElement, callback?: ((id: string) => unknown) | undefined) => Promise<void>;
    };
    prism?: {
        highlightElement: (element: Element, async?: boolean | undefined, callback?: (element: Element) => void | undefined) => void;
    };
};
export declare const blockType: {
    heading_1: string;
    heading_2: string;
    heading_3: string;
    bulleted_list_item: string;
    numbered_list_item: string;
    divider: string;
    paragraph: string;
    code: string;
    quote: string;
};
export type BlockHandlerProps = {
    block: BlockObjectResponse;
    href?: string;
    link?: Link;
    query?: ParsedUrlQueryInput;
    modules?: ExternalModules;
};
export declare const BlockHandler: ({ block, href, link, query, modules }: BlockHandlerProps) => JSX.Element | undefined;
export default BlockHandler;
//# sourceMappingURL=handler.d.ts.map