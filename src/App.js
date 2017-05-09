import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/table';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  componentWillMount() {
      this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SapceToad</h2>
        </div>
        <p className="App-intro">
          To get started, search DB
        </p>
          <DataTable/>
      </div>
    );
  }
}

export default App;
