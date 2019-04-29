import React from 'react'
import { Link, Location, navigate } from '@reach/router'
import { Box, Button, Heading } from 'grommet'

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
  <Location>
    {({ location: { pathname } }) => (
      <AppBar>
        <Link to="/">
          <Heading level={4}>
            <span role="img" aria-label="ok hand">
              👌🏻
            </span>
            Code Challenge!
          </Heading>
        </Link>
        {pathname === '/' && <Button label="Add User" primary onClick={() => navigate('/new')} />}
      </AppBar>
    )}
  </Location>
)

export default Header
