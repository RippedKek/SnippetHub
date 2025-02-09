'use client'

import { ColorProvider } from './context'

const ColorProviderWrapper = ({ children }) => {
  return <ColorProvider>{children}</ColorProvider>
}

export default ColorProviderWrapper
