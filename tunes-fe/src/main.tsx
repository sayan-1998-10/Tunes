import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './shared/theme/theme.provider.tsx'
import AuthProvider from './shared/auth/auth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme='dark' storageKey="ui-theme">
          <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
