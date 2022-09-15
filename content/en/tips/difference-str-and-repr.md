---
title: "Difference between __str and __repr__"
description: "Difference between __str and __repr__ in Python"
date: "2022-08-02T04:15:05+09:00"
draft: true
link: "Difference between str and repr"
author: "dmohanty"
---

## Introduction

_Strings_ play a very key role in python and are useful in almost any algorithmic code that we write in python and therefore knowing in depth about the representation of strings on the interpreter basis becomes important for you.

Inbuilt classes and methods for strings already work with, `__str__` and `__repr__` , but it becomes important for us a s a user to use them in our user-defined classes, object and methods so that we can provide the work in a more optimized and clean way.

## What are str and repr?

These two are two special methods that can be used for string representation based on the _state_ of the object in the class.

According to the docs of python, `__str__` is used to represent the string in a more _informal / readable_ way while we use `__repr__` to represent the string in a more formal or the _official_ representation of the original strings in python

Example:

```
# Using the str() method
print(str('Python'))

# Using repr() method
print(repr('Python'))

```

Output:

```
Python
'Python'

```

As we can see the difference in both the outputs, one between quotes and one not. Thus we can say that the second method is the _official_ representation of the strings in python.

According to the docs, the difference between formal and informal representation is that `__repr__` is by default used in string values that are argument to an _eval_ function while `__str__` would throw and error for the same.

Let’s see both methods in actions:

```
# Default implementation repr() method

a = "Shiksha"
repr(a)
b = eval(repr(a))
print(a==b)

# Testing with __str__
str(a)
c = eval(str(a))
print(a==c)


```

Output:

```
True
Traceback (most recent call last):
  File "<string>", line 6, in <module>
File "<string>", line 1, in <module>
NameError: name 'Shiksha' is not defined

```

As discussed above, we got the exact same output i.e., `__str__` throws an error while `__repr__` gives _True_ as an output, and thus we can see the default implementation of `__repr__` in use.

## Conclusion

In this small article , we discussed in depth about the representation of the String data type according to the state of the object and class we are using and thus this article is all about defining data types and constructor classes on a core python basis and the official documentation types.
