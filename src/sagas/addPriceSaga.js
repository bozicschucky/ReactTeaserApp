import { call, put, takeLatest } from "redux-saga/effects";
import { addSeatPrices } from "../actions/addPrice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* addPrice(action) {
	yield put(addSeatPrices({ type: "ADD_PRICE", user: "user" }));
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* addPriceWatcher() {
	yield takeLatest("ADD_PRICE", addPrice);
}
