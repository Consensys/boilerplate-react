import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import ButtonBase from "@material-ui/core/ButtonBase";

import AppBarTitle from "../Title";

describe("<AppBarTitle />", () => {
    let wrapper;
    let props = {};

    beforeEach(() => {
        props.onClick = jest.fn();
        wrapper = shallow(<AppBarTitle {...props} />);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders 1 button", () => {
        expect(wrapper.find(ButtonBase).length).toEqual(1);
    });

    it("button is functional", () => {
        wrapper
            .find(ButtonBase)
            .at(0)
            .simulate("click");
        expect(props.onClick.mock.calls.length).toEqual(1);
    });
});
