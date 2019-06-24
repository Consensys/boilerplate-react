import React from "react";
import PropTypes from "prop-types";
// Material Components
import { ButtonBase, Typography } from "@material-ui/core";

const AppBarTitle = ({ onClick }) => (
    <ButtonBase onClick={onClick}>
        <Typography variant="h5" color="inherit" noWrap>
            ConsenSys React Boilerplate
        </Typography>
    </ButtonBase>
);

AppBarTitle.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AppBarTitle;
