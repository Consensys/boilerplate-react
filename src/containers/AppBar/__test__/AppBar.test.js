import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";

import AppBar from "../AppBar";

describe("<AppBar />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore({ ui: { sidebar: { open: true } } });
        wrapper = shallow(<AppBar />, { context: { store } });
    });

    it("shifted props should have been injected", () => {
        expect(wrapper.props().shifted).toBe(true);
    });
});
