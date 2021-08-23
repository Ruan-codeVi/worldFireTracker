import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import logoNasa from '../assets/nasa-6.svg'
import './header.css'

import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <h1><Icon icon={locationIcon} />World fire tracker<span>Powered By <img src={logoNasa} alt='logo'/></span></h1>
        </header>
    )
}

export default Header
