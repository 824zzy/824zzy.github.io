---
author: Zhengyuan Zhu
pubDatetime: 2018-11-09T00:00:00Z
title: "Introduction to Meta-Learning"
slug: meta-learning-introduction
featured: false
draft: false
tags:
  - notes
description: ""
---

## Two problems we confront

- Sample efficiency: models typically need 6000 samples per digit to recognize digit handwriting.

- Poor transferablity: models don’t learn from previous experience or learned knowledge.

So meta-learning is the solution to the two questions above. And we try to define it as “learning how to learn”. Our dream is:

- Learn to learn

- Train a system on many tasks

- Resulting system can solve new tasks quickly

## Some basic concepts

### Few-shot Learning

In deep learning, we use regularization to make sure we are not overfitting out model with a small dataset, but we are **overfitting our task**. Therefore what we learned cannot be generalized to other tasks.

We often get stuck when test samples that are **not common** in dataset.

In **one-shot-learning**, we will only provide one training sample per category. There is an example:

![](/images/blog/ca26ff18gy1fx2w9gmja6j20m80fzk0s.jpg)

In this one-shot learning, we often train a RNN to learn the training data and labels. When we represent with a test input, we should predict its label correctly.

![](/images/blog/ca26ff18gy1fx2wk8ezr8j20m806rq3e.jpg)

In meta-testing, we provide many datasets again with classes that never trained before. Once we have learned from hundred tasks, we should discover the general pattern in classifying objects.

## Recurrent Models

### Memory-Augmented Neural Networks

One of the meta-learning methods using an external memory network with RNN. Note that in supervised learning, we provide both input and label in the same time step $t$. However, in this model, the label is not provided untild the next time step $t+1$(shown below).

![](/images/blog/ca26ff18gy1fx2xk82uvzj20m807aaa7.jpg)

When updating the model, instead of updating the model immediately, we wait until a batch of tasks is completed. We later merge all we learned from these tasks for a single update.

![](/images/blog/ca26ff18gy1fx2y80btkjj20m8058wex.jpg)

## Reference

- [RL — Meta-Learning](https://medium.com/@jonathan_hui/meta-learning-how-we-address-the-shortcomings-of-our-deep-networks-a008aa4b5b2b)

- [From zero to research — An introduction to Meta-learning](https://medium.com/huggingface/from-zero-to-research-an-introduction-to-meta-learning-8e16e677f78a)

- [MIT AGI: OpenAI Meta-Learning and Self-Play (Ilya Sutskever)](https://www.youtube.com/watch?v=9EN_HoEk3KY&list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4&index=4&t=0s)
