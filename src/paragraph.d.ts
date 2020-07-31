import React from 'react';
import { PossibleSizes } from './consts/size';
export declare type BaseParagraphProps = {
    size?: PossibleSizes;
    element?: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;
export declare const BaseParagraph: ({ size, element, ...rest }: BaseParagraphProps) => JSX.Element;
export declare const Paragraph: import("styled-components").StyledComponent<({ size, element, ...rest }: BaseParagraphProps) => JSX.Element, any, {}, never>;
//# sourceMappingURL=paragraph.d.ts.map