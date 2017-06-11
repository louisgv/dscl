import React, {
	Component
} from 'react'

import {
	Bond,
} from 'oo7';

import {
	Icon,
	Input
} from 'semantic-ui-react'

import {
	InputBond,
	HashBond
} from 'parity-reactive-ui';

import Peer from 'simple-peer';

export default class MenuPane extends Component {

	constructor(props){
		super(props);
		this.address = new Bond();
		const p = new Peer({ initiator: true, trickle: false });

		p.on('signal', function (data) {
		  console.log('SIGNAL', data)
			console.log(JSON.stringify(data));
		})

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
		if (value) {
			this.p.signal(JSON.parse(value));
		}

		// this.props.store.trigger({
		// 	hello: "he"
		// })
	}

	/*<HashBond fluid placeholder='Recipent ETH address'
		icon={<Icon name='podcast' inverted circular link />}
		/>*/
	render() {
		return(
			<InputBond
					fluid
					defaultValue={''}
					placeholder='Recipent IP address'
					bond={this.address}
					icon={<Icon name='podcast' inverted circular link onClick={this.handleClick}/>}
		/>
	);
}
}
