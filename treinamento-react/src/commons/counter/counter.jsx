import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement } from './counterActions'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement() {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }

}

const mapStateToProps = state => ({ count: state.counter.count })
const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement}, dispatch)

export default connect(mapStateToProps)(Counter)