import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contactus from './components/Contactus'
import Navbar from './components/Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { ThemeContextProvider } from './ThemeContext'

const App = () => {
  return (
    <ThemeContextProvider>

      <div className='flex flex-col gap-10 items-center mt-2'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  )
}

export default App
