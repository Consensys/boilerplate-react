import React from "react";
import PropTypes from "prop-types";
// Material Components
import { IconButton } from "@material-ui/core";
// Icons
import { ChevronLeft as ChevronLeftIcon } from "mdi-material-ui";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(1),
        ...theme.mixins.toolbar
    }
}));

const SidebarHeader = ({ onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.drawerHeader}>
            <IconButton onClick={onClick}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
    );
};

SidebarHeader.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default SidebarHeader;
