import { useState } from 'react'
import { Header } from './components/Header'
import { Swipers } from './components/Swiper'

import './global.css'
import { Hero } from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Swipers />
    </>
  )
}

export default App
