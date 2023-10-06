import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutMePage } from './pages/aboutMe'
import { MainPage } from './pages/main'
import { UserPage } from './pages/user'
import { NotFound } from './pages/notFound'

export const AppRoutes: React.FC = () => {
  return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='aboutMe' element={<AboutMePage/>}/>
            <Route path='user' element={<UserPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  )
}
