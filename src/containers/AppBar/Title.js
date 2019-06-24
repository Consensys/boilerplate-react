import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
// Components
import AppBarTitle from "../../components/AppBar/Title";
// Constant
import { HOME } from "../../constants/routes";

const Title = () => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(push(HOME)), [dispatch]);

    return <AppBarTitle onClick={onClick} />;
};

export default Title;
