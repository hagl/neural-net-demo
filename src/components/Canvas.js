import React from 'react';

class Canvas extends React.Component {

  constructor(props) {
    super();
    this.updateData = props.updateData
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

  update() {
    let data = this.ctx.getImageData(0, 0, 256, 256).data;
    let newData = [];
    for (let x = 0; x<256; x += 16) {
      for (let y = 0; y<256; y += 16) {
        let s = 0;
        for (let i = 0; i<16; i++) {
          for (let j = 0; j<16; j++) {
              s += data[4 * ( 256 * (x + i) + y + j)];
          }
        }
        newData[x + y / 16] = 255 - (s >> 8);
      }
    }

    this.updateData(newData)
  }

  componentDidMount() {
        this.updateCanvas();
  }

  updateCanvas() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, 256, 256);
  }

  clearCanvas() {
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, 256, 256);
  }

  mousemove(e) {
    if (!this.isDrawing) {
      return;
    }
    var x = e.pageX - this.refs.canvas.offsetLeft;
    var y = e.pageY - this.refs.canvas.offsetTop;
    this.draw(x,y);
  }

  touchmove(e) {
    if (!this.isDrawing) {
      return;
    }
    for (let i = 0; i < e.touches.length; i++) {
      var x = e.touches[i].pageX - this.refs.canvas.offsetLeft;
      var y =e.touches[i].pageY - this.refs.canvas.offsetTop ;
      this.draw(x,y);
    }
  }

  draw(x,y) {
    this.ctx.fillStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.arc(x, y, 18, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.update();
  }


  render() {
    return (
      <div className="canvas">
        <canvas ref="canvas" width={256} height={256}
          onMouseDown = {() => this.isDrawing = true}
          onTouchStart  = {() => this.isDrawing = true}
          onMouseUp = {() => this.isDrawing = false}
          onTouchEnd  = {() => this.isDrawing = false}
          onMouseLeave ={() => this.isDrawing = false}
          onMouseMove = {(e) => this.mousemove(e)}
          onTouchMove = {(e) => this.touchmove(e)}
        />
      </div>
    );
  }
}

export default Canvas;
