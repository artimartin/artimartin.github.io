import './Step.css';
import React,{Component} from 'react'
class Step extends Component {
	render(){
		const {text} = this.props;
		const toySteps = text.map(step =>
			<li key={step.id} className="toy-step-item">{step.step}</li>
			);
		return(
		<ul className="toy-steps">{toySteps}</ul>
			)
		}
	}

export default Step