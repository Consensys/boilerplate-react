import { connect } from "react-redux";
import { push } from "react-router-redux";

import NoWhereHomeButton from "../../components/NoWhere/HomeButton";
import { HOME } from "../../constants/routes";

const mapDispatchToProps = {
    onClick: () => push(HOME)
};

export default connect(undefined, mapDispatchToProps)(NoWhereHomeButton);
