import { useState } from 'react'
import Webstore from './Pages/webstore'
import Header from './components/Header'
import UrRecording from './Pages/UrRecording'
import Landing from './Pages/Landing'
import './App.css'
import Login from './Pages/Login'
import VideoRepository from './Pages/VideoRepository'
import SingleVideo from './Pages/SingleVideo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NoPage from './Pages/NoPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/webstore" element={<Webstore />} />
          <Route path="share" element={<UrRecording />} />
          <Route path="repository" element={<VideoRepository />} />
          <Route path="single" element={<SingleVideo />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
