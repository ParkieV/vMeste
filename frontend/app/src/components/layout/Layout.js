import React from 'react'
import { AddClass } from '../../hoc/AddClass'
import { Header } from '../header/Header'
import './Layout.scss'




const Layout = () => {
        return(
            <Header/>
        )
}


export default AddClass(Layout, 'layout')