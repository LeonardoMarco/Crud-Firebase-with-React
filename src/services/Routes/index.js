import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';

import Register from '../../Pages/Register';
import Login from '../../Pages/Login';
import Home from '../../Pages/Home';
import AddUser from '../../Pages/AddUser';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/register" component={Register} />
            <LoginRoute path="/" exact component={Login} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/add" exact component={AddUser} />
        </Switch>
    </Router>
)

export default Routes;