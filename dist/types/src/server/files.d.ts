import type { VideoBlockObjectResponseEx, EmbedBlockObjectResponseEx } from './types';
export declare const findLocationUrl: (rawHeaders: string[]) => string;
export declare function getJson<T>(reqUrl: string): Promise<T>;
export declare const atoh: (a: string) => string;
export declare const createDirWhenNotfound: (dir: string) => Promise<void>;
export declare function readCache<T>(f: string): Promise<T>;
export declare function writeCache(f: string, data: unknown): Promise<void>;
export declare function isAvailableCache(f: string, seconds: number): Promise<boolean>;
export declare const saveImage: (imageUrl: string, prefix: string) => Promise<string>;
export declare const findHtmlByRegexp: (regexps: RegExp[], html: string) => string | null;
export declare const titleRegexps: RegExp[];
export declare const descRegexps: RegExp[];
export declare const imageRegexps: RegExp[];
export declare const iconRegexps: RegExp[];
export declare const findImage: (html: string) => string | null;
export declare const getHtmlMeta: (reqUrl: string) => Promise<{
    title: string;
    desc: string;
    image: string;
    icon: string;
}>;
export declare const getVideoHtml: (block: VideoBlockObjectResponseEx) => Promise<string>;
export declare const getEmbedHtml: (block: EmbedBlockObjectResponseEx) => Promise<string>;
//# sourceMappingURL=files.d.ts.map