import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";

import registerDetails from './components/registerDetails'
import listDetails from './components/listDetails'

function App() {
  return (
    <>
    <BrowserRouter>
   <Switch>
   <Route exact path="/" component={registerDetails}/>
   <Route exact path="/listDetails" component={listDetails}/>
   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
