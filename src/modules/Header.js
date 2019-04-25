import React from 'react'
import { Link } from '@reach/router'
import { Box } from 'grommet'

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
)

const Header = () => (
  <Link to="/">
    <AppBar>
      <h1>Hello!</h1>
    </AppBar>
  </Link>
)

export default Header
