import React from 'react'
import './navbar.scss'

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a href='#'>
                        о нас
                    </a>
                </li>
                <li>
                    <a href='#'>
                        карта
                    </a>
                </li>
                <li>
                    <a href='#'>
                        маршрут
                    </a>
                </li>
            </ul>
        </nav>
    )
}