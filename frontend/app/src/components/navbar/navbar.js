import React from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to = '/'>
                        главная
                    </NavLink>
                </li>
                <li>
                    <a href='#'>
                        закладки
                    </a>
                </li>
                <li>
                    <NavLink to = '/about'>
                        о нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/registration'>
                       аккаунт
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}