import React from 'react'

import { MdOutlineWorkOff } from "react-icons/md";
import './header.css'

const Header = ({title}) => {


    return (
        <div className='headerContainer' >
            <div className='iconWrapper' >
                <MdOutlineWorkOff  className='icon' />                
            </div>
            <h2>{title}</h2>            
        </div>
    )
}

export default Header
