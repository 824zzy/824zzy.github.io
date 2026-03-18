---
author: Zhengyuan Zhu
pubDatetime: 2018-08-22T00:00:00Z
title: "Zero-Shot Learning Study Notes"
slug: zero-shot-learning
featured: false
draft: false
tags:
  - notes
description: ""
---

## Graph Convolutional Networks

![Multi-layer Graph Convolutional Network (GCN) with first-order filters.](http://tkipf.github.io/graph-convolutional-networks/images/gcn_web.png)

### Problem

Generalizing well-stablished neural models like RNNs or CNNs to work on arbitrarily structured graphs is a challenging problem.

## Introduction

Zero-shot Learning is a concept from Transfer-Learning. In traditional machine learning method, Generalization is difficult since big data and time-consuming training are needed in general. Therefore more and more researchers pay attention to **Zero-shot Learning**/**One-shot Learning**/**Few-shot Learning**

### types of Learning

#### Zero-shot Learning

A model can create a map $X\rightarrowY$ automatically for the categories which have not appeared in a training set.

#### One-shot Learning

One-shot learning is an object categorization problem in computer vision. Whereas most machine learning based object categorization algorithms require training on hundreds or thousands of images and very large datasets, one-shot learning aims to learn information about object categories from one, or only a few, training images.

#### Few-shot Leaning

## Papers

### DeVise: A Deep Visual-Semantic Embedding Model

#### Core idea

Combine **feature vector** from Computer Vision and **semantic vector** from NLP to realize zero-shot learning.

### Zero-shot Learning by Convex Combination of Semantic Embeddings

### Objects2action: Classifying and localizing actions without any video example

>

Reference:

- [https://en.wikipedia.org/wiki/One-shot_learning](https://en.wikipedia.org/wiki/One-shot_learning)

- [https://blog.csdn.net/jningwei/article/details/79235019](https://blog.csdn.net/jningwei/article/details/79235019)

- [http://tkipf.github.io/graph-convolutional-networks/](http://tkipf.github.io/graph-convolutional-networks/)
