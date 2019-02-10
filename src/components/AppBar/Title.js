import React from "react";
import PropTypes from "prop-types";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const AppBarTitle = ({ onClick }) => (
    <ButtonBase onClick={onClick}>
        <Typography variant="h6" color="inherit" noWrap={true}>
            ConsenSys React Boilerplate
        </Typography>
    </ButtonBase>
);

AppBarTitle.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AppBarTitle;
