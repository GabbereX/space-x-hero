import '@styles/main.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Header from '@components/sections/Header'
import Hero from '@components/sections/Hero'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>
)
