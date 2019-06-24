import React from "react";
import PropTypes from "prop-types";
// Material Components
import { Button } from "@material-ui/core";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}));

const NoWhereHomeButton = ({ onClick }) => {
    const classes = useStyles();
    return (
        <Button
            variant="contained"
            className={classes.button}
            onClick={onClick}
        >
            Bring me back home!
        </Button>
    );
};

NoWhereHomeButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default NoWhereHomeButton;
