---
title: "2 methods to Check if an object has an attribute in Python"
description: "2 different methods to check if an object has an attribute in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
author: "dmohanty"
---

## Introduction

Python is all about objects and every object in python has some attributes, be it a method, be it a variable and it becomes very important to check for an appropriate attribute inside of an object while writing **complex** logic.

But is it even possible to check if a particular object has a desired attribute or not? 

Since, you are using Python, versatility is your friend and so the answer is yes, you can check if a desired attribute is present inside of the given object or not.

There are not a much of flexibility available to achieve this output but yes there are methods for the same.

Let’s have a look on the same

## Method 1: Using `hasattr()` method

Python comes with a very handy method called `hasattr()` to simplify the task of checking if an attribute is present inside of an object.

You can simply call the inbuilt method `hasattr(object,attribute)` and Python will automatically check if attribute is present inside of object and would return a _Boolean_ accordingly.

Let’s check out the implementation:

```python
class shiksha:
    pypy = 15.0
    def getPy(self):
        print("Python Shiksha")

if hasattr(shiksha, 'pypy'):
   print("Attribute Found")
else:
   print('Attribute Not Found')

if hasattr(shiksha, 'getpy'):
   print("Attribute Found")
else:
   print('Attribute Not Found')

```

Output:

```
Attribute Found
Attribute Not Found

```

Hurray! We got the desired output, since `pypy` is an attribute of the `shiksha` class so, we got `true` as an output but since `getpy` is not an attribute of the `shiksha` class, we got `false` as expected.

Now, since we are programmers, it is better for us to know a method that doesn't involve any pre-defined method but some orthodox programming methods.

Let’s check out next classic method.

## Method 2:  Using `try` and `except` block

As coders, a curiosity towards using classic methods for solving problems must be of a great importance since it teaches us a lot of things.

In order to achieve our desired output as well we will now use a `try-except` classic method and check for an `AttributeError` in order to notify our user if an attribute is not present in the object.

Let’s checkout this awesome method.

```python
class shiksha:
    pypy = 15.0
    def getPy():
        print("Python Shiksha")

try:
    shiksha.getPy()
except AttributeError:
    print("No Such Attribute found")

try:
    shiksha.pyPie
except AttributeError:
    print("No Such Attribute found")

```

Output:

```
Python Shiksha
No Such Attribute found

```

This code piece also provided us the desired output.

`Shiksha` has an attribute of `getPy()` and therefore the method directly gets called upon but on the other hand `Shiksha` doesn’t have a `pyPIe` attribute and thus it resulted in an exception throwing an error message for the user.

## Conclusion

We have finally come to the end of this short yet useful article. 

In this article we learnt about different **Python methods to Check if an object has an attribute** and outputting relevant messages and values to the users.
