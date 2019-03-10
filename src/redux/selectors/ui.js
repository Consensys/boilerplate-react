// Libs
import { matchPath } from "react-router";
import { createSelector } from "reselect";

// Constants
import { HOME } from "../../constants/routes";

// Item selection selector
const getPathName = (state, props) => state.router.location.pathname;
export const isItemSelected = createSelector(
    getPathName,
    pathname => !!matchPath(pathname, { path: HOME })
);
