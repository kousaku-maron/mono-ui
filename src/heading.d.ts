import React from 'react';
import { PossibleSizes } from './consts/size';
export declare type HeadingProps = {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;
export declare const Heading: ({ element, ...rest }: HeadingProps) => JSX.Element;
export declare type HeaderProps = {
    size?: PossibleSizes;
} & HeadingProps;
export declare const H1: React.FC<HeaderProps>;
export declare const H2: React.FC<HeaderProps>;
export declare const H3: React.FC<HeaderProps>;
export declare const H4: React.FC<HeaderProps>;
export declare const H5: React.FC<HeaderProps>;
export declare const H6: React.FC<HeaderProps>;
//# sourceMappingURL=heading.d.ts.map