import styled, { css } from 'styled-components'

export const StyledNavbar = styled.header(
  ({ theme: { COLOR: { BACKGROUND}}}) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background-color: ${BACKGROUND};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
  `
)

export const Heading = styled.h1``
