import React from 'react'
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import NossosLivros from "./Pages/NossosLivros";
import AdicionarExemplar from "./Pages/AdicionarExemplar";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/nossoslivros" component={NossosLivros} />
                <Route exact path="/adicionarexemplar" component={AdicionarExemplar} />
                <Route path="/" component={userMenu} />
            </Switch>
        </BrowserRouter> 
    );
}

function userMenu(){
    return (
        <Menu>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/home" component={() => <Redirect to="/login"/>} />
            </Switch>
        </Menu>
    );
}

export default Routes;