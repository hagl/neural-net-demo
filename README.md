## A neural net for recognizing hand-written digits

You can play with this demo  [here](https://hagl.github.io/neural-net-demo/).

The neural net in this classifier uses 45 hidden logistic units and 10 output units with a softmax function. It was trained on the MNIST database of handwritten digits (http://yann.lecun.com/exdb/mnist/). The training code was written as an assignment in the Coursera Mooc [Neural Networks for Machine Learning](https://www.coursera.org/learn/neural-networks)</a> and is therefore not available here. I have implemented the classification (forward propagation) in JavaScript and created this app to interactively play with it.

If you have also taken above course and want to use it with your neural net, you can use the Matlab/Octave code in (etc/model2js.m) to export your model into a javascript file and replace (src/model.js) with the result.
