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
                            <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</p>
                            <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.</p>

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
