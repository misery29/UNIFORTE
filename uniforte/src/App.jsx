import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Swipers } from './components/Swiper/Swiper'
import { QuemSomos } from './components/QuemSomos/QuemSomos';
import { Beneficios } from './components/Beneficios/Beneficios'
import { Hero } from './components/Hero/Hero'
import { Forms } from './components/Forms/Forms';
import { Footer } from './components/Footer/Footer';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import   QuemSomosBackgroundSVG  from './components/QuemSomos/QuemSomosBackGround';
import   QuemSomosBackgroundSVG2  from './components/QuemSomos/QuemSomosBackGroundSVG2';

import './global.css'

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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Swipers />
    <Beneficios />
    <ThemeProvider theme={theme}>
      <QuemSomos/>
    </ThemeProvider>
    <QuemSomosBackgroundSVG />
    <QuemSomosBackgroundSVG2 />
    <Forms />
    <Footer />
    </>
  )
}

export default App
