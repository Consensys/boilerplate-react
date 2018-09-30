import { connect } from "react-redux";

import { openSidebar } from "../../redux/actions/ui";
import AppBarIconButton from "../../components/AppBar/IconButton";

const mapStateToProps = state => ({
    shifted: state.ui.sidebar.open
});

const mapDispatchToProps = {
    onClick: openSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarIconButton);
