---
title: "How to Define a 2-D (2-dimensional) List in Python"
description: "How to initialize a 2-D list in python"
date: "2021-07-19T04:15:05+09:00"
draft: false
author: "dmohanty"
---

## Introduction

A `2-D` list or a two-dimensional list is a **list of lists**.

It typically represents a `matrix` with rows and columns.

In this article we will discuss various methods to create 2-D lists in Python.

Example of a 2-D list in python:

```python
[ [1,2,3], [4,2,6], [5,8,7] ]
```

## Methods to create a 2-D list in Python

There are only a few specific methods for creating a 2-D list. 
Let’s dive deeper into them:


### Method 1: Using 2 for loops

`for` loops are one of the most important `keyword` in python. 

We can use the mighty `for` loop to create a 2-D list but this time we have to use 2 `for` loops to create a 2-D list.

It is like creating two 1-D lists using `for` loop but in the **nested** pattern.

```python
arr = []
c = 1

for i in range(3):
  ar = []
  for j in range(2):
    ar.append(c)
    c += 1
  arr.append(ar)

print(arr)
```

Output:
```
[[1, 2], [3, 4], [5, 6]]
```

### Method 2: Using List comprehension

Instead of using two `for` loops, we can create a 2-dimensional list in a more compact way, i.e. by using the **list comprehension** method.

Creating a list dynamically always consumes *less memory* and thereby increasing the runtime performance.

But again there are **two** ways of using the **list comprehension** method, let us look into both one by one:

In this we **dynamically** create a list of elements by directly multiplying with the number of columns and rows.

```python
r, c = (4, 5)
arr = [[1]*c]*r
print(arr)
```

Output:
```
[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
```

Another way is to **dynamically** create a list of elements but by using `for` loops,

```python
r, c = (5, 4)
arr = [[1 for i in range(c)] for j in range(r)]
print(arr)
```

Output:
```
[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
```

We have learnt **three** methods of initializing a 2-D list in python. 

But which method is effective ?

Well , the **third** method is the most effective method of creating a 2-D list in python since it has both list comprehension with the mighty `for` loop.

## Conclusion

In this article, we briefly discussed about the various few methods that can be used to create a 2-D list in python and we also discussed about the most **effective** method for achieving this result. 