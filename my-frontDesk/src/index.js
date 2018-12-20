import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store'

import View from './pages/Video/View';
import Video from './pages/Video/Video';
import UpLoad from './pages/User/Upload';
import Exception404 from './pages/Exception/Exception404';
import Register from './pages/User/Register';
import Home from './pages/Home';
import Login from './pages/User/Login';

//路由表
const routes=(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view/:id" component={View} />
        <Route path="/video/:id" component={Video} />
        <Route path="/upload" component={UpLoad} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={Exception404} />
      </Switch>
    </Router>
  </Provider>
);
ReactDOM.render(routes, document.getElementById('root'));





serviceWorker.unregister();
