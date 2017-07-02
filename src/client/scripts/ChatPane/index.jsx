import React, { Component } from 'react'

import { Comment, Header } from 'semantic-ui-react'

import ChatMessage from './ChatMessage';

const imageMap = {
	Matt : 'http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg',
	Joe : 'http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg'
}

const sampleConvo = [
	{
		name: 'Matt',
		text: 'Yo'
	},
	{
		name: 'Joe',
		text: 'Hello'
	},
	{
		name: 'Matt',
		text: 'How\'s it going?'
	},
	{
		name: 'Joe',
		text: 'Fine'
	},
]

export default class ChatPane extends Component {

	state = {
		convo : sampleConvo
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
			this.addMessage(message);
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
