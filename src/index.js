import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import PropsState from "./PropsState";
// import Map from './Map';
// import LifeCycle from './LifeCycle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

