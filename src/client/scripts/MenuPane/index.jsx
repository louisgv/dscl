import React, {
	Component
} from 'react'

import PropTypes from 'prop-types';

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

/*eslint-disable no-unused-vars*/
function getStream () {
	return new Promise(function(resolve, reject) {
		navigator.getUserMedia({ video: true, audio: false }, resolve, reject);
	});
}
/*eslint-enable no-unused-vars*/

export default class MenuPane extends Component {

	static propTypes = {
		store : PropTypes.object
	};

	constructor(props) {
		super(props);

		this.inviteHash = new Bond();

		this.address = new Bond();

		this.dscl = new DSCL({
			handleInvite: this.handleInvite,
			handleHostInfo: this.handleHostInfo,
			handleGuestInfo: this.handleGuestInfo
		});
	}

	sendInvite =()=> {
		const otherAddress = this.address._value;

		this.dscl.setOtherAddress(otherAddress);
		this.dscl.sendInvite(otherAddress);
	}

	handleInvite =(data)=> {
		if (!this.dscl.isDataValid(data)) return;

		const {from, gA} = data[data.length - 1];

		// const stream = await getStream();
		const peer = new Peer({
			initiator: true,
			trickle: false,
			// stream
		});

		this.dscl.setOtherAddress(from);
		this.dscl.setOtherGX(gA);

		this.handlePeerEvent(peer);
	}

	handleHostInfo = async (data)=> {
		if (!this.dscl.isDataValid(data)) return;

		const {gB, IPFS_ref} = data[data.length - 1];

		const peer = new Peer({
			initiator: false,
			trickle: false
		});

		this.dscl.setOtherGX(gB);

		this.handlePeerEvent(peer);
		this.handleInfo(IPFS_ref);
	}

	handleGuestInfo =(data)=> {
		if (!this.dscl.isDataValid(data)) return;

		const {IPFS_ref} = data[data.length - 1];

		this.handleInfo(IPFS_ref);
	}

	handleInfo = async(multihash) => {
		const value = await this.dscl.get(multihash);

		const em = value.toString();

		const decryptedData = await this.dscl.decrypt(em)

		this.peer.signal(JSON.parse(decryptedData));
	}

	handlePeerEvent =(peer) => {
		peer.on('signal', async (data) => {
			// console.log('SIGNAL', data)
			try {
				await this.dscl.reply(data, peer.initiator);
			} catch(error) {
				this.props.store.trigger({ error })
			}
		})

		peer.on('connect', () => {
			this.props.store.trigger({
				name: peer.initiator ? "ORIGIN" : "NIGIRO",
				peer
			})
		})

		peer.on('data', (data) => {
			const message = JSON.parse(data);
			this.props.store.trigger({ message })
		})

		peer.on('stream', (stream) => {
			this.props.store.trigger({ stream })
		})

		this.peer = peer;
	}

	/*<HashBond fluid placeholder='Recipent ETH address'
		icon={<Icon name='podcast' inverted circular link />}
		/>*/
	render() {
		return(
			<div>
				<InputBond
						fluid
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
				<Button content='Invite' inverted color='green'
					fluid icon='send' labelPosition='right'
					onClick={this.sendInvite}/>
			</div>
		);
	}
}
