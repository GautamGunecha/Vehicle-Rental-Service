import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import "./Header.css"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Profile from '../../pages/profile/Profile'

const Header = () =>
{
    const [showNav, setShowNav] = useState(false)

    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userLogin)

    const handleNavigate = () => navigate('/login')

    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <h1>Drim</h1>
                </Link>

                <nav>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/collections'>
                            <li>Our Collections</li>
                        </Link>
                        <li>About Us</li>
                        {
                            userInfo ?
                                <Profile />
                                :
                                <li className='btn' onClick={() => handleNavigate()}>Sign In</li>
                        }
                    </ul>
                </nav>

                {
                    !showNav ?
                        <AiOutlineMenu size={20} className='header-icon'
                            onClick={() => setShowNav(val => !val)}
                        />
                        :
                        <AiOutlineClose size={20} className='header-icon'
                            onClick={() => setShowNav(val => !val)}
                        />
                }

            </div>
            {showNav ?
                <section className='header-mobile'>
                    <p>Home</p>
                    <Link to='/collections'>
                        <p>Our Collections</p>
                    </Link>
                    <p>About Us</p>
                    {
                        userInfo ? <Profile /> :
                            <p onClick={handleNavigate} className='btn'>Sign In</p>
                    }
                </section>
                : ""
            }
        </>
    )
}

export default Header