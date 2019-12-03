import './ShemaList.css';
import React,{Component} from 'react';
import Step from './Step';

class ShemaList extends Component{
	render(){
		const {shema,idNum} = this.props;
		const shemaElements = shema.map(punkt =>
			<li key={punkt.id} className="shemalist">
				<span className="step-title">{punkt.title}</span>
				<Step text={punkt.text} punkt={idNum+punkt.id}/>
			</li>
			);
		// console.log({idNum})
		return(
			<ul>{shemaElements}</ul>
			)
	}
}
export default ShemaList;