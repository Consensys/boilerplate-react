import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Component
import LayoutSkeleton from "../../components/Layout/Skeleton";
// Constants
import { HOME } from "../../constants/routes";

const Layout = () => (
    <Switch>
        <Route path="/" exact component={() => <Redirect to={HOME} />} />
        <Route component={LayoutSkeleton} />
    </Switch>
);

export default Layout;
