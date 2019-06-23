import "./app.css";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header';
import SectionOne from './includes/section_one';
import Begemotik from './includes/begemotik';
import Footer from './includes/footer';

class App extends React.Component{
	render(){
		return(
			<div className="container martin">
				<Header />

				<div className="app">
					<SectionOne />
					<Begemotik />
					{/*<img src={require('./images/edinorogka.jpeg')} alt="Красавчик" />*/}
					<Footer />
				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
	);