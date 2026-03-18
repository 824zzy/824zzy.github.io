---
author: Zhengyuan Zhu
pubDatetime: 2019-03-03T00:00:00Z
title: "HTM_theory"
slug: htm-theory
featured: false
draft: false
tags:
  - notes
description: ""
---

- Overview
cellular structure are same.(bio pic)

hierarchical structure.(need a pic)and each region is performing the same set of processes on the input data.

[SDR] sparse distributed representations(0 or 1)

Input: 1. Motor commands 2. sensory input

Encoder: takes a datatype and converts it into a sparse distributed representations.

Temporal means that systems learn continuously, every time it receives input it is attemptiing to predict what is going to happen next.

- Sparse Distributed Representation(SDR)
Terms: 1. n=Bit array length 2. w=Bits of array 3. sparsiity 4. Dense Bit Array Capacity=2**of bits
Bit array

Capacity=n!/w!(n-w)!

![](/images/blog/ca26ff18gy1g0pke65e1dj218g11awlp.jpg)

OVERLAP/UNION
Similarity can be represented by overlap/union? of SDR.

MATCH

- Overlap Sets and Subsampling

-

Scalar Encoder(retina/cochlea)

- Scalar Encoder: consecutive one

- Random Distributed Scalar Encoder: random one

-

Data-time encoder

- Input Space& Connections

- Spactial Pooler: maintain a fixed sparsity & maintain a overlap properties.
