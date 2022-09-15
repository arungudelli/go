---
title: "How to count occurrences of a list item in Python"
description: "Different methods by which we can count occurrences of a list item using Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
author: "dmohanty"
---

## Introduction

Lists are an integral part of python’s core functionality, and we tend to use lists in almost every functions and which makes operations on List a very integral part as a programmer.

Python lists can contain items of several data types where as arrays only contain items of the same datatype

In this article we will learn how to count the occurrences of a list item using different methods in Python.


## Method 1: Using `for` loop, Iterating and Counting

Let’s start with a very naïve method. Almost every beginner programmer is aware about the iteration and counting method in python.

We can easily count the occurrences of an by iterating through the list using `for` loop and then returning appropriate value to the user.

Let’s see the code implementation for this method.

```python
sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
value = 2
count = 0
for i in sample_list:
    if (i == value):
        count = count + 1
print(count)

```

Output:

```
3

```

As we can see, it’s pretty much straightforward with this beginner method i.e., looping through the list and searching for a particular element and saving its occurrences in a variable and printing it back to the user.

Now let’s move a little bit advanced and checkout our next method.

## Method 2: Using `count()` method

`count()` is a built in method for the list type object in python that can be used to iterate through a list and then count for the number of occurrences of the item passed as parameter to the function and then returning the desired result.

```python
sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
print(sample_list.count(2))

```

Output

```
3

```

The `count()` function actually simplify our task by searching for a particular element and counting its occurrences inside of the list.

Now let’s check for further efficient methods.

## Method 3: Using `counter()` method

The `counter()` method is another inbuilt python method for the list objects which stores occurrences of all unique elements inside of a dictionary in the form a key value pair with the list item as key and its occurrences as value.

Sounds interesting? Let’s check it out

```python
from collections import Counter

sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
print(Counter(sample_list))

```

Output

```
Counter({2: 3, 4: 2, 1: 1, 6: 1, 3: 1, 8: 1, 9: 1, 7: 1, 0: 1})

```

As we have discussed, we got the dictionary as output containing the occurrences of all the unique elements of the list in a decreasing order of their occurrences inside of the list.

Now to find the occurrences of a particular element say `2` we can access `Counter()` dictionary.

```python
Counter(sample_list)[2]
3
```

## Method 4: Using `countof()` method

`Countof()` is another popular method by the help of which we can count the number of occurrences of a Python list element'

This method is categorized under a special module called the `operator` module and takes in two parameters. 

One is the list and the other one is the value we are searching for.

This method gives out the number of occurrences of the value we are searching for as the result.

Let’s see the implementation of this method in the code.

```python
import operator as op

sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
value = 2
print(op.countOf(sample_list,value))

```

Output

```
3

```

As we have discussed, we got the exact same output by using `countof()` method and we can use his method in order to count the number of occurrences of a list element.

## Method 5: Using list comprehension method

Using a `for` loop for iterating and then checking for something according to each value of the iterable object.

Doesn’t python have a one liner for it, specially called the dictionary comprehension method.

We can dynamically create a new dictionary by using the `count` method and storing the key value pairs of the items and their number of occurrences.

This exactly creates the same thing as that of the `counter()` method but can be helpful at times.

```python
sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
occurrence = {x: sample_list.count(x) for x in sample_list}
print(occurrence.get(2))

```

Output

```
3

```

Thus, we got what we expected. We used the **dictionary comprehension** and `count()` method couple to form a dictionary of list items and their occurrences as key value pairs and then we fetch the value for appropriate key word using the `get()` method in the dictionary.

## Conclusion

As we come to the end of this article, in this we discovered various methods on how to count for the occurrences of a list item in python and the various ways to get an optimal solution to the problem.
