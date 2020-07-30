import React from 'react'
import styled from 'styled-components'

export type BaseImageProps = {
  alt: string
  fullWidth?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

export const BaseImage = ({ alt, fullWidth = false, ...rest }: BaseImageProps) => {
  return <StyledBaseImage alt={alt} fullWidth={fullWidth} {...rest} />
}

const StyledBaseImage = styled.img<{ fullWidth: boolean }>`
  &[fullWidth='true'] {
    width: 100%;
  }
`

export const Image = (props: BaseImageProps) => {
  return <BaseImage {...props} />
}
