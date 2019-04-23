import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background: whitesmoke;
  width: 300px;
  padding: 5px;
  display: flex;
  margin-bottom: 15px;
`

const UserCard = ({
  avatar, firstName, lastName, id,
}) => (
  <Container>
    <img src={avatar} alt={`${firstName} ${lastName}`} />
    <span>{`${firstName} ${lastName}`}</span>
  </Container>
)

export default UserCard
