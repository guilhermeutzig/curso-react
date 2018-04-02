import React from 'react'

import Menu from './menu/menu'
import Stylus from './header.styl'

export default props => (

    <header data-component='header'>
        <div className="container">
            <img src="img/logo.png" alt="Modern" className='logo'/>
            <Menu />
        </div>
    </header>

)