import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
    iconSelected: {
        color: theme.palette.primary.main
    }
});

const ListItem1 = ({ classes, icon, text, onClick, selected, ...props }) => (
    <ListItem button onClick={onClick} {...props}>
        <ListItemIcon className={selected ? classes.iconSelected : undefined}>
            {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
);

ListItem1.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ListItem1);
