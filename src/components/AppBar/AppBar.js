import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import MuiAppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

import AppBarToolbar from "./Toolbar";

const styles = theme => ({
    appBar: {
        position: "fixed",
        top: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShifted: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }
});

const AppBar = ({ classes, shifted }) => {
    return (
        <MuiAppBar
            position="absolute"
            className={classNames(
                classes.appBar,
                shifted && classes.appBarShifted
            )}
        >
            <AppBarToolbar shifted={shifted} />
        </MuiAppBar>
    );
};

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    shifted: PropTypes.bool
};

export default withStyles(styles)(AppBar);
