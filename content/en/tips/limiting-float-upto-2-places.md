---
title: "3 Python ways to Limit float up to two decimal places"
description: "How to get a float with only up to two decimal places."
date: "2021-07-19T04:15:05+09:00"
draft: false
author: "dmohanty"
---

Since Data types and variable types are a very important part of any programming language, it is important to know about their popular use cases.

In this article we will discuss about the a very popular use case of the floating-point numbers i.e., Limiting the float up to two decimal places.

## Overview of floating-point numbers in Python

Python has a variety of Data Types which are used to specify the category of the value that can be stored inside a variable.

Out of these numerous data types, *float* is a data type that hold both *decimals* and integers.

Unless and until value assigned to a variable isn’t in the form of *decimals*, Python interprets it as an integer. 

For converting Numerical strings and integers to floating-point numbers, we can take the help of the `float()` constructor.

Examples of floating-point numbers:

```python
a= 13.5
b= 25.758

print(a,' & ',b)
```

Output:
```
13.5  &  25.758
```

## Methods of limiting float up to 2 decimal places in Python

Now let's dive deep into detail of the methods

## Method 1: Using the `round()` function

We can use Python’s inbuilt `round()` function to round off our numbers which are passed into the constructor as a parameter.

This function **rounds** of the passed-on number to a given number of digits.

```python
b= 25.758

print(round(b))
```

Output:
```
26
```

Actually , the `round()` function takes in **two** arguments, first one is the number to be rounded and the second is the number of places to be rounded off to. 

But if no second argument is passed then the function considers it to be zero and rounds of the floating-point number to the nearest integer following the mathematical rules and algorithms. 

By this, it should have been pretty clear on how to use this function to limit a float up to two decimals.

```python
b= 25.7587852
c=19.568231469
print(round(b,2))
print(round(c,2))
```

Output:
```
25.76
19.57
```

Pretty simple and a go-to method in order to constraint our floats up to two decimal places.

## Method 2: Using the `%` operator

If you come from a **C language** background, then you must be very familiar with using the `%` operator in print statements. 

But we can also use this `%` operator in Python print statements in order to restrict our floats up to two decimal places.

```python
b= 25.7587852
c=19.568231469
print("%.2f"%b)
print("%.2f"%c)
```

Output:
```
25.76
19.57
```

## Method 3: Using the `str.format()` method

`format()` is a very useful method while programming in python and thus, it also has its usage in limiting floats up to decimals.

Here `str.format()` refers to a method of using `***"{:.2f}"***` as the str in the above format.

The string along with the `format()` method will restrict the floating-point numbers up to 2 decimal places.

Let's test this:
```
b= 25.7587852
c=19.568231469
print("{:.2f}".format(b))
print("{:.2f}".format(c))
```

Output:
```
25.76
19.57
```

We have successfully completed discussing all the methods

Such a important use case but with only 3 methods ? 

**Yes**, because all the three methods are self-sufficient of providing user desirable output.

## Conclusion

In this article, we briefly discussed about the few different methods about how to constrain floating-point numbers up to two decimal points. 

First, we started with python’s inbuilt `round()` method followed by the `%` operator and lastly about using the `str.format()` method. 

Again, I would state that all the three methods are self sufficient of providing **user desirable** output individually and ne one method should be adopted while programming.







