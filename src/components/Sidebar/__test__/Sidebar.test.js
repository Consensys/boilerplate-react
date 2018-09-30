import React from "react";
import toJson from "enzyme-to-json";

import Drawer from "@material-ui/core/Drawer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Sidebar from "../Sidebar";
import SidebarHomeItem from "../../../containers/Sidebar/HomeItem";
import SidebarHeader from "../../../containers/Sidebar/Header";
import createShallow from "../../../tests-utils/createShallow";

describe("<Sidebar />", () => {
    let shallow;
    let wrapper;
    let props = {};

    beforeEach(() => {
        props = {
            onClose: jest.fn()
        };
        shallow = createShallow({ dive: 3 });
        wrapper = shallow(<Sidebar {...props} />);
    });

    it("renders 1 <Drawer /> components", () => {
        expect(wrapper.find(Drawer).length).toEqual(1);
    });

    it("renders 1 <SidebarHeader /> components", () => {
        expect(wrapper.find(SidebarHeader).length).toEqual(1);
    });

    it("renders 1 <SidebarHomeItem /> components", () => {
        expect(wrapper.find(SidebarHomeItem).length).toEqual(1);
    });

    it("button is functional", () => {
        wrapper
            .find(Drawer)
            .at(0)
            .simulate("close");
        expect(props.onClose.mock.calls.length).toEqual(1);
    });

    describe("when width is smUp", () => {
        beforeEach(() => {
            global.window.innerWidth = 600;
            shallow = createShallow({ dive: 4 });
            wrapper = shallow(
                <MuiThemeProvider
                    theme={createMuiTheme({
                        breakpoints: { values: { sm: 600 } }
                    })}
                >
                    <Sidebar {...props} />
                </MuiThemeProvider>
            );
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("Drawer has class drawer and paper", () => {
            expect(
                wrapper
                    .find(Drawer)
                    .at(0)
                    .props().classes.docked
            ).toBeDefined();
            expect(
                wrapper
                    .find(Drawer)
                    .at(0)
                    .props().classes.paper
            ).toBeDefined();
        });
    });

    describe("when width is smDown", () => {
        beforeEach(() => {
            global.window.innerWidth = 599;
            shallow = createShallow({ dive: 4 });
            wrapper = shallow(
                <MuiThemeProvider
                    theme={createMuiTheme({
                        breakpoints: { vaues: { sm: 600 } }
                    })}
                >
                    <Sidebar {...props} />
                </MuiThemeProvider>
            );
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("Drawer has not class drawer nor paper", () => {
            expect(
                wrapper
                    .find(Drawer)
                    .at(0)
                    .props().classes.docked
            ).toBeFalsy();
            expect(
                wrapper
                    .find(Drawer)
                    .at(0)
                    .props().classes.paper
            ).toBeFalsy();
        });
    });
});
