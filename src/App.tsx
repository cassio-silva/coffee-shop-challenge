import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { CheckoutProvider } from './contexts/CheckoutContext'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CheckoutProvider>
          <Router />
        </CheckoutProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
