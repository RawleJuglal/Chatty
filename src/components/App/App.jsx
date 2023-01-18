// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Splash from '../Splash/Splash'
import Chat from '../Chat/Chat'

function App() {


  return (
    <div className="--app-app-container">
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route index element={<Splash />}></Route>
        <Route path='chat' element={<Chat />}></Route>
      </Routes>
    </div>
  )
}

export default App
