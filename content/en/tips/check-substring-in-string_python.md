---
title: "5 Python methods to check if a substring exists in a Given string"
description: "Different methods of checking for a substring inside a string in python."
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Substring Check"
author: "dmohanty"
---

In this article, we will briefly discuss about the **different python methods that we can use to check if a substring is present inside a string** along with some shortcuts that can make our coding efficient.

## Overview of Strings in Python

**Strings** are an array of Unicode characters occupying a storage of few bytes. 

If you come from a different language, there are high chances of your interaction with the `char` keyword, but in python there is no such `char` keyword and thus we can say that a single letter inside quotation marks in python is a string with length 1.

Strings behave the same way as like arrays and thus can be accessed by using the `[]` operator.

A substring is a sequence of Unicode characters within a string.

Examples of Strings in python:
```
‘python’ , ‘coding’ , ‘py’ , ‘d’ , ‘xyz’ , ‘Python is a good language’
```

## Different Substring Check methods in Python 

Let's start exploring the various python methods starting with the powerful and most common `in` operator.

## Using the `in` operator

The `in` operator is one of the fastest and most generic method adopted by python programmers as they know the power of the `in` operator and its value in python. 

The `in` operator evaluates the presence of a substring inside a string and return a **boolean** value accordingly.

```python
main_string = "Python is a good programming language"
sub_string1 = "good"
sub_string2 = "not"

if sub_string1 in main_string:
    print("Substring Found !")
else:
    print("Substring not Found !")
    

print(sub_string2 in main_string)

```
OUUTPUT:

```
Substring Found !
False
```

Thus, we would now have a fair idea as of why `in` is so valuable in python.

## Using the `find()` method

Python’s default `find()` method is used to check if a substring is present in a string and this method looks for the lowest index at which the substring is found.

It returns the **particular index** if the substring is present else returns `-1` if substring is not present.

```python
main_string = "Python is a good programming language"
sub_string1 = "good"
sub_string2 = "not"

isFound = main_string.find(sub_string1)

if isFound >= 0:
    print("Substring Found !")
else:
    print("Substring not Found !")

print(main_string.find(sub_string2))

```
OUTPUT:
```
Substring Found !
-1
```
Other than the generic method of using `find()`, we can also try out some cool in-built features of it.

The cool feature is that we can specify *starting* and *ending* indices for our search, in case of a multiline main string.

Syntax:
```python
print( main_string.find(sub_string , starting index , ending index ))
```

```python
main_string = "Python is a good programming language"

sub_string1 = "good"

print(main_string.find(sub_string1,1,10))
print(main_string.find(sub_string1,10,30))

```
OUTPUT:
```
-1
12
```
As discussed, we can clearly see that since the index of *good* is `12` therefore when we specify indices from 1-10, we get `-1` as result but when we search in indices from 10-30, we get the output as `12`.

## Using the `count()` method

The `count()` is one of those generic python programming methods which return binary value as output.

This method searches for the occurrence of a substring inside a string and returns `1` if substring is present else returns `0` when substring is not present.

```python
main_string = "Python is a good programming language"

sub_string1 = "good"
sub_string2 = "not"

isExists = main_string.count(sub_string1)

if isExists == 1 :
    print("Substring Found !")
else:
    print("Substring not Found !")

print(main_string.count(sub_string2))

```
OUTPUT:
```
Substring Found !
0
```

## Using the index() method

The `index()` method is also one of the unique methods of achieving the result.

Unlike other methods, this doesn't return a value as output but instead it returns a `ValueError` if a substring is not present inside a string & if a substring is present then it returns the **lowest index** of that substring.

Hence, **Handling exception** is the only way to evaluate the existence of a substring inside of a string. 

```python
main_string = "Python is a good programming language"

sub_string1 = "good"
sub_string2 = "not"

try:
    result = main_string.index(sub_string1)
    print("Substring Found !")
except ValueError as e:
    print("Error Code:",e)

try:
    result = main_string.index(sub_string2)
    print("Substring Found")
except ValueError as e:
    print("Error Code:",e)

```
OUTPUT:
```
Substring Found !
Error Code: substring not found
```

## Using the operator.contains() method

The hidden method / barely used method for searching substring inside a string is the `operator.contains()` method.

But this method can be effective at times. Implementation of this method requires the operator function which has to be imported explicitly in the code.

This method returns a `boolean` value as output depending the presence of a substring inside a string. 

```python
import operator

main_string = "Python is a good programming language"

sub_string1 = "good"
sub_string2 = "not"
 

if operator.contains(main_string,sub_string1) :
    print("Substring Found !")
else:
    print("Substring not Found !")

print(operator.contains(main_string,sub_string2))

```
OUTPUT:
```
Substring Found !
False
```

Since, we have discussed all the methods for evaluating the existence of a substring inside a string now it’s the time to discuss the performance of all our methods and which method should we use in order to make our programming faster.

## Discussing Performance

Now we will see the performance aspects of different methods

```python
import timeit
code_setup = """
main_string = "Python is a good programming language"
sub_1 = "good"
"""

## With in operator
code_1 = """
if sub_1 in main_string:
    # print("Substring Found !")
    pass
else:
    # print("Substring not Found !")
    pass
"""

## With find method
code_2 = """
result = main_string.find(sub_1)

if result >= 0:
    # print("Substring Found !")
    pass
else:
    # print("Substring not Found !")
    pass

"""

## With count method
code_3 = """
result = main_string.count(sub_1)

if result == 1 :
    # print("Substring Found !")
    pass
else:
    # print("Substring not Found !")
    pass

"""

## With index method  
code_4 = """
try:
    result = main_string.index(sub_1)
    # print("Substring Found !")
    pass
except ValueError as e:
    # print("Error Code:",e)
    pass

"""

## With Contains Method
code_5 = """
import operator

if operator.contains(main_string,sub_1) :
    # print("Substring Found !")
    pass
else:
    # print("Substring not Found !")
    pass
"""
print('Time With in operator: ', timeit.timeit(setup = code_setup , stmt= code_1, number= 10000000))
print('Time With find method: ', timeit.timeit(setup = code_setup , stmt= code_2, number= 10000000))
print('Time With count method: ', timeit.timeit(setup = code_setup , stmt= code_3, number= 10000000))
print('Time With index method: ', timeit.timeit(setup = code_setup , stmt= code_4, number= 10000000))
print('Time With Contains Method: ', timeit.timeit(setup = code_setup , stmt= code_5, number= 10000000))


```
OUTPUT:
```
Time With in operator:  0.5566656999999999
Time With find method:  2.0406945999999997
Time With count method:  2.0501952000000006
Time With index method:  1.8084388000000002
Time With Contains Method:  2.2768479
```
From the output, it is clearly visible that our mighty `in` operator stands out above all other methods and hence `in` adds one more time-saving usability into itself. 

So as a python programmer, we should always be aware that `in` can solve many of our searching tasks.

## Conclusion

In this article, we discussed in detail about all the various methods with the help of which we can easily search for a substring inside a string. 

In the later part, we discussed about the performance of all the methods and came up with the most preferable method that can be used by programmers to solve this problem.