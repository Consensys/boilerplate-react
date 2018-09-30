import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { createMockStore } from "redux-test-utils";
import { push } from "react-router-redux";

import SidebarHomeItem from "../HomeItem";
import { HOME } from "../../../constants/routes";

describe("<SidebarHomeItem />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore({
            router: { location: { pathname: "/test" } }
        });
        wrapper = shallow(<SidebarHomeItem />, { context: { store } });
    });

    it("push props should have been injected", () => {
        expect(wrapper.props().push).toBeDefined();
    });

    it("push dispatch a router push action", () => {
        wrapper.props().push();
        expect(store.getActions()).toEqual([push(HOME)]);
    });

    describe("when location match", () => {
        beforeEach(() => {
            store = createMockStore({
                router: { location: { pathname: HOME } }
            });
            wrapper = shallow(<SidebarHomeItem />, { context: { store } });
        });

        it("props selected=true", () => {
            expect(wrapper.props().selected).toBe(true);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe("when location does not match", () => {
        beforeEach(() => {
            store = createMockStore({
                router: { location: { pathname: "/no-match" } }
            });
            wrapper = shallow(<SidebarHomeItem />, { context: { store } });
        });

        it("props selected=false", () => {
            expect(wrapper.props().selected).toBeFalsy();
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});
