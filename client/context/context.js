import { createContext, useState } from 'react'

export const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#06B6D4')

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}
