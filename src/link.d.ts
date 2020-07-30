import React from 'react';
export declare type BaseLinkProps = {
    external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export declare const BaseLink: ({ external, children, ...rest }: BaseLinkProps) => JSX.Element;
export declare const Link: import("styled-components").StyledComponent<({ external, children, ...rest }: BaseLinkProps) => JSX.Element, any, {}, never>;
//# sourceMappingURL=link.d.ts.map