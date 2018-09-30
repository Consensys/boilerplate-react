import { connect } from "react-redux";

import AppBar from "../../components/AppBar/AppBar";

const mapStateToProps = state => ({
    shifted: state.ui.sidebar.open
});

export default connect(mapStateToProps)(AppBar);
