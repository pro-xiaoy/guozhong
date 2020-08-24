import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Index/IndexPage';
import LoginPage from './routes/Login/login'
function RouterConfig({ history }) {
  const routes = [
    {
      path: '/',
      component: IndexPage,
      exact: true
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
  return (
    <Router history={history}>
      <Switch>
        {routes.map((item, index) => <Route path={item.path} exact={item.exact} component={item.component} />)}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
