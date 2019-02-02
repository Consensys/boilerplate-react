import { addError, ADD_ERROR } from "../errors";

const errorTest = "TEST_ADD_ERROR";

describe("addError", () => {
    it("returns an action of type $`{ADD_ERROR}` and payload $`{TEST_ADD_ERROR}`", () => {
        expect(addError(errorTest).type).toEqual(ADD_ERROR);
        expect(addError(errorTest).payload).toEqual(errorTest);
    });
});
