import React from 'react'

import UserCard from './UserCard'

const Home = ({ data }) => (
  <>
    {data.users.length === 0 && <h1>Loading...</h1>}
    {data.users.map(user => (
      <UserCard key={user.id} {...user} />
    ))}
  </>
)

export default Home
