import React from "react";
import { matchPath } from "react-router";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import SidebarHomeItem from "../../components/Sidebar/HomeItem";
import { HOME } from "../../constants/routes";

const HomeItem = ({ selected, push }) => (
    <SidebarHomeItem selected={selected} onClick={push} />
);

const mapStateToProps = state => ({
    selected: !!matchPath(state.router.location.pathname, { path: HOME })
});

const mapDispatchToProps = {
    push: () => push(HOME)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem);
