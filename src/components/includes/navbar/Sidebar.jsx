import React from 'react'
import "./Navbar.css"
import "../../../theme/GlobalStyles"

function Sidebar() {
    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className='bx bx-home-alt nav__icon'></i><br/>
                        <span className="nav__name">Home</span>
                    </a>
                </li>

                <li class="nav__item">
                    <a href="#about" className="nav__link">
                        <i className='bx bx-user nav__icon'></i><br/>
                        <span className="nav__name">About</span>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className='bx bx-book-alt nav__icon'></i><br/>
                        <span className="nav__name">Skills</span>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className='bx bx-briefcase-alt nav__icon'></i><br/>
                        <span className="nav__name">Portfolio</span>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contactme" className="nav__link">
                        <i className='bx bx-message-square-detail nav__icon'></i><br/>
                        <span className="nav__name">Contactme</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;