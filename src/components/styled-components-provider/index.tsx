'use client'

import React from 'react'
import { GlobalStyle, THEME } from '@/theme'
import { ThemeProvider } from 'styled-components'


const RootProvider: React.FC<{ children: React.ReactNode}> = ({
  children,
}) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default RootProvider
