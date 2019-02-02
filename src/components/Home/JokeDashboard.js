// Libs
import React from "react";
import PropTypes from "prop-types";
// Material Components
import { Paper, Button, Typography } from "@material-ui/core";
// Styles
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    jokeBox: {
        width: "40%",
        padding: "20px",
        margin: "20px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

const JokeDashboard = ({ classes, currentJoke, fetchJoke }) => (
    <div className={classes.root}>
        <Button variant="raised" color="primary" onClick={fetchJoke}>
            Give me a new joke
        </Button>
        {currentJoke && (
            <Paper className={classes.jokeBox}>
                <Typography>{currentJoke}</Typography>
            </Paper>
        )}
    </div>
);

JokeDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    currentJoke: PropTypes.string.isRequired,
    fetchJoke: PropTypes.func.isRequired
};

export default withStyles(styles)(JokeDashboard);
