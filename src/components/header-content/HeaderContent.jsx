import React from 'react'
import './HeaderContent.css'

import logo2 from '../../assets/logo-2.svg'
import logo3 from '../../assets/logo3.svg'


const HeaderContent = () => {
    return (
        <>
        <section className="beginning">
            <div className="container">
                <div className="beginning-inner">
                    <div className="text-inner">
                        <div className="inner">
                            <p className="beginning-text">HI, I’M UMAR.</p>
                            <p className="beginning-text">A FRONTEND
                            <img src={logo2} alt="" className="beginning-logo"/> DEVELOPER</p>
                            <p className="beginning-text">BASED IN TASHKENT</p>
                        </div>

                        <p className="text-words">DESIGN <img src={logo3} alt=""/> DEVELOPMENT <img src={logo3}  alt=""/> WEBFLOW</p>

                        <div className="beginneng-nav">
                            <a href="" className="link-got_a_project">Got a project?</a>
                            <a href="" className="link-lets_talk">Let's talk</a>
                        </div>
                    </div>

                    <img src="img/img.png" alt="" className="beginning-img"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeaderContent