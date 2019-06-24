import React from "react";
import PropTypes from "prop-types";
// Material Components
import Toolbar from "@material-ui/core/Toolbar";
// Containers
import AppBarTitle from "../../containers/AppBar/Title";
import AppBarIconButton from "../../containers/AppBar/IconButton";
// Styles
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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
