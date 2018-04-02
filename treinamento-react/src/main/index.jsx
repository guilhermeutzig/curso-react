import React, { Component } from 'react'

import Stylus from './index.styl'

import Header from './../commons/header/header'
import Banner from './../components/banner/banner'
import Title from './../commons/title/title'
import Text from './../commons/text/text'
import NumericItems from './../commons/numericItems/numericItems';
import Section from './../commons/section/section'

class Index extends Component {

    render() {

        const items = [
            {
                title: 'Dedicated to our customers',
                text: 'Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus. Nam porttitor blandit ultricies.'
            },
            {
                title: 'Teste',
                text: 'Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus. Nam porttitor blandit ultricies.'
            }
        ]

        const listItems = items.map((item, index) =>
            <NumericItems key={item.title} title={item.title} text={item.text} number={index + 1} />
        )

        return (
            <div data-page='index'>
                <Header />
                <Banner
                    title="Welcome to our marketplace"
                    description="Lorem ipsum"
                    link="#"
                    label="View more"
                    label2="Video tour"
                    img="img/banner/banner.jpg" />
                <Section dataSection="we-are-modest" title="We are modest">
                    <div className="row">
                        <div className="col-md-7">
                            <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at.' />
                            <Text text='Phasellus sollicitudin ante eros ornare, sit amet luctus lorem semper. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum' />
                        </div>
                        <div className="col-md-5">
                            {listItems}
                        </div>
                    </div>
                </Section>
            </div>
        )

    }

}    

export default Index