import React from "react";
import toJson from "enzyme-to-json";

import Home from "../Home";
import createShallow from "../../../tests-utils/createShallow";

describe("<Home />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
