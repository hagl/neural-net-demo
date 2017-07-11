import React from 'react';

function Cell(props) {

  let c = 255 - props.value;
  let color = 'rgb(' + c + ',' + c + ',' + c +")";
  let style = {backgroundColor: color};
  return (
    <div key={props.i} className="cell" style={style} onMouseMove={props.onMouseOver}>&nbsp;</div>
  );
}

const d  = [
  0, 0, 0, 0, 0, 0, 122, 135,
  60, 2, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 76, 116, 234, 255,
  255, 153, 20, 0, 0, 0, 0, 0,
  0, 0, 0, 49, 238, 225, 119, 210,
  238, 255, 225, 25, 0, 0, 0, 0,
  0, 0, 0, 214, 246, 25, 0, 0,
  47, 207, 255, 212, 57, 0, 0, 0,
  0, 0, 94, 252, 168, 0, 0, 0,
  0, 40, 234, 255, 223, 25, 0, 0,
  0, 20, 242, 238, 48, 0, 0, 0,
  0, 0, 73, 217, 255, 190, 8, 0,
  0, 110, 255, 166, 0, 0, 0, 0,
  0, 0, 0, 40, 235, 255, 149, 0,
  0, 168, 255, 109, 0, 0, 0, 0,
  0, 0, 0, 0, 70, 255, 253, 57,
  32, 238, 210, 6, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 165, 255, 157,
  73, 255, 170, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 74, 255, 157,
  158, 255, 107, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 2, 152, 255, 157,
  158, 255, 162, 3, 0, 0, 0, 0,
  0, 0, 20, 61, 162, 255, 255, 88,
  83, 255, 255, 176, 76, 76, 76, 76,
  76, 179, 216, 255, 255, 255, 197, 14,
  10, 190, 255, 255, 255, 255, 255, 255,
  255, 255, 255, 237, 164, 84, 21, 0,
  0, 25, 184, 255, 255, 255, 255, 255,
  255, 164, 149, 29, 0, 0, 0, 0,
  0, 0, 5, 14, 20, 134, 134, 134,
  14, 2, 0, 0, 0, 0, 0, 0];

class Grid extends React.Component {

  constructor(props) {
    super();
    this.state = {data: d};
    this.mouseDown = false;
  }

  handleMouseOver(i) {

    if (this.mouseDown === false || this.state.data[i] === 255) {
      return;
    }
    const newData = this.state.data.slice();
    newData[i] = Math.min(newData[i] + 16, 255);
    this.setState({data: newData});
  }

  handleMouseDown(e) {
    e.preventDefault();
    this.mouseDown = true;
  }

  handleMouseUp() {
    this.mouseDown = false;
  }

  clearData() {
    let newData = [];
    for (let i=0; i<256; i++) newData.push(0);
    this.setState({data: newData})
  }

  render() {

    let grid = this.state.data.map( (value, i) => Cell({value,i, onMouseOver:() => this.handleMouseOver(i)}));

    return (
      <div>
        <div className='canvas'
            onMouseDown={(e) => this.handleMouseDown(e)}
            onMouseUp={(e) => this.handleMouseUp(e)}
            onMouseEnter ={(e) => this.handleMouseUp(e)}
            >
          {grid}
        </div>
        <button onClick={() => this.clearData()}>Clear</button>
      </div>
    )
  }

}

export default Grid;
