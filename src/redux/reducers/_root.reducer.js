import { combineReducers } from "redux";
import searchResults from "./card.search.results.reducer";
import cardTypes from "./card.types.reducer";
import loading from "./loading.toggle.reducer";
import deck from "./deck.reducer"


const rootReducer = combineReducers({
    searchResults,
    cardTypes,
    loading,
    deck

});

export default rootReducer;
