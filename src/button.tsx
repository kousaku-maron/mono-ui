import React, { ReactNode, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import defaultTheme from './themes/defaultTheme'
import { DotsLoader } from './dotsLoader'

export type BaseButtonProps = {
  loader?: ReactNode
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const BaseButton = ({ loader = <DotsLoader />, loading, children, onClick, ...rest }: BaseButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!onClick) return

      setIsLoading(true)
      await Promise.resolve(onClick(event))
      setIsLoading(false)
    },
    [onClick]
  )

  const content = useMemo(() => {
    if ((loading !== undefined && loading) || isLoading) {
      return loader
    }

    return children
  }, [children, isLoading, loader, loading])

  return (
    <button {...rest} onClick={handleClick}>
      {content}
    </button>
  )
}

export type ButtonProps = {
  elevation?: 'none' | 'low' | 'medium' | 'high'
  importance?: 'normal' | 'ghost' | 'cta' | 'muted'
} & BaseButtonProps

export const Button = ({ importance = 'normal', elevation = 'low', ...rest }: ButtonProps) => {
  return <StyledButton {...rest} elevation={elevation} data-variation={importance} />
}

const StyledButton = styled(BaseButton)<{ elevation: 'none' | 'low' | 'medium' | 'high' }>`
  border-radius: 5px;
  height: 46px;
  font-size: inherit;
  font-family: inherit;
  text-align: center;
  transition: 300ms all;
  outline: none;
  cursor: pointer;

  &:disabled {
    filter: saturate(0.38);
    cursor: auto;
  }

  &[data-variation='normal'] {
    border: 1px solid ${defaultTheme.backgrounds.tertiary};
    background-color: ${defaultTheme.backgrounds.tertiary};
    color: ${defaultTheme.tints.primary.main};

    &:hover:not(:disabled) {
      border: 1px solid ${defaultTheme.backgrounds.tertiary};
      background-color: ${defaultTheme.backgrounds.tertiary};
      color: ${defaultTheme.tints.primary.light};
    }
  }

  &[data-variation='ghost'] {
    border: 1px solid ${defaultTheme.tints.primary.main};
    background-color: ${defaultTheme.backgrounds.tertiary};
    color: ${defaultTheme.tints.primary.main};

    &:hover:not(:disabled) {
      border: 1px solid ${defaultTheme.tints.primary.light};
      background-color: ${defaultTheme.backgrounds.tertiary};
      color: ${defaultTheme.tints.primary.light};
    }
  }

  &[data-variation='cta'] {
    border: 1px solid ${defaultTheme.tints.primary.main};
    background-color: ${defaultTheme.tints.primary.main};
    color: ${defaultTheme.foregrounds.onTintPrimary};

    &:hover:not(:disabled) {
      border: 1px solid ${defaultTheme.tints.primary.light};
      background-color: ${defaultTheme.tints.primary.light};
    }
  }

  &[elevation='low'] {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

    &:active {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
      transform: translateY(2px);
    }
  }

  &[elevation='medium'] {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.24);

    &:active {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.24);
      transform: translateY(2px);
    }
  }

  &[elevation='high'] {
    box-shadow: 0px 11px 29px 0px rgba(0, 0, 0, 0.23);

    &:active {
      box-shadow: 0px 11px 29px 0px rgba(0, 0, 0, 0.23);
      transform: translateY(11px);
    }
  }
`
