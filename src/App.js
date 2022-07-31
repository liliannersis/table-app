import React from "react";
import {Provider} from "react-redux";
import store from './redux';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Table from "./components/Table/Table";
import './style.css'
function App() {
  return (
      <Provider store={store}>
        <div className="App">
           <BrowserRouter>
              <Switch>
                  <Route exact path='/'  component={()=> <Table/> }/>

                </Switch>
            </BrowserRouter>
        </div>
       </Provider>
  );
}

export default App;



