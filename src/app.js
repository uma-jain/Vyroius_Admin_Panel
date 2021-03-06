import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>
);

export default App;
