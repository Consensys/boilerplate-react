import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Route, Switch } from "react-router";

import LayoutContent from "../Content";
import Home from "../../../components/Home/Home";
import NoWhere from "../../../components/NoWhere/NoWhere";
import { HOME } from "../../../constants/routes";

describe("<LayoutContent />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LayoutContent />);
    });

    it("renders 1 <Switch /> components", () => {
        expect(wrapper.find(Switch).length).toEqual(1);
    });

    it("renders 2 <Route /> components", () => {
        expect(wrapper.find(Route).length).toEqual(2);
    });

    it("route 1 renders a <Home /> components", () => {
        expect(
            wrapper
                .find(Route)
                .at(0)
                .props().path
        ).toEqual(HOME);
        expect(
            wrapper
                .find(Route)
                .at(0)
                .props().component
        ).toEqual(Home);
    });

    it("route 2 renders a <NoWhere /> components", () => {
        expect(
            wrapper
                .find(Route)
                .at(1)
                .props().component
        ).toEqual(NoWhere);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
