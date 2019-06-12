import "./app.css";
// import edinorogka from "../images/edinorogka.jpeg";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './includes/header';
import SectionOne from './includes/section_one';
import Footer from './includes/footer';

class App extends React.Component{
	render(){
		return(
			<div className="container martin">
				<Header />

				<div className="app">
					<SectionOne />
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