// Libs
import { connect } from "react-redux";
import { push } from "connected-react-router";
// Component
import SidebarHomeItem from "../../components/Sidebar/HomeItem";
// Constants
import { HOME } from "../../constants/routes";
// Selectors
import { isItemSelected } from "../../redux/selectors/ui";

const mapStateToProps = state => ({
    selected: isItemSelected(state)
});

const mapDispatchToProps = {
    onClick: () => push(HOME)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarHomeItem);
