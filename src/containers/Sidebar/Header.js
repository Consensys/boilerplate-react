import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// Actions
import { closeSidebar } from "../../redux/actions/ui";
// Components
import SidebarHeader from "../../components/Sidebar/Header";

const Header = () => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(closeSidebar()), [dispatch]);
    return <SidebarHeader onClick={onClick} />;
};

export default Header;
