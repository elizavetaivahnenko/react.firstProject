import React, { Component } from 'react'

export default class Practice extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		  count: 0,
	  }
	}

	add = () => {
		const { count } = this.state;
		const { step } = this.props;
		this.setState({count: count+step})
	}
	dec = () => {
		const { count } = this.state;
		const { step } = this.props;
		this.setState({count: count-step})
		
	}
	render() {
	  return (
		 <>
		<p>Value{this.state.count}</p>
		<button onClick={this.add}>+</button>
		<button onClick={this.dec}>-</button>
		 </>
	 )
  }
}

