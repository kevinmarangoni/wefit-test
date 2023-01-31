import React,{createContext, useState} from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '/pages/src/theme/theme.js'
import { GlobalStyle } from '/styles/globalStyle.js'

export const ThemeContext = createContext()

const Theme = ({children}) => {

  const [isDark, setDark] = useState(true)

  return (
    <ThemeContext.Provider value={{isDark, setDark}}>
      <ThemeProvider theme={isDark? dark : light }>
        <GlobalStyle/>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme