import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login/login.js'

export default function AppRoutes() {
  
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    )
  }