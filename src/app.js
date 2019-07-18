import "./app.css";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import Header from './includes/header';
import {toys} from './db/toys';
import ToysList from './components/ToysList';
import ShemaList from './components/ShemaList';
import ShemaContainer from './components/ShemaContainer';
import Footer from './includes/footer';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isShemaActive:false,
			selectedToy:0
		};

		this.toyToggle = id => {
			const idx = toys.findIndex(el=>el.id == id);
			this.setState({selectedToy:idx });
		}
	}
	render(){
		const {isShemaActive,selectedToy}=this.state;

		return(
			<div className="martin">
				<Header />
				<div className="container app">
					<ToysList 
						toys={toys} 
						toyToggle={this.toyToggle}
						/>
					<ShemaContainer
						title={toys[selectedToy].title} 
						toy={toys[selectedToy].shema} 
					/>
				</div>
				<Footer />
			</div>
			)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
	);