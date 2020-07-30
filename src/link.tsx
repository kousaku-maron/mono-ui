import React, { useMemo } from 'react'
import styled from 'styled-components'
import defaultTheme from './themes/defaultTheme'

export type BaseLinkProps = {
  external?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const BaseLink = ({ external, children, ...rest }: BaseLinkProps) => {
  const externalProps = useMemo(() => {
    if (external) {
      return { rel: 'noopener', target: '_blank' }
    }
    return {}
  }, [external])

  return (
    <a {...externalProps} {...rest}>
      {children}
    </a>
  )
}

export const Link = styled(BaseLink)`
  color: ${defaultTheme.tints.primary.main};

  &:hover {
    color: ${defaultTheme.tints.primary.light};
  }
`
