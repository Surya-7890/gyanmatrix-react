import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Home'
import Info from './Info'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/home/:target' element={<Home/>} />
      <Route path='/info/:id' element={<Info/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
