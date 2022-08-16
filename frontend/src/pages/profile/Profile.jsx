import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
                <p>My Bookings</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile