import React from 'react'
import { Link } from 'react-router-dom'

import "./Hero.css"

const Hero = () =>
{
    return (
        <div className='hero'>
            <section className='hero-content'>
                <h1>Find best car for rent.</h1>
                <h3>Find variety of luxury cars</h3>
                <h4>Drim</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum iure repudiandae adipisci? Facere perspiciatis omnis, enim debitis necessitatibus, consequatur itaque dicta ipsa dolores dolor animi porro laborum iste qui?</p>
                <button>
                    <Link to='/collections'>
                        Rent Your Dream Car
                    </Link>
                </button>
            </section>
        </div>
    )
}

export default Hero