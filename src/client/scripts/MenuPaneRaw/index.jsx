import React, {
	Component
} from 'react'

import {
	Bond,
} from 'oo7';

import {
	Button,
	Icon
} from 'semantic-ui-react'

import {
	InputBond
} from 'parity-reactive-ui';

import Peer from 'simple-peer';

export default class MenuPane extends Component {

	constructor(props) {
		super(props);
		this.inviteHash = new Bond();
	}

	handlePeerEvent = (peer) => {
		peer.on('signal', async function (data) {
			console.log('SIGNAL', JSON.stringify(data))
		}.bind(this))

		peer.on('connect', function () {
			this.props.store.trigger({
				peer,
				name: peer.initiator ? "ORIGIN" : "NIGIRO",
				message: {
					name: 'CONNECTION ESTABLISHED',
					text: 'You can now chat with the other person.'
				}
			})
		}.bind(this))

		peer.on('data', function (data) {
			const message = JSON.parse(data);
			this.props.store.trigger({ message })
		}.bind(this))

		this.peer = peer;
	}

	handleClick = () => {
		const peer = new Peer({
			initiator: true,
			trickle: false
		});

		this.handlePeerEvent(peer);
	}

	processInvite = async() => {
		const hash = this.inviteHash._value;

		if(!hash) return;

		if(!this.peer) {
			const peer = new Peer({
				initiator: false,
				trickle: false
			});
			this.handlePeerEvent(peer);
		}

		this.peer.signal(JSON.parse(hash));
	}

	render() {
		return(
			<div>
				<InputBond
						fluid
						defaultValue={''}
						placeholder='Invite Hash'
						bond={this.inviteHash}
						icon={<Icon name='podcast' inverted circular link onClick={this.processInvite}/>}
					/>
				<Button content='Send Request' inverted color='green' fluid icon='send' labelPosition='right' onClick={this.handleClick}/>
			</div>
		);
	}
}
