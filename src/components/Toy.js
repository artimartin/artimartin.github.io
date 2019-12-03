import './Toy.css';
import React,{Component} from 'react';

class Toy extends Component {
	constructor(props){
		super(props);
		// this.state = {toyActive: null };
}
render(){
	const {toy,toyToggle} = this.props
	// console.log('toyKey: ',{isActive})
	return(
		<div className="row toy">
			<div onClick={toyToggle} className="toy-header">
				<h4 className="toy-title">{toy.id} - {toy.title}</h4>
				<div className="toy-author">Автор: {toy.author}</div>
				<img src={toy.image} 
					alt={toy.title}
					className="toy-image" 
				/>
			</div>
		</div>
		)
	}
}
export default Toy;
