import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Box, Grommet } from 'grommet'

import mockResponse from './mockResponse'
import Header from './modules/Header'
import Home from './modules/Home'
import Details from './modules/Details'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

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
    <Grommet theme="dark">
      <Box fill>
        <Header />
        <Box flex direction="row">
          <Box
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            sidebar
          </Box>
          <Box flex align="center" justify="center">
            <Router>
              <Home path="/" users={data.users} />
              <Details path="/details/:id" users={data.users} />
            </Router>
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}

export default App
