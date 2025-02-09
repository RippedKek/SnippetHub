'use client'

import { AppProvider } from './context'

const AppProviderWrapper = ({ children }) => {
  return <AppProvider>{children}</AppProvider>
}

export default AppProviderWrapper
