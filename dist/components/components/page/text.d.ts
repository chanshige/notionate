import React from 'react';
import type { RichTextItemResponse } from '../../server/types';
type TextProps = React.PropsWithChildren & {
    textObject: RichTextItemResponse;
    key?: string;
};
export declare const LinkObject: React.FC<TextProps>;
export declare const MentionObject: React.FC<TextProps>;
export declare const StyleObject: React.FC<TextProps>;
export declare const TextObject: React.FC<TextProps>;
export type TextBlockProps = {
    tag: keyof JSX.IntrinsicElements;
    block: RichTextItemResponse[] | undefined;
};
export declare const TextBlock: React.FC<TextBlockProps>;
export default TextBlock;
//# sourceMappingURL=text.d.ts.map