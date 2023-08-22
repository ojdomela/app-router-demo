'use client'

import styled, { css } from "styled-components";

export const Paragraph = styled.p(({theme: {COLOR: {BLACK}}}) => css`
    color: ${BLACK};
    font-size: 1.4rem;
    line-height: 2rem;
`)
