import { connect } from "react-redux";
import { push } from "connected-react-router";

import NoWhereHomeButton from "../../components/NoWhere/HomeButton";
import { HOME } from "../../constants/routes";

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(push(HOME))
});

export default connect(
    undefined,
    mapDispatchToProps
)(NoWhereHomeButton);
