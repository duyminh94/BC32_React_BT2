import React, { Component } from 'react'
import { Glasses } from './Glasses'
import Header from './Header'
import data from './dataGlasses.json'
import './home.css'
import { GlassesList } from './GlassesList'

export default class Home extends Component {
    ChangeGlasses = (product) => {
        console.log(product)
        this.setState({ datasGlasse: product })

    }

    constructor(props) {
        super(props)

        this.state = {
            datasGlasse: null,
        }
    }
    render() {
        return (
            <div className='BG-Glasses'>
                <Header />
                <div className='row'>
                <Glasses product={this.state.datasGlasse} />
                <GlassesList products={data} onSelect={this.ChangeGlasses} />
                </div>
            </div>
        )
    }
}
