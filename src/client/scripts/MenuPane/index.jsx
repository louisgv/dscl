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
	InputBond,
	AddressBond
} from 'parity-reactive-ui';

import DSCL from '../DSCL';

import Peer from 'simple-peer';

export default class MenuPane extends Component {

	constructor(props) {
		super(props);
		this.inviteHash = new Bond();
		this.address = new Bond();
		this.dscl = new DSCL();
	}

	handlePeerEvent = (peer) => {
		peer.on('signal', async function (data) {
			console.log('SIGNAL', data)

			try {
				const encryptedData =
					this.dscl.encrypt(JSON.stringify(data));

				const node = await this.dscl.store(encryptedData);

				const multihash = node.toJSON()
					.multihash;

				console.log(multihash);
				// TODO: ENCRYPT THE HASH WITH a gx key

				// TODO: SEND THIS HASH VIA THE CONRTRACT
			} catch(e) {
				console.error(e);
			}
		}.bind(this))

		peer.on('connect', function () {
			this.props.store.trigger({ peer })
		}.bind(this))

		peer.on('data', function (data) {
			const message = JSON.parse(data);
			this.props.store.trigger({ message })
		}.bind(this))

		this.peer = peer;
	}

	makeInvite = () => {
		const peer = new Peer({
			initiator: true,
			trickle: false
		});

		this.props.store.trigger({ name: "ORIGIN" })

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

			this.props.store.trigger({ name: "NIGIRO" })
		}

		const value = await this.dscl.get(hash);

		const em = value.toString();

		const decryptedData = await this.dscl.decrypt(em)

		this.peer.signal(JSON.parse(decryptedData));
	}

	/*<HashBond fluid placeholder='Recipent ETH address'
		icon={<Icon name='podcast' inverted circular link />}
		/>*/
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
				<AddressBond
					defaultValue={'0x00D4cD27DC890b058c49Ca8D29D6678014214B48'}
					placeholder='Recipent address'
					bond={this.address}
					style={{
							marginBottom: 9
						}}
					/>
				<Button content='Invite' inverted color='green' fluid icon='send' labelPosition='right' onClick={this.makeInvite}/>
			</div>
		);
	}
}
