import React from "react";
import PropTypes from "prop-types";
// Icons
import { Home as HomeIcon } from "mdi-material-ui";
// Components
import ListItem1 from "../UI/ListItem/1";

const SidebarHomeItem = ({ onClick, selected }) => (
    <ListItem1
        icon={<HomeIcon />}
        text="Home"
        onClick={onClick}
        selected={selected}
    />
);

SidebarHomeItem.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default SidebarHomeItem;
