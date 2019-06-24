import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { push } from "connected-react-router";
// Component
import SidebarHomeItem from "../../components/Sidebar/HomeItem";
// Constants
import { HOME } from "../../constants/routes";
// Selectors
import { selectIsActualRoute } from "../../redux/selectors/router";

const HomeItem = () => {
    const selected = useSelector(selectIsActualRoute(HOME));
    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(push(HOME)), [dispatch]);
    return <SidebarHomeItem selected={selected} onClick={onClick} />;
};

export default HomeItem;
