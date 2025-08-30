import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster
          theme={
            localStorage.getItem("vite-ui-theme") === "dark" ? "dark" : "light"
          }
        />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
