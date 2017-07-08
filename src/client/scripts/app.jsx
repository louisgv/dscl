import 'semantic-ui-css/semantic.min.css';

import React from 'react';

import {
	Bond,
} from 'oo7';

import {
	Grid
} from 'semantic-ui-react'

import MenuPane from './MenuPane';
import MenuPaneRaw from './MenuPaneRaw';
import AvatarPane from './AvatarPane';
import ChatPane from './ChatPane';
import ChatInput from './ChatInput';

// const {
// 	localStorage
// } = window;

const style = {
	mainGrid: {
		width: '100vw',
		height: '100vh',
		paddingTop: 18
	}
}

export class App extends React.Component {

	constructor() {
		super();
		this.state = {
			view: 'login'
		}

		this.store = new Bond();
		this.store.tie(this.handleTie);
	}

	handleTie = (data = {}) => {
		console.log(data);
	}

	render() {
		return(
			<Grid stackable columns={3} verticalAlign={'middle'} centered style={style.mainGrid}>
				<Grid.Column>
					<AvatarPane store={this.store} />
				</Grid.Column>

				<Grid.Column>
					<MenuPaneRaw store={this.store} />
					{/*
						<MenuPane store={this.store} />
						*/}
					<ChatPane store={this.store} />
					<ChatInput store={this.store}/>
					<div style={{ height: 45, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						© 2017 Blueberry Lab
					</div>
				</Grid.Column>
			</Grid>
		);
	}
}
