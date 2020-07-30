import React from 'react'
import defaultTheme from './themes/defaultTheme'
import { PossibleSizes } from './consts/size'

export type ParagraphProps = {
  size?: PossibleSizes
  element?: 'p' | 'div' | 'span'
} & React.HTMLAttributes<HTMLParagraphElement>

export const Paragraph = ({ size = 'md', element = 'p', ...rest }: ParagraphProps) => {
  const Element = element
  return <Element {...rest} style={{ fontSize: handleFontSize(size), color: defaultTheme.foregrounds.primary }} />
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
