import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";
import { push } from "react-router-redux";

import NoWhereHomeButton from "../HomeButton";
import { HOME } from "../../../constants/routes";

describe("<AppBarTitle />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore();
        wrapper = shallow(<NoWhereHomeButton />, { context: { store } });
    });

    it("onClick props should have been injected", () => {
        expect(wrapper.props().onClick).toBeDefined();
    });

    it("router push action should be dispatch on click", () => {
        wrapper.props().onClick();
        expect(store.getActions()).toEqual([push(HOME)]);
    });
});
