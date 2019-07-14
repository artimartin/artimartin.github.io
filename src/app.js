import "./app.css";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header';
import {toys} from './db/toys';
import ToysList from './components/ToysList';
import ShemaContainer from './components/ShemaContainer';
import Footer from './includes/footer';

class App extends React.Component{
	render(){
		return(
			<div className="martin">
				<Header />
				<div className="container app">
					<ToysList toys={toys} />
				<ShemaContainer shema='Kolobok'/>
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
	);