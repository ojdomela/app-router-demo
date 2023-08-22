'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

export const StyledLink = styled(Link)(
  ({
    theme: {
      COLOR: { BLACK },
    },
  }) => css`
    color: ${BLACK};
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: bold;
  `
)
