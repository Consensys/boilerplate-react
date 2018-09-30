import React from "react";
import toJson from "enzyme-to-json";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppBarToolbar from "../Toolbar";
import createShallow from "../../../tests-utils/createShallow";

describe("<AppBarToolbar />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 4 });
    });

    describe("when shifted=true and width is smDown", () => {
        beforeEach(() => {
            global.window.innerWidth = 959;
            wrapper = shallow(
                <MuiThemeProvider
                    theme={createMuiTheme({
                        breakpoints: { values: { md: 960 } }
                    })}
                >
                    <AppBarToolbar shifted />
                </MuiThemeProvider>
            );
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("has props disableGutters=false", () => {
            expect(wrapper.props().disableGutters).toBeFalsy();
        });
    });

    describe("when shifted=true andd width is mdUp", () => {
        beforeEach(() => {
            global.window.innerWidth = 960;
            wrapper = shallow(
                <MuiThemeProvider
                    theme={createMuiTheme({
                        breakpoints: { values: { md: 960 } }
                    })}
                >
                    <AppBarToolbar shifted />
                </MuiThemeProvider>
            );
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("has props disableGutters=true", () => {
            expect(wrapper.props().disableGutters).toBe(true);
        });
    });

    describe("when shifted=false and width is smDown", () => {
        beforeEach(() => {
            global.window.innerWidth = 959;
            wrapper = shallow(
                <MuiThemeProvider
                    theme={createMuiTheme({
                        breakpoints: { values: { md: 960 } }
                    })}
                >
                    <AppBarToolbar />
                </MuiThemeProvider>
            );
        });

        it("matches snapshot", () => {
            expect(toJson(wrapper)).toMatchSnapshot();
        });

        it("has props disableGutters=true", () => {
            expect(wrapper.props().disableGutters).toBe(true);
        });
    });
});
