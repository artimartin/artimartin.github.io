import './Step.css';
import React,{Component} from 'react'
class Step extends Component {
	render(){
		const {text,punkt} = this.props;
		const toySteps = text.map(step =>
			<li key={punkt+step.id} stepkey={punkt+step.id} className="toy-step-item">{step.step}</li>
			);
			// console.log('Шаг: ',{punkt})
		return(
		<ul className="toy-steps">{toySteps}</ul>
			)
		}
	}
export default Step