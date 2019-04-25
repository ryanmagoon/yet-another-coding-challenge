import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import styled from 'styled-components'
import { lighten } from 'polished'

import mockResponse from './mockResponse'
import Header from './modules/Header'
import Home from './modules/Home'
import Details from './modules/Details'

const AppContainer = styled.main`
  background-color: ${lighten(0.2, 'tomato')};
  flex: 1;
`

const App = () => {
  const [data, setData] = useState({ users: [] })
  const [currentUserId, setCurrentUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      // const { data: response } = await axios.get('https://reqres.in/api/users?page=1')
      const response = mockResponse
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
      <Router>
        <Home path="/" data={data} />
        <Details path="/details/:id" />
      </Router>
    </AppContainer>
  )
}

export default App
