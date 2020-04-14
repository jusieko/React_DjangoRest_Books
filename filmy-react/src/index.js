import React from 'react';
import ReactDOM from 'react-dom';
import Lista from './components/lista';
import Detale from './components/detale';
import './index.css'

import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';

const routing = (
  <BrowserRouter>
  <div>
    <Route exact path= "/" component={Lista} />
    <Route  path= "/lista" component={Lista} />
    <Route exact path= "/detale/:id" component={Detale} />
  </div>
  </BrowserRouter>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
