import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/table';
import GetData from './container/get_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>API Toad</h2>
        </div>
        <p className="App-intro">
          To get started, search DB
        </p>
          <GetData/>
          <DataTable/>
      </div>
    );
  }
}

export default App;
