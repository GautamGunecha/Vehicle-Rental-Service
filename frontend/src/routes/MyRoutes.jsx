import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'

import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'
import Forgot from '../pages/auth/forgot/Forgot'
import Reset from '../pages/auth/reset/Reset'
import Profile from '../pages/profile/Profile'

import Collections from '../pages/collections/Collections'
import { useSelector } from 'react-redux'
import UserBookings from '../pages/bookings/UserBookings'
import UpdateProfile from '../pages/profile/UpdateProfile'
import SingleCar from '../pages/details/SingleCar'

const MyRoutes = () =>
{
    const { userInfo } = useSelector(state => state.userLogin)

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
                <Route exact path='/mybookings' element={userInfo ? <UserBookings /> : <Home />} />
                <Route exact path='/update/profile' element={userInfo ? <UpdateProfile /> : <Home />} />

                <Route exact path='/car/:id' element={<SingleCar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes