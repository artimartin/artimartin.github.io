import React,{Component} from 'react';
export default (OriginalComponent) => 
class ToyTrigger extends Component {
	constructor(props){
		super(props);
			this.state = {isActive: false}
	}
	render(){
		return <
			OriginalComponent {...this.props} {...this.state} 
			toggleTrigger = {this.toggleTrigger}
			/>
	}
	toggleTrigger = (ev) => {
			ev && ev.preventDefault && ev.preventDefault()
			this.setState({isActive: !this.state.isActive })
	}
}