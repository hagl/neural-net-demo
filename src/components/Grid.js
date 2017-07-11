import React from 'react';

function Cell(props) {

  let c = 255 - props.value;
  let color = 'rgb(' + c + ',' + c + ',' + c +")";
  let style = {backgroundColor: color};
  return (
    <div key={props.i} className="cell" style={style} >&nbsp;</div>
  );
}

/*
class Grid extends React.Component {

  constructor(props) {
    super();
    console.log("***" + props);
    this.state = {data: props.data};
  }


  render() {

    let grid = this.state.data.map( (value, i) => Cell({value,i}));

    return (
      <div>
        <div className='grid' >
          {grid}
        </div>
        <button onClick={() => this.clearData()}>Clear</button>
      </div>
    )
  }

}
*/
function Grid(props) {

    let grid = props.data.map( (value, i) => Cell({value,i}));

    return (
      <div className='grid' >
          {grid}
      </div>
    )

}

export default Grid;
