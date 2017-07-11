import React from 'react';

function Cell(props) {

  let c = 255 - props.value;
  let color = 'rgb(' + c + ',' + c + ',' + c +")";
  let style = {backgroundColor: color};
  return (
    <div key={props.i} className="cell" style={style} >&nbsp;</div>
  );
}

function Grid(props) {

    let grid = props.data.map( (value, i) => Cell({value,i}));

    return (
      <div className='grid' >
          {grid}
      </div>
    )

}

export default Grid;
