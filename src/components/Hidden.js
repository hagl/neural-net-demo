import React from 'react';

import NeuralNet from '../NeuralNet';
import model from '../model';

let nn = new NeuralNet(model);

function Hidden(props) {
  let hidden = nn.hidden(props.data);

    let list = hidden.map((v,i) => {
      let c = Math.round(255 * (1 - v));
      let color = 'rgb(' + c + ',' + c + ',' + c +")";
      let style = {backgroundColor: color};
      return (
        <div key={i} style={style} className="hiddenUnit" >&nbsp;</div>
      )
    });

    return (
      <div className='hidden' >
          {list}
      </div>
    )

}

export default Hidden;
