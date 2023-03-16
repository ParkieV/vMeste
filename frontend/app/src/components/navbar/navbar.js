import React from 'react'
import './nabar.scss'

export const Navbar = () => {
    render(
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