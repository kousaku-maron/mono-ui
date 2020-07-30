import React from 'react'
import styled from 'styled-components'
import defaultTheme from './themes/defaultTheme'

export type BaseSeparatorProps = {
  layout?: 'vertical' | 'horizontal'
} & React.HTMLAttributes<HTMLDivElement>

export const BaseSeparator = ({ layout = 'horizontal', ...rest }: BaseSeparatorProps) => {
  return <StyledBaseSeparator data-layout={layout} {...rest} />
}

const StyledBaseSeparator = styled.div<{ 'data-layout': 'vertical' | 'horizontal' }>`
  &[data-layout='vertical'] {
    width: 1px;
    height: 100%;
    border-bottom-width: 0px;
    border-right: 1px solid ${defaultTheme.foregrounds.separator};
  }

  &[data-layout='horizontal'] {
    border-bottom: 1px solid ${defaultTheme.foregrounds.separator};
    width: 100%;
  }
`

export const Separator = (props: BaseSeparatorProps) => {
  return <BaseSeparator {...props} />
}
