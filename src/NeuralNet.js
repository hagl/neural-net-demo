

class NeuralNet {

  constructor(model) {
    this.model = model;
  }

  sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
  }

  hidden(pixels) {
    let hid = this.model.input_to_hid.length;
    let hidden = [];
    for (let i = 0; i<hid; i++) {
      let sum = 0.0;

      for (let j = 0; j<256; j++) {
        //let p = pixels[j] / 256 * this.model.input_to_hid[i][j];
        let pix = pixels[j] / 255;
        let weight = this.model.input_to_hid[i][j];
        let p = pix * weight;
        sum += p;
      }
      hidden.push(this.sigmoid(sum));
    }
    return hidden;
  }

  predict(pixels) {
    let hid = this.model.input_to_hid.length;
    let hidden = this.hidden(pixels);
    let d = 0.0;
    let p = 0.0;
    let classes = [];
    for (let i =0; i<10; i++) {
      let sum = 0.0;
      for (let j=0; j<hid; j++) {
        sum += hidden[j] * this.model.hid_to_class[i][j];
      }
      p = Math.exp(sum);
      d += p;
      classes.push(p);
    }
    return classes.map(p => p/d);


    //return [ 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0];
  }


}

export default NeuralNet;
