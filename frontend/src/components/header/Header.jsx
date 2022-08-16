import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Header.css"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () =>
{
    const [showNav, setShowNav] = useState(false)

    const navigate = useNavigate()

    const handleNavigate = navigate('/login')
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
                        <button onClick={handleNavigate}>Sign In</button>
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
                    <p>Our Collections</p>
                    <p>About Us</p>
                    <button>Sign In</button>
                </section>
                : ""
            }
        </>
    )
}

export default Header