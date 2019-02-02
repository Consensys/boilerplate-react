import { applyMiddleware } from "redux";

import router from "./router";
import saga from "./saga";

const middlewares = [
    router,
    saga
    // other middlewares go here
];
export default applyMiddleware(...middlewares);
