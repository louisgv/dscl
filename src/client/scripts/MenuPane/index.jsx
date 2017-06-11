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

export default class MenuPane extends Component {

	constructor(props){
		super(props);
		this.address = new Bond();
	}

	handleClick = () => {
		console.log(this.address);


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
					defaultValue='123.123.42.21'
					placeholder='Recipent IP address'
					bond={this.address}
					icon={<Icon name='podcast' inverted circular link onClick={this.handleClick}/>}
		/>
	);
}
}
