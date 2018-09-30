import React from "react";
import toJson from "enzyme-to-json";

import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import getClasses from "@material-ui/core/test-utils/getClasses";

import ListItem1 from "../1";
import createShallow from "../../../../tests-utils/createShallow";

describe("<ListItem1 />", () => {
    let shallow;
    let wrapper;
    let classes;
    let props = {};

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });

    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            text: "Test-Text",
            icon: <HomeIcon />
        };
        classes = classes = getClasses(<ListItem1 {...props} />);
        wrapper = shallow(<ListItem1 {...props} />);
    });

    it("renders 1 ListItem, ListItemIcon, ListItemText", () => {
        expect(wrapper.find(ListItem).length).toEqual(1);
        expect(wrapper.find(ListItemIcon).length).toEqual(1);
        expect(wrapper.find(ListItemText).length).toEqual(1);
    });

    it("renders 1 HomeIcon", () => {
        expect(wrapper.find(HomeIcon).length).toEqual(1);
    });

    it("ListItem button is functional", () => {
        wrapper
            .find(ListItem)
            .at(0)
            .simulate("click");
        expect(props.onClick.mock.calls.length).toEqual(1);
    });

    describe("when selected=true", () => {
        beforeEach(() => {
            wrapper = shallow(<ListItem1 {...props} selected />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("ListItemIcon has class iconSelected", () => {
            expect(
                wrapper
                    .find(ListItemIcon)
                    .at(0)
                    .hasClass(classes.iconSelected)
            ).toBe(true);
        });
    });

    describe("when selected=false", () => {
        beforeEach(() => {
            wrapper = shallow(<ListItem1 {...props} selected={false} />);
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("ListItemIcon has not class iconSelected", () => {
            expect(
                wrapper
                    .find(ListItemIcon)
                    .at(0)
                    .hasClass(classes.iconSelected)
            ).toBe(false);
        });
    });
});
