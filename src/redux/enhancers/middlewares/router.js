import { routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

// Configure react-router-redux
export const history = createHistory();

export default routerMiddleware(history);
