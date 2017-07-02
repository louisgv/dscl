import React from 'react'

import {Comment} from 'semantic-ui-react';

const ChatMessage = (props) => {

	const {name, img, text} = props;

	return (
		<Comment>
			<Comment.Avatar as='a' src={img} />
			<Comment.Content>
				<Comment.Author as='a'>{name}</Comment.Author>
				<Comment.Text>{text}</Comment.Text>
			</Comment.Content>
		</Comment>
	)
}

export default ChatMessage;
