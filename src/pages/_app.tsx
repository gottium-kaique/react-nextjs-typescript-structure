import React from "react"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"

import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

const MyApp: React.FC <AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
