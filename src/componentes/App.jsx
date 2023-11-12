import { } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'


function App() {
  

  return (
    <>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
