import { put, call } from "redux-saga/effects";
// Actions
import {
    startFetchingJoke,
    endFetchingJoke,
    setJoke
} from "../../../actions/jokes";
import { addError } from "../../../actions/errors";
// Utils
import { fetchRandomJoke } from "../utils";
import { fetchJokeSaga } from "../workers";

describe("jokes workers", () => {
    let gen;

    describe("when there is no error", () => {
        beforeAll(() => {
            gen = fetchJokeSaga();
        });

        it("should dispatch a startFetchingJoke action", () => {
            expect(gen.next().value).toEqual(put(startFetchingJoke()));
        });

        it("should call fetchRandomJoke", () => {
            expect(gen.next().value).toEqual(call(fetchRandomJoke));
        });

        it("should dispatch a setJoke action with jokeTest as parameter", () => {
            const jokeTest = "jokeTest";
            expect(gen.next(jokeTest).value).toEqual(put(setJoke(jokeTest)));
        });

        it("should dispatch a endFetchingJoke action", () => {
            expect(gen.next().value).toEqual(put(endFetchingJoke()));
        });

        it("should be done", () => {
            expect(gen.next().done).toEqual(true);
        });
    });

    describe("when there is an error", () => {
        beforeAll(() => {
            gen = fetchJokeSaga();
            gen.next();
        });

        it("should dispatch a addError action", () => {
            expect(gen.throw("test").value).toEqual(
                put(addError("Unable to fetch the joke."))
            );
        });

        it("should dispatch a endFetchingJoke action", () => {
            expect(gen.next().value).toEqual(put(endFetchingJoke()));
        });

        it("should be done", () => {
            expect(gen.next().done).toEqual(true);
        });
    });
});
