import { START_FETCHING_JOKE, END_FETCHING_JOKE } from "../../../actions/jokes";
import jokesReducer from "../jokes";

describe("jokesReducer", () => {
    let state = {};

    it("default state match", () => {
        expect(jokesReducer(undefined, {})).toMatchSnapshot();
    });

    describe(`On ${START_FETCHING_JOKE}`, () => {
        beforeEach(() => {
            state = jokesReducer(
                { isLoading: false },
                { type: START_FETCHING_JOKE }
            );
        });

        it("isLoading=true", () => {
            expect(state.isLoading).toEqual(true);
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });

    describe(`On ${END_FETCHING_JOKE}`, () => {
        beforeEach(() => {
            state = jokesReducer(
                { isLoading: true },
                { type: END_FETCHING_JOKE }
            );
        });

        it("isLoading=false", () => {
            expect(state.isLoading).toEqual(false);
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });

    describe("On default", () => {
        beforeEach(() => {
            state = jokesReducer(undefined, { type: undefined });
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });
});
