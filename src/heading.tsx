import React from 'react'
import styled from 'styled-components'
import { PossibleSizes } from './consts/size'

export type HeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & React.HTMLAttributes<HTMLHeadingElement>

export const Heading = ({ element = 'h1', ...rest }: HeadingProps) => {
  const Element = element
  return <Element {...rest} />
}

export type HeaderProps = {
  size?: PossibleSizes
} & HeadingProps

export const H1: React.FC<HeaderProps> = (props) => {
  return <StyledH1 element="h1" {...props}></StyledH1>
}

export const H2: React.FC<HeaderProps> = (props) => {
  return <StyledH2 element="h2" {...props}></StyledH2>
}

export const H3: React.FC<HeaderProps> = (props) => {
  return <StyledH3 element="h3" {...props}></StyledH3>
}

export const H4: React.FC<HeaderProps> = (props) => {
  return <StyledH4 element="h4" {...props}></StyledH4>
}

export const H5: React.FC<HeaderProps> = (props) => {
  return <StyledH5 element="h5" {...props}></StyledH5>
}

export const H6: React.FC<HeaderProps> = (props) => {
  return <StyledH6 element="h6" {...props}></StyledH6>
}

const handleFontSize = (size: PossibleSizes) => {
  switch (size) {
    case 'xxs':
      return '18px'
    case 'xs':
      return '24px'
    case 'sm':
      return '36px'
    case 'md':
      return '40px'
    case 'lg':
      return '50px'
    case 'xl':
      return '60px'
    case 'xxl':
      return '80px'
    default:
      return '36px'
  }
}

const StyledH1 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'xl')};
  padding-bottom: 20px;
  font-weight: bold;
`

const StyledH2 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'lg')};
  padding-bottom: 20px;
  font-weight: bold;
`

const StyledH3 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'md')};
  padding-bottom: 20px;
  font-weight: bold;
`

const StyledH4 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'sm')};
  padding-bottom: 8px;
  font-weight: bold;
`

const StyledH5 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'xs')};
  padding-bottom: 8px;
  font-weight: bold;
`

const StyledH6 = styled(Heading)<{ size?: PossibleSizes }>`
  font-size: ${(props) => handleFontSize(props.size ?? 'xxs')};
  padding-bottom: 8px;
  font-weight: bold;
`
