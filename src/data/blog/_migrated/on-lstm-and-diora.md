---
author: Zhengyuan Zhu
pubDatetime: 2019-05-31T00:00:00Z
title: "Comparison of ON-LSTM and DIORA"
slug: on-lstm-and-diora
featured: false
draft: false
tags:
  - deep-learning
description: ""
---

## ON-LSTM

Insprition under the hood: How to introduce grammar tree structure into LSTM in an unsupervised apporach.

### Introduction: Ordered Neurons(ON)

- The neurons inside ON-LSTM are specifically `ordered` to `express richer information`: Change the order of update frequency.

- The specific order of neurons is to integrate the hierarchical structure (tree structure) into the LSTM, allowing the LSTM to `automatically learn the hierarchical structure`.

- `High/Low level information`: Should keep longer/shorter in corresponding coding interval.

- `cumax()`: A special function to internate special $F1$ and $F2$gate.

### The nuts and bolts in Mathematic
