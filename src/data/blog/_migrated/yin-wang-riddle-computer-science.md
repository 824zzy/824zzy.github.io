---
author: Zhengyuan Zhu
pubDatetime: 2018-03-15T00:00:00Z
title: "Riddle of Computer Science by Yin Wang (Ongoing)"
slug: yin-wang-riddle-computer-science
featured: false
draft: false
tags:
  - notes
description: ""
---

## Introduction: Riddle of Computer Science

### Writing Motivation

>

Einstein: If you can't explain a problem to a six-year-old child, you don't really understand it

### Writing Goal

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

```

```
if(you have read this book):
    while(end of world and computers no longer exist):
        you can build computers from scratch, cool!
```
## Chapter One: First Introduction to Computing
### The Essence of Computing
- Counting with fingers is the simplest computer
- Computation graph: Abstraction is a crucial method in computer science
![](http://www.yinwang.org/csbook-images/adder.png)
![](http://www.yinwang.org/csbook-images/add-mult.png)
- Parallel computing
![](http://www.yinwang.org/csbook-images/parallel.png)
#### Parallel computing is good, but it also introduces other problems:
- Parallel computing computers have different computation speeds: waiting time is too long!
- Communication overhead between computers greatly reduces efficiency
- Compilation

``` js
(5 - 3) * (4 + (2 * 3 - 5) * 6)
===>
{
    a = 2 * 3
    b = a - 5
    c = b * 6
    d = 4 + c
    e = 5 - 3
    e * d
}

```

#### Making the result of statements completely consistent with the original expression. This translation process that preserves the original semantics is called compilation

- Functions
Consider the following scenario: We want to express a "fan controller", where the fan speed is always twice the current temperature.
```
1
2
3

```

```
t->t*2 //This is our fan controller, which is also the simplest function:
f(t) = t*2 //Let's be more formal
f(2)   // value is 4

```

-

Branching
Consider the following scenario: We want a "beverage selector"

```
1
2
3
4
5
6
7
8

```

```
t-> if(t < 22)
    {
        "hotpot"
    }
    else
    {
        "ice cream"
    }

```

-

Summary: Elements of computation

- Basic values. (integers, strings, boolean values, etc.)

- Expressions. (basic arithmetic expressions)

- Variables and assignment statements.

- Branch statements

-

Functions and function calls

Like learning to drive a car, once you master the gas pedal, brakes, gear shifter, steering wheel, and speedometer functions and usage, you've learned to drive all cars, regardless of their model.
