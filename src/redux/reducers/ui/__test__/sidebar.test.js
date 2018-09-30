import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../../../actions/ui";
import sidebarReducer from "../sidebar";

describe("sidebarReducer", () => {
    let state = {};

    it("default state match", () => {
        expect(sidebarReducer(undefined, {})).toMatchSnapshot();
    });

    describe(`On ${OPEN_SIDEBAR}`, () => {
        beforeEach(() => {
            state = sidebarReducer({ open: false }, { type: OPEN_SIDEBAR });
        });

        it("open=true", () => {
            expect(state.open).toEqual(true);
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });

    describe(`On ${CLOSE_SIDEBAR}`, () => {
        beforeEach(() => {
            state = sidebarReducer({ open: true }, { type: CLOSE_SIDEBAR });
        });

        it("open=false", () => {
            expect(state.open).toEqual(false);
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });

    describe("On default", () => {
        beforeEach(() => {
            state = sidebarReducer(undefined, { type: undefined });
        });

        it("state matches snapshot", () => {
            expect(state).toMatchSnapshot();
        });
    });
});
