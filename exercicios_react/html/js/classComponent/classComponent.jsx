import React, { Component } from 'react'

export default class ClassComponent extends Component {
	
	constructor(props) {
		super(props)
		this.state = { value: props.initialValue }
	}

	sum(delta) {
		this.setState({ value: this.state.value + delta })
	}

	render() {
		return (
			<div>
				<h3>{this.props.label}</h3>
				<h4>{this.state.value}</h4>
				<button onClick={() => this.sum(-1)}>Decrementar</button>
				<button onClick={() => this.sum(1)}>Incrementar</button>
			</div>
		)
	}
}