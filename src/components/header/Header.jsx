import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo1 from '../../assets/logo-1.svg'


const Header = ({
    click,
    theme,
    round,
    clicked
}) => {
    return (
        <>
            <div className={theme}>
                <div className="container">
                    <div className="header-inner">
                        <div class="logo">
                            <img src={logo1} alt="" />
                            <h2 class="logo-title">mirum.</h2>
                        </div>
                        <ul className="header-list">
                            <li className="header-list-item">
                                <NavLink to='/content'>Home</NavLink>
                            </li>
                            <li className="header-list-item">
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li className="header-list-item">
                                <NavLink to='/news'>Projects</NavLink>
                            </li>
                        </ul>

                        <div className="btns-inner">
                            <button className="header-button">Let's talk</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
