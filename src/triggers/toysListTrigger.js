import React,{Component} from 'react';
export default Component => class ToysListTrigger extends Component {
	constructor(props) {
		super(props);
		this.state = {openId: null};
	this.toggleToyTrigger = openId => ev => {
		this.setState({
			openId: openId === this.state.openId ? null : openId
			})
		}
	}
	render(){
		return <
			Component {...this.props} 
			toggleToyTrigger = {this.toggleToyTrigger}
			openId = {this.state.openId}
			/>

	}

}