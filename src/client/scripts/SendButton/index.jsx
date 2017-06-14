import React, {
	Component
} from 'react'

import {
	Button
} from 'semantic-ui-react'

import DSCLContract from './DSCLContract';

export default class MenuPane extends Component {

	onClick =()=> {
		console.log("You Clicked! Now generating dh and ga");

		// TODO: Send ga to the recipient
		// this.contract = new DSCLContract();
		// DSCLContract.requestCommunication(otherAddress);
	}

	render() {
		return(
			<div style={{
					marginBottom: 9
				}}>
				<Button content='Send Transaction' inverted color='green' fluid icon='right arrow' labelPosition='right' onClick={this.onClick}/>
			</div>
		);
	}
}
