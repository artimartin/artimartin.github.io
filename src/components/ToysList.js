import './ToysList.css';
import React,{Component} from 'react';
import Toy from './Toy';
import ToysListTrigger from '../triggers/toysListTrigger'

class ToysList extends Component {
	render() {
	const {toys,openId,toggleToyTrigger} = this.props
	const toyElements = toys.map(toy => 
		<li key={toy.id} className="toy-item">
			<Toy 
				toy={toy} 
				isActive = {toy.id === openId}
				toggleActive={toggleToyTrigger(toy.id)}
			/> 
		</li>
		)
		return(
			<ul className="toy-list">
				{toyElements}
			</ul>
			)
	}
}
export default ToysListTrigger(ToysList);

