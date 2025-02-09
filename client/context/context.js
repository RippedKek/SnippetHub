import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [color, setColor] = useState('#06B6D4')
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    country: '',
    job: '',
    organization: '',
    color: '',
    technologies: [],
    snippets: [],
    pins: [],
  })

  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }))
  }

  const updateColor = (newColor) => {
    setColor(newColor)
  }

  return (
    <AppContext.Provider
      value={{
        color,
        setColor: updateColor,
        user,
        setUser: updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
