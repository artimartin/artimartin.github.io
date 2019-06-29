import "./app.css";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header';
import {toys} from './db/toys';
import ToysList from './components/ToysList';
import SectionOne from './includes/section_one';
import Begemotik from './includes/begemotik';
import Footer from './includes/footer';

class App extends React.Component{
	render(){
		return(
			<div className="martin">
				<Header />
				<div className="container app">
				<ToysList toys={toys} />
					{/* <SectionOne /> */}
					{/* <Begemotik /> */}
					{/*<img src={require('./images/edinorogka.jpeg')} alt="Красавчик" />*/}
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
	);