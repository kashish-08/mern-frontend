import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

function App() {
  return (
  <div className='App-Container'>
  <h1 style={{backgroundColor:'lightcoral', color:'white'}}>Mern Frontend</h1>
  {/* <Home age={9}/> */}
  <Register/>
  <h3>Footer..</h3>
  </div>
  )
}

export default App
