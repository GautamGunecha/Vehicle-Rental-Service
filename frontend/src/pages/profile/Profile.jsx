import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import "./Profile.css"
import { userLogout } from '../../redux/actions/authAction'

const Profile = () =>
{
    const { userInfo } = useSelector(state => state.userLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () =>
    {
        dispatch(userLogout())
    }

    useEffect(() =>
    {
        if (!userInfo) navigate('/')
    }, [navigate, userInfo])
    return (
        <div className='userProfile'>
            <img src={userInfo.avatar} alt={userInfo.username} />
            <div className='userProfileDropdown'>
                <Link to='/mybookings'>
                    <p>My Bookings</p>
                </Link>
                <Link to='/update/profile'>
                    <p>Update Profile</p>
                </Link>
                <p className='btn' onClick={handleLogout}>Logout</p>
            </div>
        </div>
    )
}

export default Profile