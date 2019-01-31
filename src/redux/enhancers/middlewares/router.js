import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

// Configure connected-react-router
export const history = createBrowserHistory();

export default routerMiddleware(history);
