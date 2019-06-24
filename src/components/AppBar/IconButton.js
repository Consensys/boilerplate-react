import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Material Components
import { IconButton } from "@material-ui/core";
// Icons
import { Menu as MenuIcon } from "mdi-material-ui";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}));

const AppbarButton = ({ onClick, shifted }) => {
    const classes = useStyles();
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClick}
            className={clsx(classes.menuButton, shifted && classes.hide)}
        >
            <MenuIcon />
        </IconButton>
    );
};

AppbarButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    shifted: PropTypes.bool
};

export default AppbarButton;
