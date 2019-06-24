import React from "react";
// Logo
import logo from "./logo.svg";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    home: {
        textAlign: "center"
    },
    homeLogo: {
        height: "80px"
    },
    homeHeader: {
        height: "150px",
        padding: "20px"
    },
    homeTitle: {
        fontSize: "1.5em"
    },
    homeIntro: {
        fontSize: "large"
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <div className={classes.homeHeader}>
                <img src={logo} className={classes.homeLogo} alt="logo" />
                <h1 className={classes.homeTitle}>
                    Welcome to ConsenSys React Boilerplate
                </h1>
            </div>
            <p className={classes.homeIntro}>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
};

export default Home;
