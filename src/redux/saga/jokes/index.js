import { takeLatest, all } from "redux-saga/effects";

import { FETCH_JOKE } from "../../actions/jokes";

import { fetchJokeSaga } from "./workers";

function* watchFetchJoke() {
    yield takeLatest(FETCH_JOKE, fetchJokeSaga);
}

export default function*() {
    yield all([watchFetchJoke()]);
}
