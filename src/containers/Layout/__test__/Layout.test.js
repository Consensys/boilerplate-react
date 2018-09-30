import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Route, Switch } from "react-router";

import Layout from "../Layout";

describe("<Layout />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it("renders 1 <Switch /> components", () => {
        expect(wrapper.find(Switch).length).toEqual(1);
    });

    it("renders 2 <Route /> components", () => {
        expect(wrapper.find(Route).length).toEqual(2);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
