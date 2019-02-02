import { createStore } from "redux";

import sagaMiddleware from "./enhancers/middlewares/saga";

import _reducer from "./reducers";
import _enhancer from "./enhancers";
import _saga from "./saga";

export default (
    reducer = _reducer,
    preloadedState = undefined,
    enhancer = _enhancer
) => {
    const store = createStore(reducer, preloadedState, enhancer);
    sagaMiddleware.run(_saga);
    return store;
};
