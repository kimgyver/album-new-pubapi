import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Albums from './Albums'
import Photos from './Photos'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Albums} />
      <Route path="/photos/:id" component={Photos} />
    </Router>
  );
}

export default App;
