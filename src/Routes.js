import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from "./components/Presentational/HomePage";
import App from "./components/Functional/App";
import Route404 from "./components/Presentational/Route404";



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home" component={App}></Route>
            <Redirect from="/logout" to="/"/>
            <Route path="*" component={Route404}></Route>
        </Switch>
    );

}

export default Routes;