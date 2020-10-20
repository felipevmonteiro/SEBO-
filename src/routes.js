import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Menu from './Pages/Menu'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/Login" component={Login}/>
                <Route path ="/Home" component={Home}/>
                <Route path ="/Cadastro" component ={Cadastro}/>
                <Route path ="/Menu" component ={Menu}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;