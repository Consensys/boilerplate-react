import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import HomeIcon from "@material-ui/icons/Home";

import ListItem1 from "../../UI/ListItem/1";
import SidebarHomeItem from "../HomeItem";

describe("<SidebarHomeItem />", () => {
    let wrapper;
    let props = {};

    beforeEach(() => {
        props = {
            onClick: jest.fn()
        };
        wrapper = shallow(<SidebarHomeItem {...props} />);
    });

    it("renders 1 ListItem1", () => {
        expect(wrapper.find(ListItem1).length).toEqual(1);
    });

    it("renders 1 HomeIcon", () => {
        expect(
            wrapper
                .dive()
                .dive()
                .find(HomeIcon).length
        ).toEqual(1);
    });

    it("ListItem1 button is functional", () => {
        wrapper
            .find(ListItem1)
            .at(0)
            .simulate("click");
        expect(props.onClick.mock.calls.length).toEqual(1);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
