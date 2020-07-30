import React from 'react';
import { PossibleSizes } from './consts/size';
export declare type ParagraphProps = {
    size?: PossibleSizes;
    element?: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;
export declare const Paragraph: ({ size, element, className, ...rest }: ParagraphProps) => JSX.Element;
//# sourceMappingURL=paragraph.d.ts.map