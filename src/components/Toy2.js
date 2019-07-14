import './Toy.css';
import React,{Component} from 'react';

class Toy extends Component {
	constructor(props){
		super(props);
		this.state = {toyActive: null };
}
render(){
	const {toy,isActive,toyToggle} = this.props
	return(
		<div className="row toy">
			<div onClick={toyToggle} className="toy-header">
				<h4 className="toy-title">{toy.title}</h4>
				<div className="toy-author">Автор: {toy.author}</div>
				<img src={toy.image} 
					alt={toy.title} 
					className="toy-image" 
				/>
			</div>
			{this.getShema()}
		</div>
		)
	}

	getShema(){
	const {toy,isActive} = this.props
	if(!isActive) return null
		return (
			<div className='toy-build-shema'>
				<ShemaList shema={toy.shema} />
			</div>
		)
	}
}

export default Toy;
