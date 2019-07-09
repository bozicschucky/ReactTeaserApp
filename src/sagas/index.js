import { all, fork } from "redux-saga/effects";
import addPriceWatcher from "./addPriceSaga";
export default function* root() {
	yield all([fork[addPriceWatcher]]);
}
