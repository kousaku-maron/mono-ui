import React from 'react'
import styled, { keyframes } from 'styled-components'

type LoaderProps = React.HTMLAttributes<HTMLSpanElement>

export const DotsLoader = (props: LoaderProps) => {
  return (
    <Loader {...props}>
      <Dot>●</Dot>
      <Dot>●</Dot>
      <Dot>●</Dot>
    </Loader>
  )
}

const exaggeratedMs = 1270
const blinkMs = 185

const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`

const Loader = styled.span`
  letter-spacing: 0.2em;
  text-indent: 0.2em;
`

const Dot = styled.span`
  animation: ${exaggeratedMs}ms ${scaleDown} infinite ease-in-out alternate;
  display: inline-block;

  &:nth-child(1) {
    animation-delay: -${blinkMs}ms;
  }

  &:nth-child(2) {
    animation-delay: -${blinkMs * 2}ms;
  }
`
