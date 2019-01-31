import { matchPath } from "react-router";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import SidebarHomeItem from "../../components/Sidebar/HomeItem";
import { HOME } from "../../constants/routes";

const mapStateToProps = state => ({
    selected: !!matchPath(state.router.location.pathname, { path: HOME })
});

const mapDispatchToProps = {
    onClick: () => push(HOME)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarHomeItem);
