import { createContext, useEffect, useState } from 'react'

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
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    pinned: 0,
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

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

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
