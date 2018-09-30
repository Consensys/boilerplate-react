import { connect } from "react-redux";

import { closeSidebar } from "../../redux/actions/ui";

import SidebarHeader from "../../components/Sidebar/Header";

const mapDispatchToProps = {
    onClick: closeSidebar
};

export default connect(undefined, mapDispatchToProps)(SidebarHeader);
