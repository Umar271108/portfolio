import React from 'react'
import './About.css'
import logo3 from '../../../assets/logo3.svg'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about-inner">
                        <div className="tayler-inner">
                            <p className="about-title"> UMAR <img src={logo3} alt=""/> MIRSODIQ</p>
                            <p className="tayler-text">Junoir frontentd developer.</p>
                        </div>
                        <div className="about-info-inner">
                            <p className="text-1">I'm junior frontend developer and web-designer, who can create both the design and the website for your work, company or vlog</p>
                            <p className="text-2">I can work with technolgies like: HTML, CSS, JAVASCRIPT, REACT, FIGMA, Tailwind. Which are the most famous and useful technologies in my sphere</p>

                            <ul className="about-info-list">
                                <li className="about-info-list-item">
                                    BORN IN
                                    <span>Tashkent</span>
                                </li>
                                <li className="about-info-list-item">
                                    EXPERIENCE
                                    <span>*learning</span>
                                </li>
                                <li className="about-info-list-item">
                                    DATE OF BIRTH
                                    <span>27 November 2008</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
