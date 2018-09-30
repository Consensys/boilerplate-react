import { compose as _compose } from "redux";

// Enables redux-devtools extension
const compose =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _compose
        : _compose;

export default compose;
