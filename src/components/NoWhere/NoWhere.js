import React from "react";
// Icons
import { Alert as ReportIcon } from "mdi-material-ui";
// Colors
import { grey } from "@material-ui/core/colors";
// Container
import NoWhereHomeButton from "../../containers/NoWhere/HomeButton";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    nowhere: {
        textAlign: "center"
    },
    nowhereHeader: {
        padding: theme.spacing(3)
    },
    nowhereTitle: {
        fontSize: "1.5em",
        color: grey[500]
    },
    nowhereIcon: {
        height: 80,
        width: 80,
        color: grey[500]
    }
}));

const NoWhere = () => {
    const classes = useStyles();
    return (
        <div className={classes.nowhere}>
            <div className={classes.nowhereHeader}>
                <ReportIcon className={classes.nowhereIcon} />
                <h1 className={classes.nowhereTitle}>
                    Oups... It seems that you are lost!
                </h1>
            </div>
            <NoWhereHomeButton />
        </div>
    );
};

export default NoWhere;
