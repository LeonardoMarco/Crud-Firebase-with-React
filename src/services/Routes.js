import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from '../Pages/Login';
import Home from '../Pages/Home';
import AddUser from '../Pages/AddUser';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/add" exact component={AddUser} />
        </Switch>
    </Router>
)

export default Routes;