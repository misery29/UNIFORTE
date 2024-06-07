import { useState } from 'react'
import { Header } from './components/Header'
import { Swipers } from './components/Swiper'
import { AccordionComponent } from './components/AccordionComponent'
import { Hero } from './components/Hero'


import './global.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Swipers />
    <AccordionComponent />
    </>
  )
}

export default App
