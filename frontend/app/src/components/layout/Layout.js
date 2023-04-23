import React, { Fragment } from 'react'
import { AddClass } from '../../hoc/AddClass'
import { Header } from '../header/Header'
import { Home } from '../../pages/home/Home'
import { About } from '../../pages/about/About'
import { Account } from '../../pages/account/Account'
import { Login } from '../../pages/login/Login'
import { Registration } from '../../pages/registration/Registration'

import './Layout.scss'
import {Route, Routes} from 'react-router-dom'




const Layout = () => {
        return(
            <Fragment>
                <div className='content'>
                    <div className='routes'>
                        <Routes>
                            <Route path = '/' exact element= {<Home/>}/>
                            <Route path = '/about' exact  element = {<About/>}/>
                            <Route path = '/account' exact elemnt = {<Account/>}/>
                            <Route path = '/login' exact element = {<Login/>}/>
                            <Route path = '/registration' exact element = {<Registration/>}/>
                        </Routes>
                    </div>
                </div>
            </Fragment>
        )
}


export default AddClass(Layout, 'layout')