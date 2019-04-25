import React from 'react'

import UserCard from './UserCard'

const Home = ({ users }) => (
  <>
    {users.length === 0 && <h1>Loading...</h1>}
    {users.map(user => (
      <UserCard key={user.id} {...user} />
    ))}
  </>
)

export default Home
