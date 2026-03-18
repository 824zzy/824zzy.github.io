---
author: Zhengyuan Zhu
pubDatetime: 2018-09-18T00:00:00Z
title: "Theory of Self-Reproducing Automata Reading Notes"
slug: theory-of-self-reproducing-automata
featured: false
draft: false
tags:
  - notes
description: ""
---

To be continued, 10% completed

# Theory of Self-Reproducing Automata

## Preface

Von Neumann began researching automata theory in the late 1940s. In chronological order, he completed five works:

- The General and Logical Theory of Automata

- Theory and Organization of Complicated Automata

- Probabilistic Logics and the Synthesis of Reliable Organisms from Unreliable Components

- The Theory of Automata: Constructions, Reproduction, Homogeneity

- The Computer and the Brain

Von Neumann conceived a theory of complex systems composed of basic logical units.

>

If a mathematical subject has become far removed from all empirical sources, and only intersects with very "abstract" fields, this mathematical subject will be on the verge of decline... Whenever this stage comes, the only remedy is to be reborn at its source: re-inject more or less empirical experience. Von Neumann

## Von Neumann's Automata Theory

### Biological and Artificial Automata

By examining two main types of automata: artificial and biological automata.

Analog and digital computers are the most important class of artificial automata, but other artificial systems made for communication or information processing purposes are also included, such as telephone and radio broadcasting systems. Biological automata include `nervous systems`, `self-replication` and `self-repair systems`, and characteristics like `evolution and adaptation of life`.

Von Neumann spent considerable effort comparing the similarities and differences between biological and artificial automata. We can
summarize these conclusions into the following aspects:

- Differences between analog and digital:

- Natural organisms are hybrids, containing both analog and digital processes.

- Neurons are "all or nothing", so digital truth function logic is a primary approximation of neural behavior.

- Neuronal activation depends on spatial stimulus summation, which is continuous rather than discrete.

- In complex organisms, digital operations usually alternate with analog processes.

- Physical and biological materials used in basic components

- Basic components of computers are much larger than neurons and require more energy, but they are much faster.

- Biological automata work in a more parallel manner, while digital computers have serial structure. [Note: This is Von Neumann's conclusion limited by the technological background of his era]

- The difference in size between vacuum tubes and neurons is due to the different mechanical stability of the materials they use. Vacuum tubes are more easily damaged but harder to repair. When neuronal membranes are damaged, they are easily repaired.

- Complexity

- Humans, including all things in the world, are biological automata that are much more complex than the artificial automata they can construct.

- Human understanding of the details of their own logical design is far inferior to their understanding of the largest computers they have built.

- Logical organization

- In a particular computer, there are high-speed electronic registers, low-speed magnetic cores, and slower magnetic tape units. [Note: Can be analogized to multi-level storage hierarchy in current era]

- Pulses in neural circuits, changes in neural thresholds, organization of the nervous system, and encoding in genes also constitute hierarchical instances.

- Reliability

- Biological automata clearly surpass artificial automata in this regard because they have powerful self-checking and self-repairing functions. [Note: What about cancer and aging?]

## Mathematical Principles of Automata Theory

Starting from mathematical logic, moving toward analysis, probability, and thermodynamics.

### Control and Information Theory

Turing machines and `McCulloch & Pitts` neural networks are at two extremes of information theory.

#### McCulloch & Pitts Neural Networks: **Combinatorial Method**

>

Neural networks compose complex structures from very simple parts. Therefore, only axiomatic definitions of bottom-level parts are needed to obtain very complex combinations

Neurons are defined as follows: We use a small circle to represent a neuron, and the straight line extending from the circle represents neural synapses. Arrows indicate that a neuron's synapse acts on another neuron, which is the direction of signal transmission. Neurons have two states: excited and non-excited.

![](/images/blog/ca26ff18ly1fve2xio54pj20d908szlq.jpg)

Human neurons have magical emergent results: a triangle without contours, but your eyes can help you outline its contours.

![](/images/blog/ca26ff18gy1fwexofxywsj20mu0iagov.jpg)

#### Turing Machine

>

Provides an axiomatic definition of the entire automaton, defining only the automaton's functionality without involving specific parts.

For high-complexity formal logic objects, it's difficult to predict their behavior in advance. The best way is to actually build and run them. This is a conclusion drawn from Gödel's theorem:

>

Logically speaking, a description of an object is one level higher than the object itself. Therefore, the former is always longer than the latter.

## The Way of Large Numbers

Life should be completely integrated with probability. Life can **continue operating within errors**! Errors in life do not continuously spread and amplify like in computational processes. Life is a very perfect and adaptive system. Once some problem occurs, the system automatically recognizes the severity of the problem.

```
`1. If it's insignificant, the system ignores the problem and continues operating
2. If the problem is important to the system, the system isolates the faulty area, bypasses it, and continues operating through other remedial channels.
`
```

## Reference

- Theory of Self-Reproducing Automata [von Neumann]

- [http://swarmagents.cn.13442.m8849.cn/thesis/program/jake_358.pdf](http://swarmagents.cn.13442.m8849.cn/thesis/program/jake_358.pdf)
