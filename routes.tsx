import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutMePage } from './src/pages/aboutMe'
import { MainPage } from './src/pages/main'
import { UserPage } from './src/pages/user'
import { NotFound } from './src/pages/notFound'

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
