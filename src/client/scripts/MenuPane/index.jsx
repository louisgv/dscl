import React, {
	Component
} from 'react'

import {
	Icon,
} from 'semantic-ui-react'

import {
	HashBond
} from 'parity-reactive-ui';

export default class MenuPane extends Component {

	render() {
		return(
			<div style={{
					marginTop: 18
				}}>
				<HashBond fluid placeholder='Recipent ETH address'
					icon={<Icon name='podcast' inverted circular link />}
					/>
			</div>
		);
	}
}
