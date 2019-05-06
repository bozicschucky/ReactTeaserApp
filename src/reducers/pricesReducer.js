// import { PRICE } from "../actions/types";
const initialState = {
	value: {},
	prices: []
};

function addprices(params) {
	console.log("prices");
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "PRICE":
			return {
				...state,
				payload: action.payload
			};
		default:
			return state;
	}
};
