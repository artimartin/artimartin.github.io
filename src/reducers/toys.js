import toys from '../db/toys';

const toysList = (state = {toys}, action) => {
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