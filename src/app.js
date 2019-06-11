import "./app.css";
// import edinorogka from "../images/edinorogka.jpeg";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SectionOne from './includes/section_one';
import Footer from './includes/footer';

class App extends React.Component{
	render(){
		return(
			<div className="container martin">
				<div className="app">
					<h1 className="titleHead">Не знаю...</h1>
					<SectionOne />
					<img src={require('./images/edinorogka.jpeg')} alt="Красавчик" />
					<Footer />
				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />,
	document.getElementById('app')
	);