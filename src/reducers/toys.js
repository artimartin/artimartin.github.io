import toys from '../db/toys';
const toysList = (state = [12,14], action) => {
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