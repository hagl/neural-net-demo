import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Grid from './components/Grid';
import Result from './components/Result';
import RawData from './components/RawData';
import data from './data';

class App extends Component {

  constructor() {
    super();
    this.state = {data: data[7]};
  }

  updateData(newData) {
    this.setState({data: newData});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState)")
    return true;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='content'>
          <Canvas key="canvas" updateData={(d) => this.updateData(d)} />
          <Grid key="grid" data={this.state.data}/>
          <Result key="result" data={this.state.data}/>
          <RawData key="raw" data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
