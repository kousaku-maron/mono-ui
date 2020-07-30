import React, { ReactNode } from 'react';
export declare type BaseButtonProps = {
    loader?: ReactNode;
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const BaseButton: ({ loader, loading, children, onClick, ...rest }: BaseButtonProps) => JSX.Element;
export declare type ButtonProps = {
    elevation?: 'none' | 'low' | 'medium' | 'high';
    importance?: 'normal' | 'ghost' | 'cta' | 'muted';
} & BaseButtonProps;
export declare const Button: ({ importance, elevation, ...rest }: ButtonProps) => JSX.Element;
//# sourceMappingURL=button.d.ts.map