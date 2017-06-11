import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class AvatarPane extends Component {
	render() {
		return (
			<Card fluid>
				<Image src='http://react.semantic-ui.com/assets/images/avatar/large/molly.png' />
				<Card.Content>
					<Card.Header>Daniel</Card.Header>
					<Card.Meta>Joined in 2016</Card.Meta>
					<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='user' />
						10 Friends
					</a>
				</Card.Content>
			</Card>
		);
	}
}
