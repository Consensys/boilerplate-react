import { createSelector } from "reselect";
import { matchPath } from "react-router-dom";

const selectCurrentPath = state => state.router.location.pathname;

export const selectIsActualRoute = targetedPathname =>
    createSelector(
        [selectCurrentPath],
        currentPath => !!matchPath(currentPath, { path: targetedPathname })
    );
