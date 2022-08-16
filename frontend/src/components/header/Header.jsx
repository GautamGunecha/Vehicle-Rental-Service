import React, { useState } from 'react'

import "./Header.css"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () =>
{
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <div className='header'>
                <h1>Drim</h1>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Our Collections</li>
                        <li>About Us</li>
                        <button>Sign In</button>
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