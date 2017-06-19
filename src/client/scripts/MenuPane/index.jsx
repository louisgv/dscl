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
	AddressBond
} from 'parity-reactive-ui';

import DSCL from '../DSCL';

import Peer from 'simple-peer';

export default class MenuPane extends Component {

	constructor(props){
		super(props);
		this.inviteHash = new Bond();
		this.address = new Bond();
		this.dscl = new DSCL();
	}

	handlePeerEvent =(p)=> {
		p.on('signal', async function (data) {
		  console.log('SIGNAL', data)

			try {
				const encryptedData = this.dscl.encrypt(JSON.toString(data));

				const node = await this.dscl.store({encryptedData});

				const multihash = node.toJSON().multihash;
				console.log(multihash);

				const value = await this.dscl.get(multihash);
				console.log(value);
			} catch (e) {
				console.error(e);
			}
		}.bind(this))

		p.on('connect', function () {
		  console.log('CONNECT')
		  p.send('whatever' + Math.random())
		})

		p.on('data', function (data) {
		  console.log('data: ' + data)
		})
		this.p = p;
	}

	handleClick = () => {
		const value = this.address._value;

		const p = new Peer({ initiator: true, trickle: false });
		this.handlePeerEvent(p);

		// if (value) {
		// 	this.p.signal(JSON.parse(value));
		// }

		// this.props.store.trigger({
		// 	hello: "he"
		// })
	}

	async processInvite() {
		const hash = this.inviteHash._value;

		if (!value) return;

		const p = new Peer({ initiator: false, trickle: false });
		this.handlePeerEvent(p);

		const data = await this.dscl.get(hash);

		const {encryptedData} = JSON.parse(data);

		const decryptedData = this.dscl.decrypt(encryptedData);

		this.p.signal(JSON.parse(decryptedData));
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
					fluid
					defaultValue={'0x00D4cD27DC890b058c49Ca8D29D6678014214B48'}
					placeholder='Recipent address'
					bond={this.address}
					style={{
							marginBottom: 9
						}}
					/>
				<Button content='Send Request' inverted color='green' fluid icon='send' labelPosition='right' onClick={this.handleClick}/>
			</div>
	);
}
}
