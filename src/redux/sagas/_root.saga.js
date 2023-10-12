import { all } from "redux-saga/effects";
import deckBuildingSaga from "./deck.building.saga";

export default function* rootSaga() {
	yield all([
        deckBuildingSaga(),
    ]);
}

