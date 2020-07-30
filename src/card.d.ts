import React from 'react';
export declare type ElevationHeight = 'low' | 'medium' | 'high' | 'none';
export declare type Roundness = 'sharp' | 'default' | 'medium' | 'circle';
export declare type BaseCardProps = {
    elevation?: ElevationHeight;
    roundness?: Roundness;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const BaseCard: ({ elevation, roundness, ...rest }: BaseCardProps) => JSX.Element;
export declare const Card: (props: BaseCardProps) => JSX.Element;
//# sourceMappingURL=card.d.ts.map