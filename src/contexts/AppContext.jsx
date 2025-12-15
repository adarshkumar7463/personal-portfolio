import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppContextProvider')
  }
  return context
}

export default function AppContextProvider({ children }) {
  const [currentProject, setCurrentProject] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTech, setActiveTech] = useState(null)

  const value = {
    currentProject,
    setCurrentProject,
    isMenuOpen,
    setIsMenuOpen,
    activeTech,
    setActiveTech
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}