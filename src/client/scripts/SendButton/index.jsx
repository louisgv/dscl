import React, {
	Component
} from 'react'

import {
	Button
} from 'semantic-ui-react'

import DHUtils from './DHUtils';

export default class MenuPane extends Component {

	state = {
		dh: undefined,
		ga: undefined
	}

	onClick =()=> {
		console.log("You Clicked! Now generating dh and ga");

		const dh = new DHUtils();

		const ga = dh.calculate_gA();

		this.setState({ dh, ga });
	}

	render() {
		return(
			<div style={{
					marginBottom: 9
				}}>
				<Button content='Send Transaction' inverted color='green' fluid icon='right arrow' labelPosition='right' onClick={this.onClick}/>

				<div>
					ga: {this.state.ga}
				</div>
			</div>
		);
	}
}
