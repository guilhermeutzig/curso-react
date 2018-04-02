import React from 'react'

import Stylus from './buttons.styl'

export default props => (

    <a data-component='button' href={props.link} title={props.label}>{props.label}</a>

)