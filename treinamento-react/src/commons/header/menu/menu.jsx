import React, { Component } from 'react'
import MenuItem from './menuItem'

import Stylus from './menu.styl'

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentWillMount() {
        if (window.innerWidth < 993) {
            this.state.active = false;   
        } else {
            this.state.active = true;
        }
    }

    verifyActive() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {

        return (
            <div data-component="menu">
                <div className={this.state.active ? 'open' : ''} onClick={this.verifyActive.bind(this)} id="nav-icon3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={this.state.active ? 'open' : ''}>
                    <MenuItem label="Home" href="#" />
                    <MenuItem label="About" href="#" />
                    <MenuItem label="Work" href="#" />
                    <MenuItem label="Team" href="#" />
                    <MenuItem label="Services" href="#" />
                    <MenuItem label="Features" href="#" />
                    <MenuItem label="Contact" href="#" />
                </ul>
            </div>
        )

    }

}

export default Menu