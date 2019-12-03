import "./app.css";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Header from './includes/header';
import Footer from './includes/footer';
import reducer from './reducers';
import ToysList from './components/ToysList';

const store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isShemaActive:false,
			selectedToy:0
		};

		this.toyToggle = id => {
			const idx = toysDB.findIndex(el=>el.id == id);
			this.setState({selectedToy:idx });
		}
	}
	render(){
		const {isShemaActive,selectedToy}=this.state;

		return(
			<div className="martin">
			<noscript><div class="noscript">К сожалению, Ваш браузер не поддерживает скрипты.</div></noscript>
				<Header />
				<div className="container app">
					<ToysList />

					 {/*
				 	// <ToysList
					// 	toyToggle={this.toyToggle}
					// 	/>
					*/ }
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('app')
	);