import './ShemaContainer.css';
import React from 'react';
import {connect} from 'react-redux';
import ShemaList from './ShemaList';

export default class ShemaContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={isActive:false}
	}
	render(){
		const {toy,title,idNum} = this.props;
		const shemaID=toy;
	return(
		<div className='shemacontainer'>
		<h1 className='shemacontainer-title'>{idNum} - {title}</h1>
			<ShemaList shema={shemaID} idNum={idNum}/>
		</div>
	)
	}
}