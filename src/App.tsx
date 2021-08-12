import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {XSS} from "./XSS/XSS";


function App() {
  return (
      <BrowserRouter>
          <Route exact path={""}>
              <XSS/>
          </Route>

      </BrowserRouter>
  );
}

export default App;
