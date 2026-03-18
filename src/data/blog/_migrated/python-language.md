---
author: Zhengyuan Zhu
pubDatetime: 2017-12-07T00:00:00Z
title: "Python Language Learning"
slug: python-language
featured: false
draft: false
tags:
  - python
description: ""
---

# Object-Oriented Programming

## Differences Between Static Functions, Class Functions, Member Functions, and Property Functions

### Supplementary Knowledge:

- Instance variables: Variables unique to each instance

-

Class variables: Variables shared by all instances

Intuitive understanding: Husky (class variable) is a type of dog, and each dog will have a **unique** name given by its owner, for example "Haha" (member variable). Explained in code:

```
1
2
3
4

```

```
class Dog:
    kind = "Husky" # Class variable
    def __init__(self, name):
        self.name = name # Instance variable

```

### Definition of Four Types of Functions

After clarifying instance variables and class variables, the four types of functions are easy to understand. First, look at the official definitions:

-

Static function (@staticmethod): A static method that cannot access instance variables or class variables.

- Class function (@classmethod): Can only access class variables, cannot access instance variables.

- Member function: Methods used after instantiation, and can only be called through instances.

- Property function (@property): Use the @property decorator to turn a method into a static property

### Intuitive Explanation of Four Types of Functions

Let's bring back "Haha" again. First, let's explain static functions: simply put, a static method is a function whose formal parameters do not have **self**. That is, static functions have nothing to do with static variables and instance variables in the class.

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

```

```
class Dog(object):

    @staticmethod
    def bark():
        print("my name is Haha")

d1 = Dog()
d1.bark()
# Using static method, output is my name is Haha

```

What about class functions?

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

```

```
class Dog(object):
    name = "Haha"

    @classmethod
    def bark(cls):
        print("my name is %s" % cls.name)

d2 = Dog()
d2.bark()
# Using class method, output is my name is Haha

```

Now look at member functions

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

```

```
class Dog(object):
    name = "Haha"

    def __init__(self, nick_name):
        self.nick_name = nick_name
    def bark(self):
        print("my name is %s and my nick name is %s" % (name,self.nick_name))
d3 = Dog("Heiha")
d3.bark()
# Using member function, output is my name is Haha and my nick name is Heiha
```
Finally, look at property functions:
```py
class Dog(obkect):
    def __init__(self, name):
        self.name = name
    @property
    def bark(self):
        print("my name is %s" % self.name)
# Note the way to use property function! At this point, bark function is already a property of the Dog class.
d4 = Dog("Haha")
# This is how to use property function, output is myname is Haha
d4.talk

```

### Supplement: Using @property

#### Why do we need the @property decorator?

>

Problem in programming: Unable to check parameters when binding attributes!

- Solution 1: Define set() and get() methods in the class to set and get grades. This is OK, but when you instantiate the class, you'll understand the trouble with this solution.

#### @property turns **methods into property** calls

　Usage: Turn the attribute you want to set into a getter method, add the `@property` decorator, and then check parameter validity in the setter method.
　After instantiation, you can directly bind attributes without calling class methods!

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

```

```
class Student(object):
    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('scofre must between 0-100!')
        self._score = value

# Instantiation
s = Student()
s.score = 60 # equal to s.set_score(60)
s.score = 101
# Traceback (most recent call last):
  ...
ValueError: score must between 0 ~ 100!

```

### Summary of Four Types of Functions:

In summary, we can think of the four types of functions as a process of gradually releasing authority. When using **static functions**, you have no access to any information in the class; when you use **class functions**, you can only get information from class variables but cannot get information from instantiated classes; only when you use **member functions** is your authority fully released, allowing you to use both class variable information and instantiated class information. **Property functions** treat a function as a property, which is the easiest to understand.

### What if I still don't know when to use them?

Remember the core idea:

- Class functions are mainly used as constructors.

- Static functions have no self in their formal parameters

- Member functions are used most often

## Class Access Control: Single Underscore _ and Double Underscore __

- "_": Single underscore means only its own class and subclasses can access

- "__": Double underscore means only this class itself can access.

# Python Language Features

## Python is a Dynamically Typed Language

>

You don't need to specify variable data types when writing code

## with Statement:

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

```

```
# 1. Syntax format of with statement
with content_expression [as targer(s)]:
    with-body
# 2. with statement operates on file objects
with open(r'somefileName') as somefile:
    for line in somefile:
        print line
        # ... more code
# 3. The above code is equivalent to the following code:
somefile = open(r'openfileName')
try:
    for line in somefile:
        print line
        # ...more code
finally:
    somefile.close()

```

## Error Handling

- A simple and easy-to-understand example: if some code **may have errors**
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
try:
    r = 10 / 0
except ZeroDivisonError, e:
    print "ZeroDivisionError", e
except ValueError, e:
    print "ValueError", e
finally:
    print 'finally'

```

-

Log errors: Print error information while letting the program continue to execute

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

```

```
import logging
def foo(s):
    return 10 / int(s)
def main():
    try:
        foo('0')
    except StandardError, e:
        logging.exception(e)
main()
print "END"

```

　The program prints error information and then continues to execute, exiting normally.

-

Raise errors

```
1
2
3
4

```

```
try:
    10 / 0
except ZeroDivisionError:
    raise ValueError('input error!')

```

# Code Tricks

## Goodbye! Intermediate Variables

```
1
2
3
4

```

```
a = 1
b = 2
# Swap two variable values without using intermediate variable
a, b = b, a

```

## String Reversal

Essentially converting string to list for operations

```
1
2
3
4
5

```

```
a = "python"
# Method 1: Method that looks cool
print a[::-1] # "nohtyp"
# Method 2: Method with strong readability
print list(a).reverse()

```

## Python Can Use Continuous Assignment, From Left to Right

```
1
2
3
4
5

```

```
x = [0, 1]
i = 0
# When we use continuous assignment
i, x[i] = 1, 2
# print(x) result is [0, 2]: The compiler first assigns 1 to i, so x[i] becomes x[1], then assigns 2 to x[1].

```

## Matrix Transpose

The principle is the zip() function: Pack corresponding elements from objects into tuples and return a list of tuples. This exactly matches matrix transpose operation.

```
1
2
3
4

```

```
mat = [[1, 2, 3], [4, 5, 6]]
# * can be simply understood as unpacking
print zip(*mat)
#[(1, 4), (2, 5), (3, 6)]

```

## List to String

```
1
2
3

```

```
a = ["Code", "mentor", "Python", "Developer"]
print " ".join(a)
# Code mentor Python Developer

```

## Traverse Two Lists in One for Loop

```
1
2
3
4

```

```
list1 = ['a','b','c','d']
list2 = ['apple','boy','cat','dog']
for x,y in zip(list1, list2):
    print x 'is' y

```

## Process Multiple Files Simultaneously

```
1
2
3
4
5

```

```
with open(filename1) as fp1, open(filename2) as fp2, open(filename3) as fp3:
for l1 in fp1:
    l2 = fp2.readline()
    l3 = fp3.readline()
    # do something

```

## Pad String with "0" at Front

```
1
2
3

```

```
num = "123"
# Fill num with 0s to a total of 5 digits
str_n = num.zfill(5)

```

# Callback Function callback()

## Official Explanation:

>

A callback function is a function called through a function pointer. If you pass a function's pointer (address) as a parameter to another function, when this pointer is used to call the function it points to, we say this is a callback function.

## Intuitive Explanation:

>

**Eating, drinking, sleeping** are **actions** called through the **brain**. If you pass **these actions** as parameters to the **brain**, when **these actions** are used to **actually execute**, we say this is a **callback function**.

## Code Explanation:

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

```

```
def eat(food):
    print "I will eat ", food
def drink(beverage):
    print "I will drink ", beverage

def brain(action, target):
    return action(target)
```

# __all__ and __metaclass__ Usage
## __all__
Shows the content outline of the module at **first glance**, providing a **clearer** external access interface. But note, only the content in the list will be exposed!

Look at the code:
### Test file foo.py
```py
__all__ = ['pig', 'monkey', 'deer']

deer = 10086
monkey = 10010
def pig():
    return "awesome"

```

### Test File

```
1
2
3
4

```

```
from foo import *
print(bar)
print(monkey)
print(deer)

```

>

References and citations

- [https://m.baidu.com/?from=844b&vit=fps&nsukey=QL%2FYJKapoliD84rv4ROf08qlZJ83uWDoXzrVj](https://m.baidu.com/?from=844b&vit=fps&nsukey=QL%2FYJKapoliD84rv4ROf08qlZJ83uWDoXzrVj)

- [https://www.cnblogs.com/scf141592/p/5726347.html](https://www.cnblogs.com/scf141592/p/5726347.html)

- [https://www.cnblogs.com/crazyrunning/p/6945183.html](https://www.cnblogs.com/crazyrunning/p/6945183.html)

- [https://www.cnblogs.com/polly333/p/8143672.html](https://www.cnblogs.com/polly333/p/8143672.html)

- [https://www.cnblogs.com/crazyrunning/p/6945183.html](https://www.cnblogs.com/crazyrunning/p/6945183.html)

- [https://www.cnblogs.com/imageSet/p/7473326.html](https://www.cnblogs.com/imageSet/p/7473326.html)

- [https://www.jianshu.com/p/4bd8a1c93cbe](https://www.jianshu.com/p/4bd8a1c93cbe)

- [https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386820062641f3bcc60a4b164f8d91df476445697b9e000](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386820062641f3bcc60a4b164f8d91df476445697b9e000)

- [https://www.liaoxuefeng.com/](https://www.liaoxuefeng.com/)

- [https://www.ibm.com/developerworks/cn/opensource/os-cn-pythonwith/](https://www.ibm.com/developerworks/cn/opensource/os-cn-pythonwith/)

- [https://www.cnblogs.com/alamZ/p/6943869.html](https://www.cnblogs.com/alamZ/p/6943869.html)
