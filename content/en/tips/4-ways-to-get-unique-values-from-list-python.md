---
title: "4 ways to Get Unique values from a list in Python"
description: "Different methods of fetching unique values from a python list"
date: "2022-07-18T00:00:05+09:00"
draft: false
link: "Get Unique values from a python list"
author: "dmohanty"
authorurl: "https://www.linkedin.com/in/dibyanshu-mohanty/"
image: "/images/featured/get-unique-items-from-python-list.png"

---

There are a lot of use cases in `python` programming where we would require to fetch unique values from a list.

If stuck with this problem  Don’t worry ! We got you covered.

In this article we will discuss briefly about the different methods fetching unique values from a list in `Python` language.

## Overview of Lists in Python

List contains a group of elements of a different data type separated by commas, and enclosed inside square brackets `[ ]`. 
Example of a list:

```python
sample_list = [1,2,5,2,6,1,4,3,6,3,9,8,2]
```

## Methods to fetch Unique values from a Python List

There are a lot of cases wherein we would be required to get unique values from a list.

Therefore, lets dive deep into the different methods

## Using the for loop and a new list

Starting with the most basic and simplest method, we can simply use a `for` loop and a new list to solve this problem.

We can simply iterate through the existing `python` list and append the unique values on to a new empty list.

This is the **novice method** for solving this and probably preferred by the beginners.

```python
sample_list = [1,2,5,2,6,1,4,3,6,3,9,8,2]
unique_list = []
for element in sample_list:
    if element not in unique_list:
        unique_list.append(element)

print(unique_list)
```
Output:
```
[1, 2, 5, 6, 4, 3, 9, 8]
```

Pretty Simple and easy method.

But if you are enthusiastic about programming, then this is not for you.

## Using `python set()` method

**Sets** are a unique kind of Data structures in Python.

They have a property that they allow only one occurrence of each element and thus are a sequential memory location of only unique values.

Thus, converting the `python` list to `set` using `set()` method in order to fetch only unique values and then converting the set to the list using `list()`.

```python
sample_list = [1,2,5,2,6,1,4,3,6,3,9,8,2]

unique_list = list(set(sample_list))
print(unique_list)
```
Output:
```
[1, 2, 3, 4, 5, 6, 8, 9]
```

This would also improve the runtime performance and thus is a good approach for this problem.

But this method has a small disadvantage i.e. it **doesn’t preserve the order** of elements in the output.

## Using `numpy.unique` method

If you don’t belong to Python background, then Numpy might sound very unfamiliar to you.

But don’t worry, it’s just like any other module in python like collections, os etc. by the help of which we can simplify our problems.

We have to explicitly *import* the modules before using them inside of our program.

Using this methods consists of two parts, first being to convert the list into a **numpy array** and then using `numpy.unique`, which returns a list of only unique values from the list.

```python
import numpy as numpy

sample_list = [1,2,5,2,6,1,4,3,6,3,9,8,2]
arr = numpy.array(sample_list)
unique_list = numpy.unique(arr)

print(unique_list)
```
Output:
```
[1 2 3 4 5 6 8 9]
```

This method returns a **sorted** list containing all the unique values from the list.

## Using the `python Counter()` method

If we are using explicitly calling a module for our use case, then why not using our favorite `collections` module.

The `collections` module contains a method called `Counter()` which prints all the unique values from the input list.

We can carry out this functionality with the help of `*` operator.

```python
from collections import Counter

sample_list = [1,2,5,2,6,1,4,3,6,3,9,8,2]
print(*Counter(sample_list))
```
Output:
```
1 2 5 6 4 3 9 8
```

This method returns a **sequence of unique values** from the list, but not necessarily a list.

## Conclusion

In this article we discussed about the various methods by the help of which we can get the unique values from a `python` list.

We started off by discussing the novice method and then slowly increasing the complexity of the code by using external `python` modules and classes.