import { put, call } from "redux-saga/effects";

// Actions
import {
    startFetchingJoke,
    endFetchingJoke,
    setJoke
} from "../../actions/jokes";
import { addError } from "../../actions/errors";

// Utils
import { fetchRandomJoke } from "./utils";

function* fetchJokeSaga() {
    try {
        yield put(startFetchingJoke());
        const joke = yield call(fetchRandomJoke);
        yield put(setJoke(joke));
    } catch (err) {
        yield put(addError("Unable to fetch the joke."));
    } finally {
        yield put(endFetchingJoke());
    }
}

export { fetchJokeSaga };
