import { createContext, useEffect, useState } from 'react'
import { IChildren } from '../interfaces/children'

interface AppContextType {
  isLoading: boolean
  setIsLoading: (e: boolean) => void
  backGround: string
  setBackGround: (e: string) => void
}

export const AppContext = createContext({} as AppContextType)

export function AppProvider({ children }: IChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [backGround, setBackGround] = useState<string>('')

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        backGround,
        setBackGround
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
