import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";

import AppBarIconButton from "../IconButton";
import { openSidebar } from "../../../redux/actions/ui";

describe("<AppbarButton />", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = createMockStore({ ui: { sidebar: { open: true } } });
        wrapper = shallow(<AppBarIconButton />, { context: { store } });
    });

    it("shifted props is injected", () => {
        expect(wrapper.props().shifted).toBe(true);
    });

    it("onClick props is injected", () => {
        expect(wrapper.props().onClick).toBeDefined();
    });

    it("onClick dispatch openSidebar() action", () => {
        wrapper.props().onClick();
        expect(store.getActions()).toEqual([openSidebar()]);
    });
});
