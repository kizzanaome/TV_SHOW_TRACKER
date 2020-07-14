import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/home';
import About from '../components/About/About';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';

const Routes = () => (

    <Router>
        <Switch>
            <Route path="/" exact component={ Signup } />
            <Route path="/home" exact component={ Home } />
            <Route path="/about" exact component={ About }/>
            <Route path="/login" exact component={ Login }/>
        </Switch>
    </Router>

)

export default Routes;
