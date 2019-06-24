import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material Components
import { Drawer, List } from "@material-ui/core";
// Containers
import SidebarHomeItem from "../../containers/Sidebar/HomeItem";
import SidebarHeader from "../../containers/Sidebar/Header";
// Styles
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    drawer: {
        height: "100vh",
        position: "fixed"
    },
    drawerPaper: {
        position: "relative",
        height: "100%",
        width: 240,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        width: 0,
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up("sm")]: {
            width: 60
        }
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: 240
    }
}));

const Sidebar = ({ width, variant, open, onClose }) => {
    const classes = useStyles();
    const isLargeScreen = isWidthUp("sm", width);
    return (
        <Drawer
            variant={isLargeScreen ? "permanent" : undefined}
            classes={
                isLargeScreen
                    ? {
                          docked: classes.drawer,
                          paper: clsx(
                              classes.drawerPaper,
                              !open && classes.drawerPaperClose
                          )
                      }
                    : {}
            }
            open={open}
            onClose={onClose}
        >
            <div className={classes.drawerInner}>
                <SidebarHeader />
                <List className={classes.list}>
                    <SidebarHomeItem />
                </List>
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    variant: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func
};

export default withWidth()(Sidebar);
