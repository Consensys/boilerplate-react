import { applyMiddleware } from "redux";

import router from "./router";

const middlewares = [
    router
    // other middlewares go here
];
export default applyMiddleware(...middlewares);
