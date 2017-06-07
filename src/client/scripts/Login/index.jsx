import React from 'react';

export default class Login extends React.Component {

	updateStore =()=> {
		this.props.store.trigger({
			credentialValid : true
		});
	}

	render() {
		return (
			<div>
				Login --->
				<button onClick={this.updateStore}>
					Update Store
				</button>
			</div>
		);
	}
}
