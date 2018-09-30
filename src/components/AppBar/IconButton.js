import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
});

const AppbarButton = ({ classes, onClick, shifted }) => (
    <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onClick}
        className={classNames(classes.menuButton, shifted && classes.hide)}
    >
        <MenuIcon />
    </IconButton>
);

AppbarButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    shifted: PropTypes.bool
};

export default withStyles(styles)(AppbarButton);
