---
author: Zhengyuan Zhu
pubDatetime: 2018-04-23T00:00:00Z
title: "Introduction to RNN and Binary Adder Implementation"
slug: rnn-introduction
featured: false
draft: false
tags:
  - deep-learning
description: ""
---

## Preface: Neural Network Topology & convJS

Two blog posts vividly demonstrate the internal working process of neural networks through animated visualizations.

>

[https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/](https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/)
[https://cs.stanford.edu/people/karpathy/convnetjs/](https://cs.stanford.edu/people/karpathy/convnetjs/)

## RNN (Recurrent Neural Network)

**For ease of teaching, I will gradually transition from a "simple" RNN model to a "real" RNN model**

### Why do we have RNN?

- Analogous to human thinking process. People's thinking about new things always contains prior knowledge (memory).

- Trying to recite the alphabet backwards is very difficult because humans tend to memorize in sequences (like linked lists).

### What does RNN look like?

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_1.png)

- As shown in the diagram above, the information flow in RNN is:

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_2.png)

- The memory in RNN represents prev_hidden (previous hidden layer "memory") which is also used as input for training the neural network!

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_3.png)

>

Note the distinction in the diagram above: An RNN can be viewed as many copies of the same neural network!

- Suppose we have an RNN with a time step of 4, then its information flow would be:

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_4.png)

- Let's vividly see how "memory" influences the RNN:

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_5.png)

### What problems can RNN solve?

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_6.png)

>

Time series and sequence models: speech recognition, language models, translation, image captioning, etc.

### Does RNN have any drawbacks?

- the clouds are in the sky

- I grew up in France… I speak fluent French.

#### Long-term dependency: When the gap becomes increasingly large, RNN is unlikely to learn useful information

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_7.png)

### How to solve long-term dependency?

Let's look at how our brain works: Our brain has the function of forgetting, i.e., only remembering key information points in memory rather than storing complete memories. This function greatly reduces the computational load on our brain. Thus, LSTM was born.

## LSTM (Long Short Term Memory)

### Structural differences between LSTM and RNN

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_8.png)

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_9.png)

LSTM transforms RNN's single-layer neural network into a four-layer neural network.

### wtf? Let's quickly talk about the details

#### We have the following conventions in the diagram:

- Lines in the diagram represent complete vectors

- Pink circles represent vector operations

### The core idea of LSTM

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_10.png)

-

The diagram above shows that LSTM has the ability to add or remove information from the Cell state (these abilities are controlled by structures called **gates**)

-

gates: a path through which information passes, consisting of operation functions and sigmoid functions

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_11.png)

#### Supplement: Reunderstanding the sigmoid function:

$$S(x)= \frac{1}{1+e^{-x}}$$

$$S^{'}{(x)}=\frac{e^{-x}}{(1+e^{-x})^2}=S(x)(1-S(x))$$

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_12.png)

　Clearly, its function is to map x to $[0,1]$: 0 means forget, 1 means remember

### Specific workflow of LSTM

- The first step of LSTM is to decide what information to discard from the cell state (completed by the sigmoid function)

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_13.png)

$$f_t=\sigma(W*f·[h*{t-1},x_t] + b_f)$$

-

The second step of LSTM is to decide which new information to store in the cell state

- The sigmoid layer decides which values to update

-

The tanh layer is responsible for creating new candidate values

$$i_t = \sigma(W*i·[h*{t-1},x_t]+b_i)$$

$$\hat{C_t}=tanh(W*C·[h*{t-1},x_t]+b_C)$$

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_14.png)

- Update $C_{t-1}$ to new $C_t$

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_15.png)

$$C_t=f*t * C*{t-1}+i_t * \hat{C_t}$$

- LSTM decides the output value

- Use the sigmoid layer to decide which part to output

- Determine the total output through tanh and partial output

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_16.png)

$$o_t=\sigma(W*o[h*{t-1},x_t]+b_o)$$

$$h_t = o_t *tanh(C_t)$$

## Back to RNN, let's briefly describe the gradient descent process of RNN

### Brief introduction to the backpropagation algorithm of traditional neural networks

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_17.png)

### Now let's look at what a real RNN actually looks like

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_18.png)

#### We define the symbols in the diagram as:

- Input at time t: $x^t\in R^{xdim}$

- Output of hidden layer nodes: $h^t\in R^{hdim}$

- Predicted value of output layer: $y^t\in R^{ydim}$

- Weight matrix from input to hidden layer: $V\in R^{xdim·ydim}$

- Self-loop matrix of hidden layer: $U\in R^{hdim·hdim}$

- Weight matrix from hidden layer to output layer: $W\in R^{hdim·ydim}$

- Corresponding bias vectors for each layer: $b_h\in R^{hdim},b_y\in R^{ydim}$

- Nodes of input layer, hidden layer, and output layer are identified as $i, j, k$

- True output: $d^t\in R^{ydim}$

#### Forward propagation

- $h^t=activate_1(x^tV+h^{t-1}U+b_h)$, where $net_h^t=x^tV+h^{t-1}U+b_h$

- $y^t=activate_2(h^tW+b_y)$, where $net_y^t=h^tW+b_y$

- Define the error at a single time node $p$ as
 $$E^t=\sum_p\frac{1}{2}||d^t-y^t||^2$$

-

Then the total error is

 $$E=\sum_tE^t=\frac{1}{2}\sum*p{\sum^T*{t=1}||y^t-d^t||^2}$$

#### Backpropagation Through Time (BPTT)

- Calculate the gradient of parameters in RNN
$$\delta^t*{yk}=\frac{\partial{E}}{\partial{net^t*{yk}}}，\delta^t*{hj}=\frac{\partial{E}}{\partial^t*{hj}}$$

>

These two partial derivatives are: the partial derivatives of the total error with respect to the k-th node of the output layer and the j-th node of the hidden layer at the t-th time node, respectively

Expanding, we have:

$$\delta^t_{yk}={\frac{\partial{E}}{\partial{y^t_k}}}{\frac{\partial{y^t*k}}{\partial{net^t*{yk}}}}=(y^t_k-d^t*k){g^{'}(net^t*{yk})}$$

Vectorizing the above equation, we have:
$$\delta_y^t=(y^t-d^t)\circ{g^{'}(net^t_y)}, \circ represents element-wise multiplication, not matrix multiplication$$
$$\delta_h^t=(W(\delta_y^t)^T+U(\delta^{t+1}_h)^T)^T\circ{f^{'}(net^t_h)}$$
From this, we can get the gradients of each parameter:
$$\Delta{W}=\sum_t{(h^{t})^T\delta^t_y}$$

$$\Delta{U}=\sum_t{(h^{t-1})^T\delta^t_h}$$

$$\Delta{V}=\sum_t{(x^t)^T\delta^t_h}$$

$$\Delta{by}=\sum_t{\delta^t_y}$$

$$\Delta{bh}=\sum_t{\delta^t_h}$$

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_19.png)

>

Note: From the diagram above, it is very clear that when computing the gradient at time t, we need to use the gradients computed at times $t-1, t-2,...$

## Let's write a small demo in Python (binary adder)?

### Our goal:

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RNN_t_20.png)

We want to complete an 8-bit binary adder: carrying starts from the third bit! This adder can directly predict the result of two 8-bit binary numbers, and we want the RNN to learn the "memory" of whether to carry.

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141

```

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : zzy824
# @File    : traskRNNTutorial.py

import numpy as np
np.random.seed(0)

# compute sigmoid nonlinearity
def sigmoid(x):
    output = 1 / (1 + np.exp(-x))
    return output

# convert output of sigmoid function to its derivative
def sigmoid_output_to_derivative(output):
    return output * (1 - output)
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/4/24 下午2:43
# @Author  : zzy824
# @File    : traskRNNTutorial.py

import numpy as np
np.random.seed(0)

# compute sigmoid nonlinearity
def sigmoid(x):
    output = 1 / (1 + np.exp(-x))
    return output

# convert output of sigmoid function to its derivative
def sigmoid_output_to_derivative(output):
    return output * (1 - output)

# training dataset generation
int2binary = {}
binary_dim = 8

largest_number = pow(2, binary_dim)
binary = np.unpackbits(np.array([range(largest_number)], dtype=np.uint8).T, axis=1)
for i in range(largest_number):
    int2binary[i] = binary[i]

# input variables
alpha = 0.1
input_dim = 2 # because we add two number
hidden_dim = 16
output_dim = 1

# initialize neural network weights
synapse_0 = 2 * np.random.random((input_dim, hidden_dim)) - 1 # input&hidden
synapse_1 = 2 * np.random.random((hidden_dim, output_dim)) - 1 # hidden&output
synapse_h = 2 * np.random.random((hidden_dim, hidden_dim)) - 1 # hidden&hidden

synapse_0_update = np.zeros_like(synapse_0)
synapse_1_update = np.zeros_like(synapse_1)
synapse_h_update = np.zeros_like(synapse_h)

# training logic
for j in range(10000):

    # generate a simple addition problem (a + b = c)
    a_int = np.random.randint(largest_number / 2)  # int version
    a = int2binary[a_int]  # binary encoding
    b_int = np.random.randint(largest_number / 2)  # int version
    b = int2binary[b_int]  # binary encoding

    # true answer
    c_int = a_int + b_int
    c = int2binary[c_int]

    # where we'll store our best guess (binary encoded)
    d = np.zeros_like(c)

    overallError = 0

    layer_2_deltas = list()
    layer_1_values = list()
    layer_1_values.append(np.zeros(hidden_dim))

    # moving along the positions in the binary encoding
    for position in range(binary_dim):

        # generate input and output
        X = np.array([[a[binary_dim - position - 1], b[binary_dim - position - 1]]])
        y = np.array([[c[binary_dim - position - 1]]]).T

        # hidden layer (input ~+ prev_hidden)
        layer_1 = sigmoid(np.dot(X, synapse_0) + np.dot(layer_1_values[-1], synapse_h))

        # output layer (new binary representation)
        layer_2 = sigmoid(np.dot(layer_1, synapse_1))

        # did we miss?... if so, by how much?
        layer_2_error = y - layer_2
        layer_2_deltas.append(layer_2_error * sigmoid_output_to_derivative(layer_2))
        overallError += np.abs(layer_2_error[0])

        # decode estimate so we can print it out
        d[binary_dim - position - 1] = np.round(layer_2[0][0])
        # store hidden layer so we can use it in the next timestep
        layer_1_values.append(copy.deepcopy(layer_1))

    future_layer_1_delta = np.zeros(hidden_dim)

    for position in range(binary_dim):
        X = np.array([[a[position], b[position]]])
        layer_1 = layer_1_values[-position - 1]
        prev_layer_1 = layer_1_values[-position - 2]

        # error at output layer
        layer_2_delta = layer_2_deltas[-position - 1]
        # error at hidden layer
        layer_1_delta = (future_layer_1_delta.dot(synapse_h.T) + layer_2_delta.dot(synapse_1.T)) * sigmoid_output_to_derivative(
            layer_1)

        # let's update all our weights so we can try again
        synapse_1_update += np.atleast_2d(layer_1).T.dot(layer_2_delta)
        synapse_h_update += np.atleast_2d(prev_layer_1).T.dot(layer_1_delta)
        synapse_0_update += X.T.dot(layer_1_delta)

        future_layer_1_delta = layer_1_delta

        synapse_0 += synapse_0_update * alpha
        synapse_1 += synapse_1_update * alpha
        synapse_h += synapse_h_update * alpha

        synapse_0_update *= 0
        synapse_1_update *= 0
        synapse_h_update *= 0
        # print out progress
        if j % 1000 == 0:
            print "Error:" + str(overallError)
            print "Pred:" + str(d)
            print "True:" + str(c)
            out = 0
            for index, x in enumerate(reversed(d)):
                out += x * pow(2, index)
            print str(a_int) + " + " + str(b_int) + " = " + str(out)
            print "------------"

```

>

References and citations

- pytorch official documentation: [http://pytorch.org/tutorials/](http://pytorch.org/tutorials/)

- pytorch official project examples: [https://github.com/pytorch/examples](https://github.com/pytorch/examples)

- colah's blog: [https://colah.github.io/posts/2015-08-Understanding-LSTMs/](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)

- RNN solution process: [https://www.cnblogs.com/YiXiaoZhou/p/6058890.html](https://www.cnblogs.com/YiXiaoZhou/p/6058890.html)

- i am trask blog: [https://iamtrask.github.io/2015/11/15/anyone-can-code-lstm/](https://iamtrask.github.io/2015/11/15/anyone-can-code-lstm/)

- Backpropagation algorithm diagram source: [https://zhuanlan.zhihu.com/p/31623305](https://zhuanlan.zhihu.com/p/31623305)
