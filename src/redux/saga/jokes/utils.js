import { call } from "redux-saga/effects";

function* fetchRandomJoke() {
    const { value } = yield call(
        get,
        "https://api.chucknorris.io/jokes/random"
    );
    return value;
}

const get = url => fetch(url).then(res => res.json());

export { fetchRandomJoke };
