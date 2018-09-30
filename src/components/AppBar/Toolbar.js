import React from "react";
import PropTypes from "prop-types";

import Toolbar from "@material-ui/core/Toolbar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import AppBarTitle from "../../containers/AppBar/Title";
import AppBarIconButton from "../../containers/AppBar/IconButton";

const AppBarToolbar = ({ width, shifted }) => (
    <Toolbar disableGutters={!shifted || isWidthUp("md", width)}>
        <AppBarIconButton />
        <AppBarTitle />
    </Toolbar>
);

AppBarToolbar.propTypes = {
    width: PropTypes.string.isRequired,
    shifted: PropTypes.bool
};

export default withWidth()(AppBarToolbar);
