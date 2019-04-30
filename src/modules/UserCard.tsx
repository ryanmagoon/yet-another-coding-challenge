import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.section`
  background: whitesmoke;
  width: 300px;
  padding: 5px;
  display: flex;
  margin-bottom: 15px;

  &:hover {
    background-color: lightgray;
  }
`

const UserCard = ({
  avatar,
  firstName,
  lastName,
  id
}: {
  avatar?: string
  firstName: string
  lastName: string
  id?: number
}) => (
  <Link to={`/details/${id}`}>
    <Container>
      <img
        src={avatar || 'http://www.fillmurray.com/125/125'}
        alt={`${firstName} ${lastName}`}
      />
      <span>{`${firstName} ${lastName}`}</span>
    </Container>
  </Link>
)

export default UserCard
