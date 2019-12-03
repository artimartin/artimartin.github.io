import './ToysList.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import ShemaList from './ShemaList';
import ShemaContainer from './ShemaContainer';

import Toy from './Toy';
import ToysListTrigger from '../triggers/toysListTrigger';

class ToysList extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedToy:0
		};

		this.toyToggle = id => {
			const idx = this.props.toys.findIndex(el=>el.id == id);
			this.setState({selectedToy:idx});
		}
	}
	render() {
	const {selectedToy} = this.state
	const {toyToggle} = this.props
	const toyElements = this.props.toys.map(toy => 
		<li key={toy.id} className="toy-item">
			<Toy 
				toy={toy}
				toyToggle={() => this.toyToggle(toy.id)} 
			/>
		</li>
		)
		return(
				<div className="content">
					<ul className="toy-list">
						{toyElements}
					</ul>
					<ShemaContainer 
						toy={this.props.toys[selectedToy].shema}
						title={this.props.toys[selectedToy].title} 
						idNum={this.props.toys[selectedToy].id}
					/>
				</div>
			)
	}
}
//				{/* toyToggle={()=>toyToggle(toy.id)} */}
export default connect(
	state => ({
		toys: state.toysList.toysDB
	}),
	dispatch => ({
		onAddToy: (ToyItem) => {
		dispatch({type:'ADD_TOY',payload:ToyItem})
	}
})
)(ToysList);
