---
title: "Remove Duplicates from A List"
description: "Different methods of removing duplicate values from a list"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Remove Duplicate Values"
author: "dmohanty"
---

Lists (also called arrays) are an important Data Structure in any programming language.

Lists are powerful because they can store data of multiple data types in one single memory location / variable.

Lists are mutable in nature and can be changed or altered after their declaration.

In this article, we will look at one of the important modifications that can be done to the list i.e. Removing duplicates from a List.

## Overview of List Duplicates

Lists are an ordered sequence of data in which every data in the sample has a unique place and credibility which allows duplication but,In order to keep our data clean, we should avoid the duplicates as they can seem confusing to the machine if not required.

## Methods of removing duplicate values from a list

Removing the duplicates from a list has a large number of applications and keeping that in mind, Let’s dive deep into the various methods that can be used.

### Using the For loop and a new list

This is the simplest method that can be used by a programmer to solve this problem is by using a `for` loop and a fresh list. 

We would simply iterate through the existing list and append the unique elements to a new list.

```
sample_list = [1,2,3,5,1,2,9,6,4,7,4]
unique_list = [ ]

for i in sample_list:
    if i not in unique_list:
        unique_list.append(i)

print(unique_list)
```
Output:
```
[1, 2, 3, 5, 9, 6, 4, 7]
```

We can clearly see that our output now is free from all the duplicates that were present in the input. 
But we can also use the **list comprehension** + `enumerate()` method, to optimize the code:

```
sample_list = [1,2,3,5,1,2,9,6,4,7,4]
unique_list = [i for n, i in enumerate(sample_list) if i not in sample_list[:n]]
 
print(unique_list)
```
Output:
```
[1, 2, 3, 5, 9, 6, 4, 7]
```

Thus we have found our all-time go-to easy method.

### Using the set() constructor

A faster approach for removing duplicates can be using the `set()` constructor.

By using the `set()` constructor, we can typecast a list into a set and Sets have a property i.e. they allow only one occurrence of an element and thus can easily differentiate the duplicates.

```
sample_list = [1,2,3,5,1,2,9,6,4,7,4]
unique_list = list(set(sample_list))

print(unique_list)
```
Output:
```
[1, 2, 3, 4, 5, 6, 7, 9]
```

Cutting down loops and conditionals onto just 3 lines of code. 

### Using OrderedDict

By using the above methods, we can ensure that we remove the duplicates from the list but what about the order of the elements inside the list.

The order of the elements in the output might be different of that of the output.

How can we solve it ?

Well, we can use the **OrderedDict** class from collections module to preserve the order of our elements.
Specifically we will be using the `OrderedDict.fromkeys()` to create a dictionary of unique element, without changing the order of elements.

```
from collections import OrderedDict
sample_list = [1,2,3,5,1,2,9,6,4,7,4]
unique_list = list(OrderedDict.fromkeys(sample_list));

print(unique_list)
```
Output:
```
[1, 2, 3, 5, 9, 6, 4, 7]
```

This is one of the **most recommended** solutions to this problem since, it preserves the order and is very much faster than the first method.

### Using the count() method

The `list.count()` method returns the number of occurrences of the element.
Therefore, we can use this method along with the `remove()` method to delete all the duplicate items from the list.
But this method **doesn’t preserve the order** of the list

```
sample_list = [1,2,3,5,1,2,9,6,4,7,4]

for i in sample_list[:]:
    if sample_list.count(i) > 1:
        sample_list.remove(i)
 
print(sample_list)
```
Output:
```
[3, 5, 1, 2, 9, 6, 7, 4]
```

If you look carefully then you might get a question i.e.  why are we using slicing in this method? 

This is because if we use iterate through the list directly then the `count()` method will count only up to the *second last index* and will miss the *last index* hence our solution would remain incomplete.

## Conclusion

In this article, we discussed in brief about the different methods by the help of which we can remove duplicate values from inside of a list.

Firstly we discussed about the novice method followed by the fastest method and some then finally wrapping up with the Python centric methods.



