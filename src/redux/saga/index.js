import { all } from "redux-saga/effects";

import jokes from "./jokes";

export default function*() {
    yield all([
        // sagas go here
        jokes()
    ]);
}
