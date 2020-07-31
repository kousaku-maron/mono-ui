import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

type Theme = {
  [key: string]: unknown
}

const ThemeProvider: React.FC<{ theme: Theme }> = ({ theme, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme }
  return <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
