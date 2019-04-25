import { createContext } from 'react'

const UserContext = createContext({
  users: [],
  currentUserId: null,
  handleUserChange: () => {},
  getUsers: () => {},
})

export const { Consumer, Provider } = UserContext
