import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import SignUpForm from './components/SignUpForm/SignUpForm'
import { signUp } from './services/authService';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm signUp={signUp} />} />
      </Routes>
    </>
  )
}

export default App
