import React from "react";
import toJson from "enzyme-to-json";

import AppBar from "../AppBar";
import AppBarToolbar from "../Toolbar";
import createShallow from "../../../tests-utils/createShallow";

describe("<AppBar />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 2 });
    });

    beforeEach(() => {
        wrapper = shallow(<AppBar />);
    });

    it("has className appBar", () => {
        expect(wrapper.props().className).toContain("appBar");
    });

    it("renders 1 <AppBarToolbar /> components", () => {
        expect(wrapper.find(AppBarToolbar).length).toEqual(1);
    });

    describe("when shifted=true", () => {
        beforeEach(() => {
            wrapper = shallow(<AppBar shifted />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("has className appBarShifted", () => {
            expect(wrapper.props().className).toContain("appBarShifted");
        });
    });

    describe("when shifted=false", () => {
        beforeEach(() => {
            wrapper = shallow(<AppBar />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("does not have className appBarShift", () => {
            expect(wrapper.props().className).not.toContain("appBarShift");
        });
    });
});
