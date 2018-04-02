import React from 'react'

import Stylus from './numericItems.styl'
import Text from './../text/text'

export default props => (

    <div data-component="numeric-items">
        <div className="number">{props.number}</div>
        <h3 className="title">{props.title}</h3>
        <Text text={props.text} />
    </div>

)