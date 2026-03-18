---
author: Zhengyuan Zhu
pubDatetime: 2018-05-18T00:00:00Z
title: "Gradient Descent in Machine Learning"
slug: gradientdescent
featured: false
draft: false
tags:
  - notes
description: ""
---

## Introduction:

The position of gradient descent in machine learning: After a neural network uses the backpropagation algorithm, it needs to use optimization algorithms to reduce error. Among various optimization algorithms, gradient descent is the simplest and most common one, widely used in deep learning training.

## Optimization Problem

>

The problem of finding the extremum of a function, including maximum and minimum values.

- As long as the function is differentiable, the derivative at the extremum point must be 0.

- **Where x is called the optimization variable and f is called the objective function. Maximum value problems can be converted to minimum value problems by adding a negative sign to the objective function**:
$$max_xf(x)\equiv{min_x{-f(x)}}$$

## Derivative and Gradient

- The gradient of a multivariate function is defined as:
$$\nabla{f(x)=(\frac{\partial{f}}{\partial{x_1}},…,\frac{\partial{f}}{\partial{x_n}})^{T}}$$

 Where $\nabla$ is called the gradient operator, which acts on a multivariate function to obtain a vector. Here is an example of computing the gradient of a function: $\nabla{(x^2+xy-y^2)=(2x+y,x-2y)}$

- Gradient equal to 0 is only a necessary condition for a function to have an extremum, not a sufficient condition

-

How to determine whether a stationary point is a maximum or minimum?
 It depends on the second derivative/Hessian matrix:

- If the Hessian matrix is positive definite, the function has a minimum value

- If the Hessian matrix is negative definite, the function has a maximum value

- If the Hessian matrix is indefinite, further discussion is needed

-

Why can't we directly solve the gradient of the function and solve the equation?
Answer: The equation may be very difficult to solve: For equations with exponential functions, logarithmic functions, and trigonometric functions, we call them transcendental equations. For example, $3x^2e^{xy}+xcos(xy)=0$. The difficulty of solving it is not less than finding the extremum itself.

## Derivation Process

![](/images/blog/ca26ff18ly1fsr7fgqxxyj21yu2kzhe3.jpg)

![](/images/blog/ca26ff18ly1fsr7h1sclgj21yu2kze8a.jpg)

## Problems Faced

>

Supplement: Stationary points require the first derivative to exist, while extremum points have no requirement on derivatives

- Local minimum points

- Saddle point problem
## Variants

- AdaGrad (adaptive gradient)

- AdaDelta

- Adam (adaptive moment estimation)

- NAG
## Stochastic Gradient Descent
Stochastic gradient descent converges in the sense of mathematical expectation, but cannot guarantee that the function value decreases with each iteration.

References and citations

- [https://mp.weixin.qq.com/s/lqwUkimO4irkIZmAnp0bcg](https://mp.weixin.qq.com/s/lqwUkimO4irkIZmAnp0bcg)

- [https://blog.csdn.net/lanchunhui/article/details/52504859](https://blog.csdn.net/lanchunhui/article/details/52504859)
