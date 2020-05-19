import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './app';
import About from './pages/About';
import RegisterProduct from './pages/RegisterProduct';
import Cart from './pages/Cart';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register-product" component={RegisterProduct} />
      <Route exact path="/cart-product" component={Cart} />
      <Redirect exact from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
