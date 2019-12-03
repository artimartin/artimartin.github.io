import toysDB from './toysDB';

const toysList = (state = {toysDB}, action) => {
	switch (action.type) {
		case 'ADD_TOY':
		return [
		...state, action.payload
		];
		default:
		return state;
	}
}
export default toysList;