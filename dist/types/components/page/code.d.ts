import React from 'react';
import type { ExternalModules } from './handler';
import type { CodeBlockObjectResponse } from '../../server/types';
export type CodeProps = React.PropsWithChildren & {
    language: string;
    modules?: ExternalModules;
};
export type CodeBlockProps = {
    block: CodeBlockObjectResponse;
    modules?: ExternalModules;
};
export declare const Code: React.FC<CodeProps>;
declare const CodeBlock: React.FC<CodeBlockProps>;
export default CodeBlock;
//# sourceMappingURL=code.d.ts.map