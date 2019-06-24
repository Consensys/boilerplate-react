import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { MuiThemeProvider } from "@material-ui/core/styles";
// Redux
import createStore from "./redux/store";
// History
import { history } from "./redux/enhancers/middlewares/router";
// Theme
import theme from "./constants/theme";
// Container
import Layout from "./containers/Layout/Layout";

const App = () => (
    <Provider store={createStore()}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
                <Layout />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>
);

export default App;
