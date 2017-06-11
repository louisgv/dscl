import React, { Component } from 'react'

import { Comment, Header } from 'semantic-ui-react'

export default class ChatPane extends Component{
	render() {
		return (
			<Comment.Group style={{
					paddingBottom: 90
				}}>
				<Header as='h3' dividing>Comments</Header>

				<Comment>
					<Comment.Avatar as='a' src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
					<Comment.Content>
						<Comment.Author as='a'>Matt</Comment.Author>
						<Comment.Metadata>
							<span>Today at 5:42PM</span>
						</Comment.Metadata>
						<Comment.Text>How artistic!</Comment.Text>
					</Comment.Content>
				</Comment>

				<Comment>
					<Comment.Avatar as='a' src='http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
					<Comment.Content>
						<Comment.Author as='a'>Joe Henderson</Comment.Author>
						<Comment.Metadata>
							<span>5 days ago</span>
						</Comment.Metadata>
						<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
					</Comment.Content>
				</Comment>
			</Comment.Group>
		);
	}
}
