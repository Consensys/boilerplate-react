import React from "react";
// Containers
import LayoutContent from "../../containers/Layout/Content";
import Sidebar from "../../containers/Sidebar/Sidebar";
import AppBar from "../../containers/AppBar/AppBar";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    frame: {
        position: "relative",
        display: "flex",
        width: "100%",
        minHeight: "100%"
    },
    content: {
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            minHeight: "calc(100% - 64px)",
            marginTop: 64
        }
    }
}));

const LayoutSkeleton = () => {
    const classes = useStyles();
    return (
        <div className={classes.frame}>
            <AppBar />
            <Sidebar />
            <div className={classes.content}>
                <LayoutContent />
            </div>
        </div>
    );
};

export default LayoutSkeleton;
