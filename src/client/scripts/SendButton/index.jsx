import React, {
	Component
} from 'react'

import {
	Button
} from 'semantic-ui-react'

export default class SendButton extends Component {

	onClick =()=> {
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
