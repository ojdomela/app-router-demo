import { createGlobalStyle } from 'styled-components'

export const THEME = {
  COLOR: {
    WHITE: '#fff',
    BLACK: '#000',
    BACKGROUND: '#666',
  },
}

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Gibson', sans-serif;
}

body {
    margin-top: 8rem;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`
