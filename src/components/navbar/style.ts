import Link from 'next/link'
import styled, { css } from 'styled-components'

export const StyledNavbar = styled.div(
  ({
    theme: {
      COLOR: { BACKGROUND, BLACK },
    },
  }) => css`
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
    border-bottom: 2px SOLID ${BLACK};
  `
)

export const Image = styled.img`
  height: 100%;
`

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.ul`
  display: flex;
  gap: 1.6rem;
`

export const ListItem = styled.li`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  color: black;
`
