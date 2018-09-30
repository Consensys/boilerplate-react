import React from "react";
import PropTypes from "prop-types";

import HomeIcon from "@material-ui/icons/Home";

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
