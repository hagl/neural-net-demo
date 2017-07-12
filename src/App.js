import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Grid from './components/Grid';
import Result from './components/Result';
import data from './data';

class App extends Component {

  constructor() {
    super();
    this.state = {data: this.emptyData()};
  }

  updateData(newData) {
    this.setState({data: newData});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState)")
    return true;
  }

  emptyData() {
    let data = [];
    for (let i=0; i<256; i++) data.push(0);
    return data;
  }

  clear() {
    this.setState({data: this.emptyData()})
    if (this.refs.canvas) {
      this.refs.canvas.clearCanvas();
    }
  }

  render() {

    let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return (<button key={"button" + i} onClick={()=>{this.clear(); this.setState({data: data[i]});}}>{i}</button>);
    });

    return (
      <div className="App">
        <p key="intro">
        Press the buttons to load some of the training data or draw your own digit with the mouse in the white rectangle on the left.
        </p>
        <div key="content" className='content'>
          <div className='box'>
            <button key="clear" onClick={()=>this.clear()}>Clear</button>
            <Canvas key="canvas" ref="canvas" updateData={(d) => this.updateData(d)} />
          </div>
          <div key="buttons" className='box'>
            <span key="buttons" className='buttons'>{buttons}</span>
            <Grid key="grid" data={this.state.data}/>
          </div>
          <div key="results" className='box'>
            <span key="label">Estimated probability for each digit:</span>
            <Result key="result" data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
