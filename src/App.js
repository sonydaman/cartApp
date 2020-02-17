import React from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import routing from "./config/route";
import * as pages from "./Pages";
import store from './Store/'
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
     <Router>
        <Switch>
          { routing.public.map((route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />) }
        </Switch>
     </Router>
     </Provider>
  );
}

export default App;
