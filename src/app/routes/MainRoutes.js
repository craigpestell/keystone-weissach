// @flow weak

import React        from 'react';
import {
  Route,
  Switch
}                   from 'react-router';
import Home         from '../views/home/Home';
import About        from '../views/about/About';
import Leads        from '../views/leads/Leads';
import Protected    from '../views/protected/Protected';
import PrivateRoute from '../components/privateRoute/PrivateRoute';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/leads" component={Leads} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  );
};

export default MainRoutes;
