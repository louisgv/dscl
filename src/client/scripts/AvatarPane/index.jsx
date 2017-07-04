import React, {
	Component
} from 'react'
import {
	Card,
	Icon,
	Image
} from 'semantic-ui-react'

export default class AvatarPane extends Component {
	state = {
		name: null,
		videoOn: false
	}
	constructor(props) {
		super(props);
		props.store.tie(this.handleTie);
	}

	handleVideoRef = (video) => {
		this.video = video;
		if(this.stream) {
			this.renderVideo();
		}
	}

	handleTie = (data = {}) => {
		if(data.stream) {
			this.stream = data.stream;
			if(this.video) {
				this.renderVideo();
			}
		}
		if (data.name) {
			this.setState({ name });
		}
	}

	renderVideo = () => {
		if(this.stream && this.video) {
			this.videoOn = true;
			this.video.src = window.URL.createObjectURL(this.stream)
			this.video.play()
		}
	}

	render() {
		return(
			<Card fluid>
				<video ref={this.handleVideoRef} style={{
						display: this.state.videoOn ? 'flex' : 'none'
					}}/>
				{!this.state.videoOn &&
					<Image
					 src='http://react.semantic-ui.com/assets/images/avatar/large/molly.png' />}
				<Card.Content>
					<Card.Header>{this.state.name}</Card.Header>
					{/*
						<Card.Meta>Joined in 2016</Card.Meta>
						<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
					*/}
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
