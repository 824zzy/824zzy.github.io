---
author: Zhengyuan Zhu
pubDatetime: 2018-06-15T00:00:00Z
title: "Super Organism Reading Notes"
slug: super-organism-yjango
featured: false
draft: false
tags:
  - notes
description: ""
---

>

Copyright Notice:
This article only records notes during the reading of Dr. Yu Jianguo (YJango)'s book "Super Organism". The author has contacted the author via email and obtained authorization.

## The Essence of Intelligence

　Intelligence originates from randomness (entropy): As time passes, isolated systems spontaneously evolve toward maximum entropy states [a dormitory that is not deliberately organized becomes increasingly messy].

>

Intelligence: The ability to make corresponding changes based on environmental changes, i.e., the ability to reduce entropy [reduce "uncertainty"]

　To explore intelligence, we must have the ability to correctly describe the state of the world and state changes at different times. Linear algebra gives us the answer.

### Linear Algebra

>

Linear Algebra: Rules about **states** and **state changes** of things in arbitrary dimensional spaces

#### The Essence of Matrices: Storing static **or** dynamic information about states (changes)

- Static information of matrices:
　Vectors can describe the state of a thing. Many vectors with the same dimension arranged in order form a matrix.

- About tensors: Multiple scalars arranged in order form a vector, multiple vectors arranged in order form a matrix, multiple matrices arranged in order form a 3D tensor.

-

Dynamic information of matrices:
　At this time, a matrix can be seen as an ordered arrangement of multiple weights with the same dimension, and can perform batch changes on static information of another matrix. This is the essence of matrix multiplication.

>

Two matrices multiplied together, one matrix provides state information, the other provides change information

-

Vector space: A set of states that can accommodate all linear combinations.

- Vector spaces must be infinitely extensible in each dimension (because the real number field is infinite)

- Subspace: Vector space within a subspace

- Smallest subspace: 0

- Empty set cannot be a vector space

-

Linear transformation:
Matrix multiplying matrix can be viewed as batch linear transformation of vectors inside a matrix. For convenience of understanding, we can discuss only one linear transformation formed by matrix multiplying vector. Direct illustration:

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/superorganism-1.png)

-

Linear transformation: Projection of vector groups in different dimensional spaces under different dimensions. For example, $y*{2*1}=A*{2*3}x_{3*1}$ is the linear transformation of three-dimensional vector $x$ into two-dimensional space vector $y$.
Note: The core of neural networks $$ y=a(Ax+b)$$

#### Dimension Extension

**Mental space**: People think they have free consciousness and thinking. However, this freedom is also limited. It's like spanning in linear space. How large a consciousness space can be spanned **depends on how many mutually independent factors** exist in the brain, which is dimension (rank).

　The role of dimensions:

- Understanding complex numbers: Further expanded domain of numbers.

- Understanding Fourier transform: When adding 1 dimension to the x-y coordinate system, everything becomes clear.

-

Understanding string theory: Theory attempting to merge relativity and quantum mechanics, but the mathematical formula only makes sense when extended to 10-dimensional space + 1-dimensional time.

-

**String theory**:

- 1. Origin of the problem:

- The universe may have high-dimensional spaces

- What is the most basic component of matter?

- 2. Composition of matter: Molecules->Atoms->Protons, Neutrons->???
  Could be continuously **jumping** energy **lines**: Everything in the universe originates from this.

- 3. The mathematical proof above only holds true in ten-dimensional space and one-dimensional time. So our universe may indeed have high-dimensional spaces

- 4. New problem: When we observe a state of the universe, we determine 20 numerical values (particle mass, gravitational field strength, …), and if any of these 20 numbers changes, our universe will cease to exist. So what determines these 20 numerical values?
  Perhaps higher dimensional spaces

-

- Proving the existence of high-dimensional space through experiments:
Europe's Large Hadron Collider accelerates protons to collide and observes: If energy is lost after collision, it may be because part of the collision "debris" entered high-dimensional space!

Summary: **When a problem cannot be understood, often it's because we're looking in the wrong place. Try expanding dimensions and increasing search space.** However, due to information limitations, many things cannot determine their post-change state, so we need probability to provide basis.

### Probability

>

Probability is used to measure the certainty of different states of things across time

### Entropy and Life

>

Life living is reducing entropy: Using information compression (or abstraction) to form knowledge, to fight against entropy increase!

　Conditions for intelligence

- Intelligence LV1: Ability to associate from environment to action [survival] (Plants & Microorganisms)

- Intelligence LV2: Ability to use past-to-future association [prediction] (Animals)

- Implementation of intelligence: Through materials storing associations (genetic material)

## Natural Intelligence

### RNA and DNA (Intelligence LV1)

- Recognition: Information on DNA: protein synthesis.

- Learning: Reproduction, variation, screening.

- Evolution: **Evolution is a passive process based on populations**
　Question: In **"Sapiens"**, the author describes that humans will break the evolutionary theory of natural selection and instead "actively" evolve through genetic modification technology.

- Defect of immortality: Immortals lose the screening function that provides diversity to populations.

### Neurons

- Essential behavior of neurons:
$$y=a(Wx+b), where x is input signal, y is output signal$$

## Artificial Intelligence

### Problems with Gradient Descent

- Solutions for local minima (saddle points):

- Stochastic gradient descent: Update only the gradient calculated from one sample each time

- Mini-batch gradient descent: Update the average gradient calculated from several samples each time

- .etc

### Deep Learning

>

Neural networks don't lack new structures, but lack an $E=mc^2$ for this field

- Why neural networks are efficient: Parallel prior knowledge allows models to learn exponential numbers
of variations with linear numbers of samples:

- What is the essence of learning: Disentangle Factors of Variation

- Why are deep neural networks more efficient than shallow neural networks:

- On what problems do neural networks not have advantages:

- Non-function problems: Need to find ways to transform problems into function problems

- Non-iterative: Tasks where the current layer's state is not composed of the upper layer's state

### Deep Learning Computer Implementation Platform: TensorFlow

TensorFlow Basic Usage

- Preparation stage: Assemble computation graph

- Computation graph `imagine as a pipeline`: Structure that needs to be assembled, composed of many operations

- Operation `imagine as connection points of different pipeline branches`: Input and output zero or more data

- Data types: 1. Tensor 2. Variable 3. Constant

- Tensor `imagine as liquid in pipeline`: Multi-dimensional array or list
  tensor_name = tf.placeholder(type, shape, name)

- Variable: Data that remains static to all other operations in the graph at the same time (valve in pipeline)
  name_variable = tf.Variable(value, name)

- Constant: Variable that doesn't need initialization
  name_constant = tf.constant(value)

- Execution stage: Use computation graph

- Execution statement: sess.run(op)

- Feed: Input values for operations (input liquid)
  sess.run([output], feed_dict={input1:value1, input2:value2})

- Fetch: Get output values from operations (obtain liquid)
  sess.run(one op)
  sess.run([a list of op])

### DEMO Section:

Some of Dr. YJango's demos may not run due to TensorFlow version issues. I have "corrected" part of the code and uploaded it to GitHub. Local environment tests all passed, please feel free to use.
[Code section notes](https://github.com/824zzy/TutorialTensorflow)

>

References and Citations: 1. "Super Organism" Dr. Yu Jianguo (Yjango)
