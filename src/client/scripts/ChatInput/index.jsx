import React, {
	Component
} from 'react'

import {
	Icon,
	Input
} from 'semantic-ui-react'

export default class ChatInput extends Component {

	render() {
		return(
			<Input fluid placeholder='Send message'
				icon={<Icon name='hand pointer' inverted circular link />}
				/>
		);
	}
}
