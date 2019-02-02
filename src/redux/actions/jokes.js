export const FETCH_JOKE = "FETCH_JOKE";
export const fetchJoke = () => ({
    type: FETCH_JOKE
});

export const SET_JOKE = "SET_JOKE";
export const setJoke = joke => ({
    type: SET_JOKE,
    payload: joke
});

export const START_FETCHING_JOKE = "START_FETCHING_JOKE";
export const startFetchingJoke = () => ({
    type: START_FETCHING_JOKE
});

export const END_FETCHING_JOKE = "END_FETCHING_JOKE";
export const endFetchingJoke = () => ({
    type: END_FETCHING_JOKE
});
