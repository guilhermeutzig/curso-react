import React from 'react'

import Title from './../title/title'

export default props => (
    <section data-section={props.dataSection} className={props.className}>
        <div className="container">
            <Title text={props.title} />
            {props.children}
        </div>
    </section>
)