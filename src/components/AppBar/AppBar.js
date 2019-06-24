import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material Components
import MuiAppBar from "@material-ui/core/AppBar";
// Components
import AppBarToolbar from "./Toolbar";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
}));

const AppBar = ({ shifted }) => {
    const classes = useStyles();
    return (
        <MuiAppBar
            position="absolute"
            className={clsx(classes.appBar, shifted && classes.appBarShifted)}
        >
            <AppBarToolbar shifted={shifted} />
        </MuiAppBar>
    );
};

AppBar.propTypes = {
    shifted: PropTypes.bool
};

export default AppBar;
