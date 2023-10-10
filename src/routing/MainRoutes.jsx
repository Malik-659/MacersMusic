import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PlayListPage from '../pages/PlayListPage'
import RadioPage from '../pages/RadioPage'

const MainRoutes = () => {
    const Links = [
        {
            id:1,
            path:'/',
            element:<HomePage/>
        },
        {
            id:2,
            path:'/playlist',
            element:<PlayListPage/>
        },
        {
            id:3,
            path:'/radio',
            element:<RadioPage/>
        },
        {
            id:4,
            path:'/',
            element:<HomePage/>
        },
        {
            id:5,
            path:'/',
            element:<HomePage/>
        },
        {
            id:6,
            path:'/',
            element:<HomePage/>
        },
    ]
  return (
    <Routes>
        {Links.map(link => (
            <Route key={link.id} path={link.path} element={link.element}/>
        ))}
    </Routes>
  )
}

export default MainRoutes