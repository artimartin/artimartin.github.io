import './Toy.css';
import React,{Component} from 'react';
import ShemaList from './ShemaList';
import ToyTrigger from '../triggers/toyTrigger';

class Toy extends Component {
	constructor(props){
		super(props);
}
render(){
	const {toy,isActive,toggleTrigger} = this.props

	return(
		<div className="row toy-element">
			<h4 className="toy-title" 
				onClick={toggleTrigger}>{toy.title}</h4>
			<span className="toy-author">Автор: {toy.author}</span>
			<img src={toy.image} onClick={toggleTrigger}
					alt={toy.title} 
					className="toy-image" 
				/>
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

export default ToyTrigger(Toy);
