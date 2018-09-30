import theme from "../theme";

test("materialUiTheme should match snapshot", () => {
    expect(theme).toMatchSnapshot();
});
