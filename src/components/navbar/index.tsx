'use client'
import { Image, List, ListItem, Nav, StyledNavbar, StyledLink as Link } from './style'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Image src="/icon-logo.jpg" alt="logo" />
      <Nav>
        <List>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/teams">Teams</Link>
          </ListItem>
          <ListItem>
            <Link href="/teams/1">Touchtribe</Link>
          </ListItem>
          <ListItem>
            <Link href="/teams/2">Webflight</Link>
          </ListItem>
        </List>
      </Nav>
    </StyledNavbar>
  )
}

export default Navbar
