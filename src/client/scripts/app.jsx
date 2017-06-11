import 'semantic-ui-css/semantic.min.css';

import React from 'react';

import {
	Bond,
} from 'oo7';

import { Grid } from 'semantic-ui-react'

import MenuPane from './MenuPane';
import AvatarPane from './AvatarPane';
import ChatPane from './ChatPane';

// const {
// 	localStorage
// } = window;

export class App extends React.Component {

	constructor() {
		super();
		this.state = {
			view: 'login'
		}

		this.store = new Bond();
		this.store.tie(this.handleTie);
	}

	handleTie =({})=> {

	}

	render() {
		return(
			<Grid verticalAlign='middle' stackable columns={4} centered
				style={{
					width: '100vw',
					height: '100vh'
				}}>
			  <Grid.Row>
					<Grid.Column width={5}>
						<MenuPane store={this.store} />
						<AvatarPane store={this.store} />
					</Grid.Column>
					<Grid.Column width={5}>
						<ChatPane store={this.store} />
					</Grid.Column>
			  </Grid.Row>
			</Grid>
		);
	}
}
