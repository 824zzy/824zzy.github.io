---
author: Zhengyuan Zhu
pubDatetime: 2019-06-09T00:00:00Z
title: "Mutation test and Deep Learning"
slug: mutationtest-deeplearning
featured: false
draft: false
tags:
  - deep-learning
description: ""
---

## Brief Introduction to Mutation Test

>

Mutation testing is a mature technology for testing data quality assessment in traditional software.
Mutation testing is a form of white-box testing.
Mutation testing (or mutation analysis or program mutation) is used to design new software tests and evaluate the quality of existing software tests.

### Goal

The goals of mutation testing are multiple:

- identify weakly tested pieces of code (those for which mutants are not killed)

- identify weak tests (those that never kill mutants)

- compute the mutation score

- learn about error propagation and state infection in the program

### Example

Selecting some **mutation operations**, and applying them to the source code for each executable code segment in turn.

The result of using a mutation operation on a program is called a mutant heterogeneity.

**If the test unit can detect the error (ie, a test fails), then the mutant is said to have been killed.**

#### Foo

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

```

```
def foo(x: int, y: int) -> int:
	z = 0
	If x>0 and y>0:
		z = x
	return z

def foo(x: int, y: int) -> int:
	z = 0
	If x>0 and y>=0:
		z = x
	return z

```

Given some test cases, we find that unit test cannot find variants

```
1
2
3
4

```

```
Success
assertEquals(2, foo(2, 2))
assertEquals(0, foo(2, 1))
assertEquals(0, foo(-1, 2))

```

Add new tests to achieve the effect of eliminating variants:

```
1
2

```

```
False
assertEquals(0, foo(2, 0))

```

#### Bar

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

```

```
def bar(a: int, b:int) -> int:
    if a and b:
        c = 1
    else:
        c = 0
    return c
# Here is an mutation which operator is `and`
def bar(a: int, b:int) -> int:
    if a or b:
        c = 1
    else:
        c = 0
    return c

```

Given a test case that will absolutely pass:

```
1
2

```

```
Success
assertEquals(1, foo(1, 1))

```

But we need to kill the mutation by adding more test cases:

```
1
2
3
4

```

```
Failed:
assertEquals(0, foo(1, 0))
assertEquals(0, foo(0, 1))
assertEquals(1, foo(0, 0))

```

### Inspriation

In deep learning, you can also create variants by changing the operators in the model.

Adding the idea of ​​the mutation test to the deep learning model, if the performance of the model after the mutation is unchanged, then there is a problem with the test set

It is necessary to add or generate higher quality test data to achieve the data enhancement effect.

## A comparison of traditional and DL software development

![](/images/blog/ca26ff18gy1g3uypojkkyj20z20kc77j.jpg)

## Reference

- [wiki: Mutation Testing](https://en.wikipedia.org/wiki/Mutation_testing)

- [突变测试——通过一个简单的例子快速学习这种有趣的测试技术](https://www.testwo.com/article/869)
