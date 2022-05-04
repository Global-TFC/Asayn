import React from 'react'

function Sidebar() {
    return (
        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="#home" class="nav__link active-link">
                        <i class='bx bx-home-alt nav__icon'></i><br/>
                        <span class="nav__name">Home</span>
                    </a>
                </li>

                <li class="nav__item">
                    <a href="#about" class="nav__link">
                        <i class='bx bx-user nav__icon'></i><br/>
                        <span class="nav__name">About</span>
                    </a>
                </li>

                <li class="nav__item">
                    <a href="#skills" class="nav__link">
                        <i class='bx bx-book-alt nav__icon'></i><br/>
                        <span class="nav__name">Skills</span>
                    </a>
                </li>

                <li class="nav__item">
                    <a href="#portfolio" class="nav__link">
                        <i class='bx bx-briefcase-alt nav__icon'></i><br/>
                        <span class="nav__name">Portfolio</span>
                    </a>
                </li>

                <li class="nav__item">
                    <a href="#contactme" class="nav__link">
                        <i class='bx bx-message-square-detail nav__icon'></i><br/>
                        <span class="nav__name">Contactme</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar