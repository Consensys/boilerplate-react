import React from "react";
import { useSelector } from "react-redux";
// Selector
import { selectSidebarOpen } from "../../redux/selectors/ui/sidebar";
// Component
import AppBar from "../../components/AppBar/AppBar";

const AppBarContainer = () => {
    const shifted = useSelector(selectSidebarOpen);

    return <AppBar shifted={shifted} />;
};

export default AppBarContainer;
