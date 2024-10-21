import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from  './components/Footer'
import './App.css'

function App() {

  return (
      <div>
         <Navbar/>
         <div className='min-h-[94vh]'>
         <Manager/>
         </div>
         <Footer/>
       </div>
  )
}

export default App
