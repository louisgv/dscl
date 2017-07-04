import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { Comment, Header } from 'semantic-ui-react'

import ChatMessage from './ChatMessage';

const imageMap = {
	ORIGIN : 'http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg',
	NIGIRO : 'http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg'
}

export default class ChatPane extends Component {

	static propTypes = {
		store : PropTypes.object
	};

	state = {
		convo : []
	}

	constructor(props){
		super(props);
		props.store.tie(this.handleTie);
	}

	addMessage =(message)=> {
		const {convo} = this.state;
		convo.unshift(message);
		this.setState({ convo });
	}

	handleTie = (data = {}) => {
		if (data.message) {
			this.addMessage(data.message);
		}
		if (data.error) {
			this.addMessage({
				name: 'ERROR',
				text: data.error.message
			})
		}
	}

	render() {
		return (
			<div style={{marginTop: 18}}>
				<Header as='h3' dividing>Conversation</Header>
				<Comment.Group style={{
						paddingBottom: 90,
						height: 200,
						overflowY: 'auto',
						display: 'flex',
						flexDirection: 'column-reverse'
					}}>

					{this.state.convo.map((item, index) =>
						<ChatMessage key={index} {...item} img={imageMap[item.name]} />
					)}
				</Comment.Group>
			</div>
		);
	}
}
