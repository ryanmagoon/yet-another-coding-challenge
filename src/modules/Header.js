import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.section`
  background-color: tomato;
  color: whitesmoke;
  padding: 10px;
`

const Header = () => (
  <Link to="/">
    <Container>
      <h1>Hello!</h1>
    </Container>
  </Link>
)

export default Header
