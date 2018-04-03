import React, { Component } from 'react'
import Slider from 'react-slick'

import Banner from './../banner/banner'

class SliderClass extends Component {

    render() {

        var settings = {
            dots: true,
            arrous: false,
            speed: 1000,
            infinite: false
        }

        return (
            <Slider {...settings}>
                <Banner 
                    title="Welcome to our marketplace" 
                    description="Lorem ipsum" 
                    link="#" 
                    label="View more"
                    img="img/banner/banner.jpg" />
                <Banner
                    title="Welcome to our marketplace"
                    description="Lorem ipsum"
                    link="#"
                    label="View more"
                    img="img/banner/banner.jpg" />
            </Slider>
        )
    }

}

export default SliderClass