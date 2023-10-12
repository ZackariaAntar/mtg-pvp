const deck = (state = [], action) => {
	switch (action.type) {
		case "SET_DECK":
			return action.payload;
		default:
			return state;
	}
};

export default deck;
