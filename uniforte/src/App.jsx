import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Swipers } from './components/Swiper/Swiper'
import { QuemSomos } from './components/QuemSomos/QuemSomos';
import { Beneficios } from './components/Beneficios/Beneficios'
import { Hero } from './components/Hero/Hero'
import { Forms } from './components/Forms/Forms'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import   QuemSomosBackgroundSVG  from './components/QuemSomos/QuemSomosBackGround';

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
    <QuemSomosBackgroundSVG />
    <Forms />
    </>
  )
}

export default App
