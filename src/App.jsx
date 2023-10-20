// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  // return <HomePage></HomePage>
  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </>
  )
}

export default App
