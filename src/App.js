import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { lighten } from 'polished'

import Header from './modules/Header'
import UserCard from './modules/UserCard'

const AppContainer = styled.main`
  background-color: ${lighten(0.2, 'tomato')};
  /* flex: 1; */
`

const App = () => {
  const [data, setData] = useState({ users: [] })
  const [currentUserId, setCurrentUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('https://reqres.in/api/users?page=1')
      setData({
        ...response,
        users: response.data.map(({ first_name, last_name, ...rest }) => ({
          firstName: first_name,
          lastName: last_name,
          ...rest,
        })),
      })
    }

    fetchData()
  }, [])

  return (
    <AppContainer className="App">
      <Header />
      {data.users.length === 0 && <h1>Loading...</h1>}
      {data.users.map(user => (
        <UserCard {...user} />
      ))}
    </AppContainer>
  )
}

export default App
