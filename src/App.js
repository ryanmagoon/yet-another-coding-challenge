import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
// import axios from 'axios'
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

// const convertToSnakeCase = string => string.replace(/[A-Z]/g, val => `_${val.toLowerCase()}`).replace(/^_/, '')

const App = () => {
  const [data, setData] = useState({ users: [] })

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

  const handleFormSubmit = ({ id, ...params }) => {
    const nonNullParams = Object.entries(params).reduce((acc, curr) => {
      const [key, value] = curr
      return value
        ? {
          ...acc,
          [key]: value,
        }
        : { ...acc }
    }, {})
    if (id) {
      const newUsers = data.users.filter(({ id: userId }) => id !== userId)
      return setData({
        users: [
          ...newUsers,
          {
            id,
            ...nonNullParams,
          },
        ],
      })
    }
    setData({
      users: [
        ...data.users,
        {
          id: Math.max(...data.users.map(user => user.id)) + 1,
          ...nonNullParams,
        },
      ],
    })
  }

  return (
    <Grommet theme={theme}>
      <Box fill>
        <Header />
        <Box flex direction="row">
          <Box flex align="center" justify="center">
            <Router>
              <Home path="/" users={data.users} />
              <Details path="/details/:id" users={data.users} onSubmit={handleFormSubmit} />
              <Details path="/new" users={data.users} onSubmit={handleFormSubmit} />
            </Router>
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
}

export default App
