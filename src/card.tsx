import React from 'react'
import styled from 'styled-components'
import defaultTheme from './themes/defaultTheme'

export type ElevationHeight = 'low' | 'medium' | 'high' | 'none'
export type Roundness = 'sharp' | 'default' | 'medium' | 'circle'

export type BaseCardProps = {
  elevation?: ElevationHeight
  roundness?: Roundness
} & React.HTMLAttributes<HTMLDivElement>

export const BaseCard = ({ elevation = 'low', roundness = 'default', ...rest }: BaseCardProps) => {
  return <StyledBaseCard elevation={elevation} data-roundness={roundness} {...rest} />
}

const StyledBaseCard = styled.div<{ elevation: ElevationHeight; 'data-roundness': Roundness }>`
  padding: 20px;
  box-sizing: border-box;
  background-color: ${defaultTheme.backgrounds.secondary};

  &[elevation='low'] {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &[elevation='medium'] {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.24);
  }

  &[elevation='high'] {
    box-shadow: 0px 11px 29px 0px rgba(0, 0, 0, 0.23);
  }

  &[data-roundness='sharp'] {
    border-radius: 2px;
  }

  &[data-roundness='default'] {
    border-radius: 5px;
  }

  &[data-roundness='medium'] {
    border-radius: 10px;
  }

  &[data-roundness='circle'] {
    border-radius: 50%;
  }
`

export const Card = (props: BaseCardProps) => {
  return <BaseCard {...props} />
}
