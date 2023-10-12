const cardTypes = (state = [
    "Any",
    "Artifact",
    "Conspiracy",
    "Creature",
    "Enchantment",
    "Instant",
    "Land",
    "Phenomenon",
    "Plane",
    "Planeswalker",
    "Scheme",
    "Sorcery",
    "Tribal",
    "Vanguard"
  ], action) => {
	switch (action.type) {
		case "SET_CARD_TYPES":
			return action.payload;
		default:
			return state;
	}
};

export default cardTypes;
