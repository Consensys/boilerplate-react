import React from "react";
import toJson from "enzyme-to-json";

import IconButton from "@material-ui/core/IconButton";

import AppBarIconButton from "../IconButton";
import createShallow from "../../../tests-utils/createShallow";

describe("<AppBarIconButton />", () => {
    let shallow;
    let wrapper;
    let props = {};

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });

    beforeEach(() => {
        props.onClick = jest.fn();
        wrapper = shallow(<AppBarIconButton {...props} />);
    });

    it("renders 1 button", () => {
        expect(wrapper.find(IconButton).length).toEqual(1);
    });

    it("button is functional", () => {
        wrapper
            .find(IconButton)
            .at(0)
            .simulate("click");
        expect(props.onClick.mock.calls.length).toEqual(1);
    });

    describe("when shifted=true", () => {
        beforeEach(() => {
            wrapper = shallow(<AppBarIconButton {...props} shifted />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe("when shifted=false", () => {
        beforeEach(() => {
            wrapper = shallow(<AppBarIconButton {...props} />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});
