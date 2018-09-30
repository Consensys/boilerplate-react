import { openSidebar, closeSidebar, OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../ui";

describe("openSidebar", () => {
    it("returns an action of type $`{OPEN_SIDE_BAR}`", () => {
        expect(openSidebar().type).toEqual(OPEN_SIDEBAR);
    });
});

describe("openSidebar", () => {
    it("return an action of type $`{CLOSE_SIDE_BAR}`", () => {
        expect(closeSidebar().type).toEqual(CLOSE_SIDEBAR);
    });
});
