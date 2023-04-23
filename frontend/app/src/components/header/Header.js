import React from 'react'
import { Navbar } from '../navbar/navbar'
import './Header.scss'
import headerLogo from '../../image/Logo.svg'
import headerUser from '../../image/user.svg'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return(
        <div className='header'>

           <NavLink to='/'><div className='logo'><img src={headerLogo}></img></div></NavLink>

            <div className='search'><form action="" method="get"><input className='search_input' name="" placeholder="поиск" type="search"></input></form></div>

            <Navbar></Navbar>
            
        </div>
    )
}