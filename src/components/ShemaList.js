import './ShemaList.css';
import React,{Component} from 'react';
import Step from './Step';

class ShemaList extends Component{
	render(){
		const {shema} =this.props;
		const shemaElements = shema.map(punkt =>
			<li key={punkt.id}>
				<span className="step-title">{punkt.title}</span>
				<Step text={punkt.text} />
			</li>
			);
		
		return(
			<ul>{shemaElements}</ul>
			)
	}
}
export default ShemaList;