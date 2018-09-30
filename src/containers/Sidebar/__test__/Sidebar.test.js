import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";

import Sidebar from "../Sidebar";
import { closeSidebar } from "../../../redux/actions/ui";

describe("<Sidebar />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore({ ui: { sidebar: { open: true } } });
        wrapper = shallow(<Sidebar />, { context: { store } });
    });

    it("open props is injected", () => {
        expect(wrapper.props().open).toBe(true);
    });

    it("onClose props is injected", () => {
        expect(wrapper.props().onClose).toBeDefined();
    });

    it("onClose dispatch closeSidebar() action", () => {
        wrapper.props().onClose();
        expect(store.getActions()).toEqual([closeSidebar()]);
    });
});
