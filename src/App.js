import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import axios from 'axios'
import { Box, Grommet } from 'grommet'

import mockResponse from './mockResponse'
import Header from './modules/Header'
import Home from './modules/Home'
import Details from './modules/Details/Details'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const initialState = { users: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: [...state.users, action.user],
      }
    case 'UPDATE_USER':
      return {
        ...state.users,
        [action.id]: action.user,
      }
    default:
      return state
  }
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
    <Grommet theme={theme}>
      <Box fill>
        <Header />
        <Box flex direction="row">
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
