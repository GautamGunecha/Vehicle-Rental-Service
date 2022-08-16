import React from 'react'

import "./Footer.css"
import
{
    AiOutlineFacebook,
    AiFillTwitterSquare,
    AiOutlineYoutube,
    AiOutlineLinkedin
} from 'react-icons/ai'

const Footer = () =>
{
    const date = new Date()

    return (
        <footer className='footer'>
            <section>
                <h1>Drim</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolore explicabo voluptatum libero quisquam error est, reprehenderit voluptate a minima porro rem exercitationem, eveniet accusamus iure officia. Cum, labore eos?
                </p>
                <span>
                    <AiOutlineFacebook
                        className='icon facebook'
                        size={30} />
                    <AiFillTwitterSquare
                        size={30}
                        className='icon twitter' />
                    <AiOutlineLinkedin
                        size={30} className='icon linked' />
                    <AiOutlineYoutube size={30} className='icon youtube' />
                </span>
            </section>
            <section>
                <h1>Our Collections</h1>
                <ul>
                    <li>Luxury Cars</li>
                    <li>Car Services</li>
                    <li>Airport Pickup & Drop</li>
                </ul>
            </section>
            <section>
                <h1>Connect with us</h1>

                <ul>
                    <li>Blogs</li>
                    <li>Stories</li>
                    <li>About Us</li>
                </ul>
            </section>
            <section>
                <h1>Address</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
        </footer>
    )
}

export default Footer