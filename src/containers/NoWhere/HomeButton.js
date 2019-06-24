import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// Actions
import { push } from "connected-react-router";
// Component
import NoWhereHomeButton from "../../components/NoWhere/HomeButton";
// Constants
import { HOME } from "../../constants/routes";

const HomeButton = () => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(push(HOME)), [dispatch]);
    return <NoWhereHomeButton onClick={onClick} />;
};

export default HomeButton;
