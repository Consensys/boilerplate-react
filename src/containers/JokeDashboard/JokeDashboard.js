// Libs
import { connect } from "react-redux";

// Actions
import { fetchJoke } from "../../redux/actions/jokes";

// Component
import JokeDashboard from "../../components/Home/JokeDashboard";

const mapStateToProps = state => ({
    currentJoke: state.data.jokes.currentJoke
});

const mapDispatchToProps = {
    fetchJoke
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JokeDashboard);
