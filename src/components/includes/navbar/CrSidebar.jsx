import React from 'react'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import { Link } from 'react-router-dom';

function CrSidebar() {
    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to={"/creater"}  className="nav__link active-link">
                        <i className='bx bxs-home nav__icon'></i><br/>
                        <span className="nav__name">Home</span>
                    </Link>
                </li>

                <li class="nav__item">
                    <Link to={"tcource"} className="nav__link">
                        <i className='bx bx-chalkboard nav__icon'></i><br/>
                        <span className="nav__name">Class</span>
                    </Link>
                </li>

                <li className="nav__item">
                    <Link to={"/chat"} className="nav__link">
                        <i className='bx bx-chat nav__icon'></i><br/>
                        <span className="nav__name">Chat</span>
                    </Link>
                </li>

                <li className="nav__item">
                    <Link to={""} className="nav__link">
                        <i className='bx bxs-user nav__icon'></i><br/>
                        <span className="nav__name">About</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default CrSidebar;