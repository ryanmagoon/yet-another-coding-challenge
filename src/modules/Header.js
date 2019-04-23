import React from 'react'
import { Box, Heading } from 'rebass'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  background-color: tomato;
  color: whitesmoke;
  padding: 10px;
`

const Header = () => (
  <StyledBox>
    <Heading>Hello!</Heading>
  </StyledBox>
)

export default Header
