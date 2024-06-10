import { useState } from 'react'
import { Header } from './components/Header'
import { Swipers } from './components/Swiper'
import { QuemSomos } from './components/QuemSomos';
import { Beneficios } from './components/Beneficios'
import { Hero } from './components/Hero'
import { Forms } from './components/Forms'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
      fontFamily: 'League Spartan, Arial',
      h1: {
          fontSize: '1rem',
          fontWeight: 700,
      },
      body1: {
          fontSize: '2.5rem',
          border: 0,
          fontWeight: 600,
      },
  },           }, 

);


import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Beneficios />
    <Swipers />
    <ThemeProvider theme={theme}>
      <QuemSomos/>
    </ThemeProvider>
    <Forms />
    </>
  )
}

export default App
