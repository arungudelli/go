---
title: "Split a list into equally sized chunks"
description: "Different methods by which we can split a list into equally sized chunks in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Split a list into equally sized chunks"
author: "dmohanty"
---

## Introduction

Lists, like arrays, are collections of ordered things. The main difference between both is that arrays only contain items of the same datatype, but lists can contain items of various data types.

We can many a times encounter with a problem of splitting the list into N sized parts, all of equal parts (if applicable), and there are a very few methods by which we can do it in a very optimized way, not too advanced, not too beginner.

So, in this article we will look at some of the amateur methods by the help of which we can solve the problem.

## Using generator

_Generator_ basically refers to a function which yields a new value according to the conditions provided by the user and for that we have to defined a functions and pass appropriate parameters to it and then convert the result to a list and use the pprint method of the `pprint` module to get the desired output.

Let’s check this out in Implementation

```
import pprint

def sliced(test_list, n):
    for i in range(0, len(test_list), n):
        yield test_list[i:i + n]
sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
value=3
pprint.pprint(list(sliced(sample_list,value)))

```

Output:

```
[[1, 4, 2], [6, 3, 4], [8, 2, 9], [2, 7, 0]]

```

As we can see we got a list of lists that are equal in length and thus we can say that we have successfully splitted the sample_list into _N lists of equal size_.

This was quite a technical method and now let’s checkout a more familiar method in order to achieve our desired output.

## Using list comprehension

*List comprehension *have application on almost every task of the list and in this problem as well we have a solution using the list comprehension.

List comprehension is basically dynamically creating a list with required specifications and changes.

Let’s check it out.

```
sample_list = [1,4,2,6,3,4,8,2,9,2,7,0]
value=2
new_list = [sample_list[i:i + value] for i in range(0, len(sample_list), value)]
print(new_list)

```

Output

```
[[1, 4], [2, 6], [3, 4], [8, 2], [9, 2], [7, 0]]

```

As we can see we got the desired output, we were able to split our list into N lists, each of length 2 and thus we can change the length of each chunk according to our use case.

## Conclusion

As we come to the end of this small article, but these methods are very much helpful to achieve the desired output and we were to split the list into _equally sized chunks_ without the use of python’s external library.
