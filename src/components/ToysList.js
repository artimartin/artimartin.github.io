import './ToysList.css';
import React,{Component} from 'react';
import Toy from './Toy2';
// import ToysListTrigger from '../triggers/toysListTrigger';

class ToysList extends Component {
	render() {
	const {toys, toyToggle} = this.props
	const toyElements = toys.map(toy => 
		<li key={toy.id} className="toy-item">
			<Toy 
				toy={toy}
				toyToggle={()=>toyToggle(toy.id)}
			/> 
		</li>
		)
		return(
		<div className="content">
			<ul className="toy-list">
				{toyElements}
			</ul>
		</div>
			)
	}
}
export default ToysList;

