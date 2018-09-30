import { connect } from "react-redux";
import { push } from "connected-react-router";

import AppBarTitle from "../../components/AppBar/Title";
import { HOME } from "../../constants/routes";

const mapDispatchToProps = {
    onClick: () => push(HOME)
};

export default connect(undefined, mapDispatchToProps)(AppBarTitle);
