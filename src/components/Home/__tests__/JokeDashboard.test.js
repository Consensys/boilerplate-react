import React from "react";
import toJson from "enzyme-to-json";

import JokeDashboard from "../JokeDashboard";
import createShallow from "../../../tests-utils/createShallow";

describe("<Home />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });
    beforeEach(() => {
        wrapper = shallow(<JokeDashboard />);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
