import React, {
	Component
} from 'react'

import {
	Icon,
	Input
} from 'semantic-ui-react'

import {
	HashBond
} from 'parity-reactive-ui';

export default class MenuPane extends Component {

	/*<HashBond fluid placeholder='Recipent ETH address'
		icon={<Icon name='podcast' inverted circular link />}
		/>*/
	render() {
		return(
			<Input fluid placeholder='Recipent IP address'
					icon={<Icon name='podcast' inverted circular link />}
					/>
		);
	}
}
