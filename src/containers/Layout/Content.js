import React from "react";
import { Route, Switch } from "react-router";

import Home from "../../components/Home/Home";
import NoWhere from "../../components/NoWhere/NoWhere";
import { HOME } from "../../constants/routes";

const LayoutContent = () => (
    <Switch>
        <Route path={HOME} exact component={Home} />
        <Route component={NoWhere} />
    </Switch>
);

export default LayoutContent;
