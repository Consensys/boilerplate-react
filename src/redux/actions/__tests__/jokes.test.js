import {
    fetchJoke,
    setJoke,
    startFetchingJoke,
    endFetchingJoke,
    FETCH_JOKE,
    SET_JOKE,
    START_FETCHING_JOKE,
    END_FETCHING_JOKE
} from "../jokes";

const jokeTest = "TEST_SET_JOKE";

describe("fetchJoke", () => {
    it("returns an action of type $`{FETCH_JOKE}`", () => {
        expect(fetchJoke().type).toEqual(FETCH_JOKE);
    });
});

describe("setJoke", () => {
    it("returns an action of type $`{SET_JOKE}` and payload $`{TEST_SET_JOKE}`", () => {
        expect(setJoke(jokeTest).type).toEqual(SET_JOKE);
        expect(setJoke(jokeTest).payload).toEqual(jokeTest);
    });
});

describe("startFetchingJoke", () => {
    it("returns an action of type $`{START_FETCHING_JOKE}`", () => {
        expect(startFetchingJoke().type).toEqual(START_FETCHING_JOKE);
    });
});

describe("endFetchingJoke", () => {
    it("returns an action of type $`{END_FETCHING_JOKE}`", () => {
        expect(endFetchingJoke().type).toEqual(END_FETCHING_JOKE);
    });
});
