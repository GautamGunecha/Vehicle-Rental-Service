import React from 'react'

import "./AboutUs.css"
import { GrLocationPin } from 'react-icons/gr'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

const AboutUs = () =>
{
    return (
        <div className='aboutUs'>
            <section className='aboutUsContent'>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nulla debitis ullam animi ab tempore culpa nihil, officia, enim non incidunt? Beatae ipsum nemo quidem consequuntur facere, reprehenderit eaque ad.

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nulla debitis ullam animi ab tempore culpa nihil, officia, enim non incidunt? Beatae ipsum nemo quidem consequuntur facere, reprehenderit eaque ad.
                </p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nulla debitis ullam animi ab tempore culpa nihil, officia, enim non incidunt? Beatae ipsum nemo quidem consequuntur facere, reprehenderit eaque ad.

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nulla debitis ullam animi ab tempore culpa nihil, officia, enim non incidunt? Beatae ipsum nemo quidem consequuntur facere, reprehenderit eaque ad.
                </p>
            </section>

            <section className='aboutUsDetails'>
                <span>
                    <GrLocationPin size={25} />
                    <p>Location</p>
                </span>
                <p>Varanasi, India</p>
            </section>

            <div className='aboutUsContact'>
                <section className='aboutUsContactOfficial'>
                    <span>
                        <p>Contact Us</p>
                        <h3>+91 9999999999</h3>
                    </span>
                    <span>
                        <p>Connect with mail</p>
                        <h3>example@gmail.com</h3>
                    </span>
                </section>
                <section className='aboutUsContactSocial'>
                    <AiOutlineLinkedin
                        size={25}
                        className='icon linked' />
                    <AiOutlineGithub
                        size={25}
                        className='icon github' />
                    <AiOutlineTwitter
                        size={25}
                        className='icon twitter' />
                </section>
            </div>
        </div>
    )
}

export default AboutUs