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
		this.address = new Bond();
		this.dscl = new DSCL();
	}

	handleClick = () => {
		const value = this.address._value;

		const p = new Peer({ initiator: true, trickle: false });

		p.on('signal', async function (data) {
		  console.log('SIGNAL', data)

			try {
				const encryptedData = this.dscl.encrypt(data);

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

		// if (value) {
		// 	this.p.signal(JSON.parse(value));
		// }

		// this.props.store.trigger({
		// 	hello: "he"
		// })
	}

	/*<HashBond fluid placeholder='Recipent ETH address'
		icon={<Icon name='podcast' inverted circular link />}
		/>*/
	render() {
		return(
			<div>
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
