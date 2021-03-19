import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Exemplo from './pages/Exemplo'

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cadastro" component={Cadastro}/>
        <Route path="/Exemplo" component={Exemplo}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;