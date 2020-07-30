import React from 'react';
export declare type BaseImageProps = {
    alt: string;
    fullWidth?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;
export declare const BaseImage: ({ alt, fullWidth, ...rest }: BaseImageProps) => JSX.Element;
export declare const Image: (props: BaseImageProps) => JSX.Element;
//# sourceMappingURL=image.d.ts.map