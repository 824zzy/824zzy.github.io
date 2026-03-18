---
author: Zhengyuan Zhu
pubDatetime: 2018-12-09T00:00:00Z
title: "The Consciousness Prior"
slug: consciousnessprior-bengio
featured: false
draft: false
tags:
  - notes
description: ""
---

# Theory of Consciousness Prior

## How to Understand the Consciousness Prior

First, the consciousness prior paper has no experimental results. It's a purely speculative, theoretical article.

The consciousness prior mentioned in the paper is more about **representation** extraction of information at **different levels**. For example: humans have created high-level concepts, such as symbols (natural language) to simplify our thinking.

In 2007, Bengio and Yann LeCun co-authored a paper emphasizing that representations must be multi-layered and progressively abstract. In 2013, Bengio added emphasis on disentangling in a review paper.

### RNN is a Good Example

The hidden state of RNNs contains a low-dimensional substate that can be used to explain the past, help predict the future, and can also be presented as natural language.

![Consciousness Prior Network Diagram](https://github.com/824zzy/blogResources/blob/master/picResources/ConsciousnessPrior.png?raw=true)

## Representation RNN (Representation RNN / F)

$$h_t = F(s_t,h_t−1)$$

Bengio proposed the Representation RNN ($F$) and representation state $h_t$. Where $F$ contains all neural connection weights in the brain. They can be seen as our knowledge and experience, mapping one representation state to another representation state.

The Representation RNN corresponds to the knowledge, learning, and experience a person acquires in different environments. Even with the same $F$, people's reactions and future thoughts will be different. The representation state $h_t$ corresponds to the aggregation of all neural states in the brain. And they can be seen as a representation of the environment at that time (lowest level information).

## Consciousness RNN (Consciousness RNN / C)

$$c_t=C(h*t,c*{t-1},z_t)$$

No one can consciously experience how all neurons in the brain work. Because only a small subset of neurons correspond to the thoughts and concepts the brain is thinking about at the moment. Therefore consciousness is a small subset of brain neurons, or rather a by-product.

Therefore Bengio believes that the Consciousness RNN itself should contain some kind of attention mechanism (currently used in neural machine translation). He introduces attention as an additional mechanism to describe what the brain chooses to focus on, and how to predict or act.

In short, the Consciousness RNN should only "pay attention" to important details when updating the consciousness vector itself, to **reduce computational load**.

## Verifier Network (Verifier Network / V)

$$V(h*t,c*{t-k})\in R$$

Bengio's idea also includes a training method he calls the Verifier Network $V$. The network's goal is to match the current $h*t$ representation with the previous consciousness state $c*{t-k}$. In his conception, it can be trained using variational autoencoders (VAE) or GANs.

## Connection Between Language and Symbolism

One of the main goals of deep learning is to design algorithms that can learn better representations. Good representations should be highly abstract, high-dimensional and sparse, but at the same time, they should be connected with natural language and 'high-level elements' in symbolic AI.

The connection between language and symbolic AI lies in: language is a "selective process". Sentences in language can ignore most details of the world and focus on a few. Symbolic AI only needs to understand a specific aspect of the world, rather than having a model of everything.

Bengio's idea on how to make this concrete is: first have "consciousness" that forces a model to have different types of "consciousness streams" that can operate independently, capturing different aspects of the world. For example, if I'm imagining talking to someone, I have consciousness of that person, their behavior, and my interaction with them, but I won't be modeling all the pixels in my visual stream at that moment.

### Thinking: Fast and Slow

Human cognitive tasks can be divided into System 1 cognition and System 2 cognition. System 1 cognitive tasks are those you can complete unconsciously in less than 1 second. For example, you can quickly recognize that the object in your hand is a bottle, but cannot explain to others how to complete this task. This is also what current deep learning is good at: "perception".
System 2 cognitive tasks are the complete opposite of System 1 tasks, they are "slow" and conscious. For example, calculating "23*56", most people need to consciously follow certain rules and complete the calculation step by step. The method of completion can be explained in language, and another person can understand and reproduce it. This is algorithm, the original meaning of computer science, and the goal of symbolic AI, also belonging to this category.
Humans jointly complete System 1 and System 2 tasks, and artificial intelligence should do the same.

## There Are Still Many Problems to Solve

### What is the Training Objective Function?

The objective function of standard deep learning algorithms is usually based on maximum likelihood, but we can hardly expect the maximum likelihood signal to pass through backpropagation all the way through the prediction network, through the Consciousness RNN, and finally reach the Representation RNN.

Maximum likelihood naturally conflicts with the idea of consciousness prior. "Humans never imagine and generate tasks in pixel space. Humans only use imagination in highly abstract semantic spaces. Generating pixel-level images is not a task humans need to complete." Therefore, introducing items based on representation space in the training objective becomes logical. **Do not define objective functions in raw data space**

### Is Gradient Descent Suitable for Consciousness Prior?

>

Jaderberg, M., Czarnecki, W. M., Osindero, S., Vinyals, O., Graves, A., Silver, D., & Kavukcuoglu, K. (2016). Decoupled neural interfaces using synthetic gradients. arXiv preprint arXiv:1608.05343.

Besides the objective function, the optimization method for consciousness prior will also differ from classical deep learning. Bengio: What optimization method is most suitable for consciousness prior? I still don't know the answer to this question.
In his view, one very promising research area is synthetic gradients.

With synthetic gradients, each layer's gradient can be updated independently. But when time steps continue to lengthen, the problem still exists. Theoretically backpropagation can handle quite long sequences, but given that the way humans process time is not backpropagation, and can easily span any duration, when "theoretically" encounters one thousand or even ten thousand steps, it actually won't work.

### Credit Assignment is Still the Biggest Problem

>

Ke, N. R., Goyal, A., Bilaniuk, O., Binas, J., Mozer, M. C., Pal, C., & Bengio, Y. (2018). Sparse Attentive Backtracking: Temporal CreditAssignment Through Reminding. arXiv preprint arXiv:1809.03702.

In other words, our understanding of the temporal credit assignment problem still needs improvement. "For example, when you're driving you hear a 'pop' sound, but you don't pay attention. Three hours later you stop the car, see that a tire is flat, and immediately your mind connects the flat tire with the 'pop' sound from three hours ago, without recalling time step by step, directly jumping to a certain time in the past, performing credit assignment on the spot." Inspired by the brain's credit assignment method, Bengio's team tried a Sparse Attentive Backtracking method. "We have a paper on temporal credit assignment, which is a NIPS 2018 paper, capable of skipping thousands of time steps, using memory access to go directly back to the past, just like the brain does when receiving a reminder, directly performing credit assignment for something."

## About Code for Consciousness Prior

- Paper: [Experiments on the Consciousness Prior](https://ai-on.org/pdf/bengio-consciousness-prior.pdf)

- Code: [TheConsciousnessPrior github](https://github.com/AI-ON/TheConsciousnessPrior/tree/master/src)

## References and Citations

- [A READ ON "THE CONSCIOUSNESS PRIOR" BY PROF. YOSHUA BENGIO](http://thegrandjanitor.com/2018/05/09/a-read-on-the-consciousness-prior-by-prof-yoshua-bengio/)

- [What is Yoshua Bengio's new "Consciousness Prior" paper about?](https://www.quora.com/What-is-Yoshua-Bengios-new-Consciousness-Prior-paper-about)

- [reddit](https://www.reddit.com/r/MachineLearning/comments/72h5zf/r_the_consciousness_prior/)

- [Interview Notes with Yoshua Bengio: Merging Symbolism and Connectionism with Consciousness Prior](https://www.jiqizhixin.com/articles/2018-11-29-7)
