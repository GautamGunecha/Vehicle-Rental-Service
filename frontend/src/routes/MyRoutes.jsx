import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'

import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'
import Forgot from '../pages/auth/forgot/Forgot'
import Reset from '../pages/auth/reset/Reset'
import Profile from '../pages/profile/Profile'

import Collections from '../pages/collections/Collections'

const MyRoutes = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                {/* Default Route */}
                <Route exact path='/' element={<Home />} />

                {/* auth-routes */}
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot/password' element={<Forgot />} />
                <Route exact path='/reset/:slug' element={<Reset />} />
                <Route exact path='/profile' element={<Profile />} />

                {/* functional routes */}
                <Route exact path='/collections' element={<Collections />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes