import { createStore } from "redux";

import _reducer from "./reducers";
import _enhancer from "./enhancers";

export default (
    reducer = _reducer,
    preloadedState = undefined,
    enhancer = _enhancer
) => createStore(reducer, preloadedState, enhancer);
