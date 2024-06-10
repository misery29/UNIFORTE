import { useState } from 'react'
import { Header } from './components/Header'
import { Swipers } from './components/Swiper'
import { AccordionComponent } from './components/AccordionComponent'
import { Hero } from './components/Hero'
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
import { Beneficios } from './components/Beneficios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Beneficios />
    <Swipers />
    <ThemeProvider theme={theme}>
    <AccordionComponent />
    </ThemeProvider>
    </>
  )
}

export default App
