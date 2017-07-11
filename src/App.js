import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Grid from './components/Grid';
import Result from './components/Result';
import data from './data';

class App extends Component {

  constructor() {
    super();
    this.state = {data: []};
    this.clear();
  }

  updateData(newData) {
    this.setState({data: newData});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState)")
    return true;
  }

  clear() {
    let newData = [];
    for (let i=0; i<256; i++) newData.push(0);
    this.setState({data: newData})
    if (this.refs.canvas) {
      this.refs.canvas.clearCanvas();
    }
  }

  render() {

    let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return (<button onClick={()=>{this.clear(); this.setState({data: data[i]});}}>{i}</button>);
    });

    return (
      <div className="App">
        <p>
        <h3>A neural net for recognizing hand-written numbers</h3>
        I have recently taken the excellent Coursera course <a href="https://www.coursera.org/learn/neural-networks">Neural Networks for Machine Learning</a> by Geoffrey Hinton. In one of the assignmens various aspects of a neural network for number recognition were studied. To get a feel for the abilities of the neural network, I created this small webapp to experiment with the classifier.
        </p>
        <p>
        Press the buttons to load some of the training data or draw your own number with the mouse in the white rectangle on the left.
        </p>
        <div className='content'>
          <div className='box'>
            <button onClick={()=>this.clear()}>Clear</button>
            <Canvas key="canvas" ref="canvas" updateData={(d) => this.updateData(d)} />
          </div>
          <div className='box'>
            <span className='buttons'>{buttons}</span>
            <Grid key="grid" data={this.state.data}/>
          </div>
          <div className='box'>
            <span>Estimated probability for each number:</span>
            <Result key="result" data={this.state.data}/>
          </div>
        </div>
        <p>Source code for this app is available on <a href="https://github.com/hagl">Github</a></p>
        <div className='footer'>&copy; 2017 Harald Gliebe</div>
      </div>
    );
  }
}

export default App;
