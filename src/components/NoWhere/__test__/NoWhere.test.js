import React from "react";
import toJson from "enzyme-to-json";

import ReportIcon from "@material-ui/icons/Report";

import NoWhere from "../NoWhere";
import NoWhereHomeButton from "../../../containers/NoWhere/HomeButton";
import createShallow from "../../../tests-utils/createShallow";

describe("<NoWhere />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });

    beforeEach(() => {
        wrapper = shallow(<NoWhere />);
    });

    it("renders 1 ReportIcon", () => {
        expect(wrapper.find(ReportIcon).length).toEqual(1);
    });

    it("renders 1 BackHomeButton", () => {
        expect(wrapper.find(NoWhereHomeButton).length).toEqual(1);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
