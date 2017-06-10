import React from 'react';

import {
	Bond,
} from 'oo7';

import Home from './Home';
import Login from './Login';

const {
	localStorage
} = window;

export class App extends React.Component {

	constructor() {
		super();
		this.state = {
			view: 'login'
		}

		this.store = new Bond();
		this.store.tie(this.handleTie);
	}

	handleTie =({})=> {

	}

	get content() {
		switch(this.state.view) {
		case 'home':
		default:
			return(<Home store={this.store}/>)
		}
	}

	render() {
		return(
			<div>
				{this.content}
			</div>
		);
	}
}
