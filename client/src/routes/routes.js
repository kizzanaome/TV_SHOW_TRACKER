import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/home';
import About from '../components/About/About';

const Routes = () => (

    <Router>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" exact component={ About }/>
        </Switch>
    </Router>

)

export default Routes;
