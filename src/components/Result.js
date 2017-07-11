import React from 'react';

import NeuralNet from '../NeuralNet';
import model from '../model';

let nn = new NeuralNet(model);

function Result(props) {

    let result = nn.predict(props.data);
    let list = result.map((v,i) => {
      let style = {width: 200*v};
      return (
      <div className="result-row">
        <div className="result-label">{i}</div>
        <div><div className="result-percentage" style={style}>&nbsp;</div>
        <span className="result-value">{v}</span></div>
      </div>)});
    return (
      <div className='result'>
          {list}
      </div>
    )
}

export default Result;
