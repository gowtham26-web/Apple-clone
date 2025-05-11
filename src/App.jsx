import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './index.css';
import Navbar from "./components/Navbar"
import Offerbar from "./components/Offerbar"
import Hero from "./components/Hero"
import Mother from "./components/Mother"
import Watch from "./components/watch"
import Products from "./components/products"
import Footer from "./components/Footer"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar></Navbar>
   <Offerbar></Offerbar>
   <Hero></Hero>
   <Mother></Mother>
   <Watch></Watch>
   <Products></Products>
   <Footer></Footer>
    </>
  )
}

export default App
