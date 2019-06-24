import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { openSidebar } from "../../redux/actions/ui";
// Components
import AppBarIconButton from "../../components/AppBar/IconButton";
// Selectors
import { selectSidebarOpen } from "../../redux/selectors/ui/sidebar";

const IconButton = () => {
    const shifted = useSelector(selectSidebarOpen);
    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(openSidebar()), [dispatch]);
    return <AppBarIconButton shifted={shifted} onClick={onClick} />;
};

export default IconButton;
