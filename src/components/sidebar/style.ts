import styled, { css } from 'styled-components'

export const StyledSidebar = styled.aside(
  ({theme: {COLOR: { BACKGROUND, BLACK }}}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${BACKGROUND};
    color: ${BLACK};
    padding: 1.6rem;
    border: 2px solid ${BLACK};
    gap: 1.6rem;
    flex-grow: 0;
  `
)
