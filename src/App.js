import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { MuiThemeProvider } from "@material-ui/core/styles";

import createStore from "./redux/store";
import { history } from "./redux/enhancers/middlewares/router";
import Layout from "./containers/Layout/Layout";
import theme from "./constants/theme";

class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider theme={theme}>
                        <Layout />
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
