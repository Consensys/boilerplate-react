import React from "react";
import toJson from "enzyme-to-json";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SidebarHeader from "../Header";
import createShallow from "../../../tests-utils/createShallow";

describe("<SidebarHeader />", () => {
    let shallow;
    let wrapper;
    let props = {};

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });

    beforeEach(() => {
        props = {
            onClick: jest.fn()
        };
        wrapper = shallow(<SidebarHeader {...props} />);
    });

    it("renders 1 IconButton", () => {
        expect(wrapper.find(IconButton).length).toEqual(1);
    });

    it("renders 1 ChevronLeftIcon", () => {
        expect(wrapper.find(ChevronLeftIcon).length).toEqual(1);
    });

    it("IconButton button is functional", () => {
        wrapper
            .find(IconButton)
            .at(0)
            .simulate("click");
        expect(props.onClick.mock.calls.length).toEqual(1);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
