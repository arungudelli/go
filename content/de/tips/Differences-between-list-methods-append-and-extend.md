---
title: "Differences between list methods, append and extend in Python"
description: "The differences between list methods, append and extend in Python."
date: "2022-08-09T04:15:05+09:00"
draft: true
author: "shittu"
---

## Overview

It's safe to say that python's ability to employ methods is one of its key advantages. If nothing else, you'll use them a lot while developing python applications. The reusable code that can be used at any point over the course of the program is contained in these methods.

In object-oriented programming, there are objects. They are made up of traits and actions. In addition, an object's properties and behavior are defined by its attributes and methods, respectively. These methods are defined within a class.

I'll explain the idea in this article, but I'll also go through how python's list methods, append and extend, differ from one another.

**Note**: this is a hands-on tutorial, I urge you to participate in the coding portion with me.



## Python List

A list is made by enclosing elements in square brackets [] and separating them with commas. Lists are useful for storing multiple elements in a single variable.

One of Python's four inbuilt data types for storing data collections is the list. Tuple, set, and dictionary are the other three; each has a distinct purpose.

**Example**:
```python
#an empty list
test_list = []

# a list of integers
test_list = [2, 4, 6, 8, 10]

# a list with mixed data types
test_list = [10, "Amazing", 1.42, 'Morning']
```

### Append()
The append method `.append()` adds an item (x) or a single element to the end of the list. This is equivalent to `a[len(a):] = [x]`

**Syntax**: `<list>.append(<item>)`
The initial list isn't changed when you use `.append()`, The method modifies the original list in memory rather than making a copy of it.

**Example**:
```python
# Define the list
letters = ['rock','paper']
print(letters)

# Add the string scissors to the end of the existing list
letters.append('scissors')
print(letters)
```

**Output**:
```python
['rock', 'paper']
['rock', 'paper', 'scissors']
```
We can append an integer to list of integers by just calling the append method followed by the integer you plan to add to the list.

**Example**:
```python

# Define the list
x = [2, 4, 6]
print(x)

x.append(8)
print(x)
```

**Output**:
```python
[2, 4, 6]
[2, 4, 6, 8]
```
With the `.append()` we can also add a sequence of item to a list. The complete sequence will be added as one item to the current list if the item is a sequence, such as a list, dictionary, or tuple.

**Example**:
```python
# list definition
group = ["Lion", "Male", 25]
print(group)

# Add the sequnce to the existing list
group.append(("Tiger", "Female", 17))
print(group)
```
**Output**:
```python
["Lion", "Male", 25]
["Lion", "Male", 25, ("Tiger", "Female", 17)]
```


### Extend()
The extend method `.extend()` adds to the end of a list by appending all the items from the iterable. It allows you to join two lists together. This method is equivalent to `a[len(a):] = iterable`

**Syntax**: `<list>.extend(<iterable>)`

**Example**:
```python
#define the first list to be modified
a = ['run', 'walk']
print(a)
#second list to extend
a.extend(['jog', 'fly'])
print(a)
```

**Output**:
```python
['run', 'walk']
['run', 'walk', 'jog', 'fly']
```
We should be able to clearly see how the extend() works on iterable from the example above, now let us extend a list of integers for better understanding.

```python
#define the first list to be modified
x = [1, 2, 3, 4, 5]

#the second list to extend
y = [6, 7, 8, 9, 10]

#let us extend list(y) on list(x)
x.extend(y)

print(x)
```

**Output**:
```python
#result after printing x
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
Note: after we extend the list y, only the list `x` is modified while the list `y` stays intact.




## Conclusion

In this article, we discussed in detail about the differences between two list methods `.append()` and `.extend()` in python.

We looked into what python lists are, how it is annotated using `[]` with some examples. We discussed in detail the differences between the append and extend methods. 

We said the `.append()` adds a single item to the end of a list while the `.extend()` gives us the flexibility to join two lists together.







