import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
// const mtg = require('mtgsdk')

function* searchByName(action){
    console.log('Arrived at searchByName in deckBuildingSaga', action.payload);
    try {
        const cards = yield axios.post(`/api/search`, action.payload)
        yield console.log('THIS IS WHAT IS RETURNED!!', cards);
        const filtered = cards.data.reduce((want, avoid) => {
			const exists = want.some((card) => card.name === avoid.name);
			return exists ? want : [...want, avoid];
		}, []);
        yield put({type:'SET_SEARCH_RESULTS', payload: filtered})
        yield put({type:'SET_LOADING', payload: false})

    } catch (error) {
        console.log(error);
        yield put({type:'SET_LOADING', payload: false})


    }
}

function* addToDeck(action) {
	console.log("Arrived at addToDeck in deckBuildingSaga", action.payload);
	try {
		yield axios.post(`/api/deck`, action.payload);
        yield put({type:"GET_DECK"})

	} catch (error) {
		console.log(error);

	}
}

function* getDeck() {
	console.log("Arrived at getDeck in deckBuildingSaga");
	try {
        const deck = yield axios.get(`/api/deck/`);
        console.log('HERE IS DECK', deck.data);
        yield put({type:"SET_DECK", payload:deck.data})

	} catch (error) {
		console.log(error);
	}
}


function* deckBuildingSaga(){
    yield takeLatest("GET_CARD_BY_NAME", searchByName )
    yield takeLatest("ADD_TO_DECK", addToDeck )
    yield takeLatest("GET_DECK", getDeck )
}

export default deckBuildingSaga;