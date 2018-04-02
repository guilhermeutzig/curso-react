import React, { Component } from 'react'

import Stylus from './banner.styl'
import MainLink from './../../commons/buttons/main-link'


class Banner extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: false,
            description: false,
        }

    }

    toggleTitleClass() {
        let currentState = this.state.title
        this.setState({ title: !currentState })
    }

    toggleDescription() {
        let currentTextState = this.state.description
        this.setState({ description: !currentTextState })
    }
    
    render() {
        var imgUrl = this.props.img
        var styles = {
           backgroundImage: 'url(' + imgUrl + ')'
       }

        return (
            <div data-component="banner" style={styles}>
                <div className="container">
                    <h2 className={this.state.title ? 'red' : ''}
                        onClick={this.toggleTitleClass.bind(this)} >
                            {this.props.title}
                    </h2>
                    <p  className={this.state.description ? 'desc-hidden' : ''} 
                        onClick={this.toggleDescription.bind(this)}>
                            {this.props.description}
                    </p>
                    <MainLink link={this.props.link} label={this.props.label} />
                    <MainLink link={this.props.link} label={this.props.label2} />
                </div>
            </div>
        )

    }

}

export default Banner