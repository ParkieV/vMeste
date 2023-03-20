import React from 'react'
import { Navbar } from '../navbar/navbar'
import './Header.scss'
import headerLogo from '../../image/Logo.svg'
import headerUser from '../../image/user.svg'

export const Header = () => {
    return(
        <div className='header'>

            <div className='logo'><img src={headerLogo}></img></div>

            <div className='search'><form action="" method="get"><input name="" placeholder="поиск" type="search"></input></form></div>

            <Navbar></Navbar>

            <div className='person'><img src={headerUser}></img></div>
        </div>
    )
}