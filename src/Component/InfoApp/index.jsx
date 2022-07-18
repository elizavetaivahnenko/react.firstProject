import React, { Component } from 'react'
import './infoApp.css'

export default class InfoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		const { link, p, h3, p2 } = this.props.user;
		const { isAddText, isReverce } = this.props;
		let userStyle = isReverce ? "mainReverce" : "mainContainer";
		return (
			<>
				<p className='mainText'> {isAddText ? ' ' : 'How the app works'}</p>
				<main className={userStyle}> 
					<div className="imageContainer">
						<img src={link} alt="phone" />
					</div>
					<div className="textContainer">
						<p>{p}</p>
						<h3>{h3}</h3>
						<p>{p2}</p>
				</div>
				</main>
			</>
	 )
  }
}
