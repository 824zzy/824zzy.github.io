---
author: Zhengyuan Zhu
pubDatetime: 2018-06-30T00:00:00Z
title: "Reinforcement Learning - David Silver (Lecture 1 to Lecture 3)"
slug: rl-davidsilver-1-3
featured: false
draft: false
tags:
  - notes
description: ""
---

>

Reinforcement learning notes for undergraduate graduation project. Many reinforcement learning terms can be ambiguous when expressed in Chinese, so this note uses English. [David Silver Reinforcement Learning Course Video](https://www.youtube.com/watch?v=2pWv7GOvuf0)
[David Silver Reinforcement Learning Course Materials](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html).

## Lecture One

### Abstract

- all is about decision

- no supervisor,only **reward** signal(not supervisor learning)

- feedback is delayed,not instantaneous

- the key role:**agent**(brain)

### The process

- background:environment(earth) input: observation & reward –> output:action

- history and state:
History:  $$H_t=A_1,O_1,A_2,O_2…A_t,O_t,R_t$$
State of agent :    $$S_t^a=f(H_t)$$
State of environment:    $$S_t=f(H_t)$$

Markov Reward Process

>

A Markov reward process is a Markov chain with values.(State,Probability,Reward,Discount factor-gamma)

![](/images/blog/ca26ff18ly1fse949pfxej21410f1di6.jpg)

#### return(**G**)

>

the return G is the total discounted reward from time-step t.

$$G_t = R_{t+1}+{\gamma}R_{t+2}+ {\gamma} ^2R_{t+3}…+{\gamma}^kR_{t+k+1}$$
　we could figure out from equation above if discount factor closes to 0 the return will be "myopic", if discount factor nevertheless closes to 1 then the return will be "far-sighted"

#### Value Function:**Expectation**

>

the value function v(s) gives the long-term value of state s.

![](/images/blog/ca26ff18ly1fstgan5dxdj20xa08qjsh.jpg)

then we could deduce MRP Bellman Equation below:

![](/images/blog/ca26ff18ly1fstgbhlcxoj211s0a4t9x.jpg)

Reward only relates to state,therefore Bellman Equation can be decomposition said by:

![](/images/blog/ca26ff18ly1fstgc2frlqj211i0hc3zu.jpg)

#### Bellman Equation for MRPs in matrix:

The bellman equation can be expressed concisely using matrics:

![](/images/blog/ca26ff18ly1fstgoq6yy1j211k0j0wg3.jpg)

The bellman equation is a kind of linear equation so we could solve it directly:

![](/images/blog/ca26ff18ly1fstgfys2wej212w0aimxx.jpg)

But time complexity is close to $O(n^3)$,we could solve it by iteration methods:

- Dynamic Programming

- Monto Carlo evaluation

- Temporal-Difference(TD) Learning

Let us see some other concepts for preparing!

### Markov Decision Processes

>

Markov Decison Processes (S,A,P,R,$\gamma$) is a Markov Reward Processed with decisons.It is an environment in which all states are Markov

![](/images/blog/ca26ff18ly1fstgr8o1hsj20q40b6gng.jpg)

#### Policies

>

A policy $\pi$ is a distribution over actions given states.

![](/images/blog/ca26ff18ly1fstgruhsrtj20bs028q2u.jpg)

for MDP, we must calculate state-value function and action-value function, we have definition below:

![](/images/blog/ca26ff18ly1fstgsgz1gaj20pu0esdhw.jpg)

just like bellman equation, we could deduce bell expectation equation from state-value function and action-value function:

![](/images/blog/ca26ff18ly1fstgtf593bj20r60di0tx.jpg)

we finally have different Bellman Expectation Equation for $V^{\pi}$,$Q^{\pi}$ and the Matrix Form is：

![](/images/blog/ca26ff18ly1fsthdw3ihrj20ow0diaav.jpg)

#### Optimal Value Functions

Coming question, how could we judge the performance of our policy?

![](/images/blog/ca26ff18ly1fseb9v3uaxj20rm0dl3zx.jpg)

#### Optimal Bellman Equation

we could deduce the Optimal Bellman Eqution from above first:


![](/images/blog/ca26ff18ly1fsthiix1lcj20h00dmdgm.jpg)


![](/images/blog/ca26ff18ly1fsthirugdzj20lo0coq3t.jpg)

we could solve the equation by:

- Value iteration

- Police iteration

- Q-Learning

- Sarsa

### extension of MDP

- infinite MDPS

- Reductions of POMDP's

#### infinite MDPs

![](/images/blog/ca26ff18ly1fsthjqcbhoj20p80gq767.jpg)

#### POMDP:

It could be seen as a Hidden Markov Process adding actions!

![](/images/blog/ca26ff18ly1fsebmimapgj21180lejux.jpg)

### Let us review immediately!

![](/images/blog/ca26ff18ly1fsthrducjcj21yu2kz4r0.jpg)

![](/images/blog/ca26ff18ly1fsthqqzx45j21yu2kz1l8.jpg)

## Lecture 3 : Planning by Dynamic Programming

### Introduction

- **Dynamic** sequential or temporal component to the problem

- **Programming** is a optimision of question!

- optimal substructure

- overlapping subproblems

  There are two applications of DP

-

for prediction:

- Input：MDP & policy $\pi$

- Output: value function $v_\pi$

-

for control

- Input: MDP

- Output: optimal value function $v_*$ & optimal policy $\pi_*$

![](/images/blog/ca26ff18ly1fsthz8kmyjj21yu2kzb29.jpg)

### Iterative Policy Evaluation

How to evaluate $\pi$?

- solition:iterative application of bellman expectation backup to get the true value function($V_0->V_\pi$)

- from end to start by iteration.

![](/images/blog/ca26ff18ly1fst51czfmaj20pm0ewmy8.jpg)

  It is just like a weighted average of every probability of each action.

![](/images/blog/ca26ff18ly1fst8a8p85fj20om0kutb7.jpg)

the detail you could see the manuscript!

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RL5.jpg)

### Policy Iteration:

- evaluate the policy $\pi$：fill the maze with number to get $v_\pi$
$$V_\pi(s) = E[R_{t+1}+\gamma R_{t+2}+…|S_t = s]$$

- improve the policy by acting greedy with respect to $v_\pi$
$$\pi^{'} = greedy(v_\pi) $$

![](/images/blog/ca26ff18ly1fst59a5cd0j20vr0fn42a.jpg)

- Policy improvement:

![](/images/blog/ca26ff18ly1fst9t2rt9bj20vi0kmtc8.jpg)

the details you could see the manuscript!

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/RL5.jpg)

### Value Iteration

The solution v∗(s) can be found by one-step lookahead, and it start with final rewards and work backwards:

![](/images/blog/ca26ff18ly1fst5i9k9fzj20vr04ljrr.jpg)

There is an example:

![](leanote://file/getImage?fileId=5b373da1afc5ce605c000001)

the details you could see the manuscript!

![](/images/blog/ca26ff18ly1fst5j0ochmj20vo0fcmyf.jpg)

### Synchronous Dynamic Programming Algorithms

![](/images/blog/ca26ff18ly1fstbt3m1pkj20wg0aiq4p.jpg)

we could see Iterative Policy Evaluation and Policy Iteration as a whole knowledge. The knowledge is all in consideration of policy.They as the same in essence.

### Asynchronous Dynamic Programming

- In-Place Dynamic Programming

![](/images/blog/ca26ff18ly1fstet5a8koj20w60iaacj.jpg)

the main difference between two methods above is the number of copy for reducing storage.

- Prioritised sweeping

![](/images/blog/ca26ff18ly1fstevcscvuj20w00eowgs.jpg)

- Real-time dynamic programming

![](/images/blog/ca26ff18ly1fsteyfhrxoj20rm0cswg6.jpg)
