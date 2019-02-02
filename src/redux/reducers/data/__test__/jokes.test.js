import { SET_JOKE } from "../../../actions/jokes";
import jokesReducer from "../jokes";

const testJoke = "TEST_SET_JOKE";

describe("jokesReducer", () => {
    let state = {};

    it("default state match", () => {
        expect(jokesReducer(undefined, {})).toMatchSnapshot();
    });

    describe(`On ${SET_JOKE}`, () => {
        beforeEach(() => {
            state = jokesReducer(
                { currentJoke: "" },
                { type: SET_JOKE, payload: testJoke }
            );
        });

        it("currentJoke=TEST_SET_JOKE", () => {
            expect(state.currentJoke).toEqual(testJoke);
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
