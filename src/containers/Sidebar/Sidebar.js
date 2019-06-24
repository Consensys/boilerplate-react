import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { closeSidebar } from "../../redux/actions/ui";
// Components
import Sidebar from "../../components/Sidebar/Sidebar";
// Selectors
import { selectSidebarOpen } from "../../redux/selectors/ui/sidebar";

const SidebarContainer = () => {
    const open = useSelector(selectSidebarOpen);
    const dispatch = useDispatch();
    const onClose = useCallback(() => dispatch(closeSidebar()), [dispatch]);
    return <Sidebar open={open} onClose={onClose} />;
};

export default SidebarContainer;
