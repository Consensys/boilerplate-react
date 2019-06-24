import React from "react";
import PropTypes from "prop-types";
// Material Components
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    iconSelected: {
        color: theme.palette.primary.main
    }
}));

const ListItem1 = ({ icon, text, onClick, selected, ...props }) => {
    const classes = useStyles();
    return (
        <ListItem button onClick={onClick} {...props}>
            <ListItemIcon
                className={selected ? classes.iconSelected : undefined}
            >
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};

ListItem1.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default ListItem1;
