import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";

import SidebarHeader from "../Header";
import { closeSidebar } from "../../../redux/actions/ui";

describe("<SidebarHeader />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore();
        wrapper = shallow(<SidebarHeader />, { context: { store } });
    });

    it("onClick props should have been injected", () => {
        expect(wrapper.props().onClick).toBeDefined();
    });

    it("onClick dispatch closeSidebar() action", () => {
        wrapper.props().onClick();
        expect(store.getActions()).toEqual([closeSidebar()]);
    });
});
