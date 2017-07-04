import React, {
	Component
} from 'react'

import {
	Icon
} from 'semantic-ui-react'

import {
	Bond,
} from 'oo7';

import {
	InputBond
} from 'parity-reactive-ui';

export default class ChatInput extends Component {

	constructor(props){
		super(props);

		this.text = new Bond();
		props.store.tie(this.handleTie);
	}

	handleTie = (data = {}) => {
		if (data.peer) {
			this.peer = data.peer;
		}
		if (data.name) {
			this.name = data.name;
		}
	}

	sendMessage = () => {
		if (!this.peer || !this.name) {
			return;
		}

		const message = {
			name: this.name,
			text: this.text._value
		}

		this.props.store.trigger({
			message
		})

		this.peer.send(JSON.stringify(message));
	}

	render() {
		return(
			<InputBond fluid placeholder='Send message'
				bond={this.text}
				onChange={this.handleKeyDown}
				icon={<Icon name='hand pointer' inverted circular link onClick={this.sendMessage}/>}
				/>
		);
	}
}
