import React from "react";
import toJson from "enzyme-to-json";

import LayoutSkeleton from "../Skeleton";
import LayoutContent from "../../../containers/Layout/Content";
import AppBar from "../../../containers/AppBar/AppBar";
import Sidebar from "../../../containers/Sidebar/Sidebar";
import createShallow from "../../../tests-utils/createShallow";

describe("<LayoutSkeleton />", () => {
    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: 1 });
    });

    beforeEach(() => {
        wrapper = shallow(<LayoutSkeleton />);
    });

    it("renders 1 <LayoutContent /> components", () => {
        expect(wrapper.find(LayoutContent).length).toEqual(1);
    });

    it("renders 1 <AppBar /> components", () => {
        expect(wrapper.find(AppBar).length).toEqual(1);
    });

    it("renders 1 <Sidebar /> components", () => {
        expect(wrapper.find(Sidebar).length).toEqual(1);
    });

    it("matches snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
