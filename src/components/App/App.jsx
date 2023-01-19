// import { useState } from 'react'
import {auth} from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Splash from '../Splash/Splash'
import Chat from '../Chat/Chat'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="--app-app-container">
      <nav>
        <Header />
      </nav>
      {!user ? 
        (<Splash />) :
        (<Chat />)
      } 
      {/* <Routes>
        
      </Routes> */}
    </div>
  )
}

export default App
