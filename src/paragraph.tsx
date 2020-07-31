import React from 'react'
import styled from 'styled-components'
import defaultTheme from './themes/defaultTheme'
import { PossibleSizes } from './consts/size'

export type BaseParagraphProps = {
  size?: PossibleSizes
  element?: 'p' | 'div' | 'span'
} & React.HTMLAttributes<HTMLParagraphElement>

export const BaseParagraph = ({ size = 'md', element = 'p', ...rest }: BaseParagraphProps) => {
  const Element = element
  return <Element {...rest} style={{ fontSize: handleFontSize(size) }} />
}

export const Paragraph = styled(BaseParagraph)`
  color: ${(props) => props.theme.foregrounds.primary};
`

Paragraph.defaultProps = {
  theme: defaultTheme,
}

const handleFontSize = (size: PossibleSizes) => {
  switch (size) {
    case 'xxs':
      return '12px'
    case 'xs':
      return '14px'
    case 'sm':
      return '15px'
    case 'md':
      return '16px'
    case 'lg':
      return '18px'
    case 'xl':
      return '20px'
    case 'xxl':
      return '24px'
    default:
      return '16px'
  }
}
