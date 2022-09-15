---
title: "Generate random integers from 0-9"
description: "Different methods by which generate random integers from 0-9 in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Generate random integers"
author: "dmohanty"
---

## Introduction

_Integers_ are pretty much the most common data types inside of every programming language. Data types being the building blocks of a programming language and integer being one of the fundamental data types.

Integer basically in python are a category of zero, positive or negative whole numbers without a fractional part and having a never-ending precision. Type cast to integers is also easy as we can convert any data type to integer by using the default constructor for int i.e., `int()`.

Now in this article we will see how we can generate random integers between 0-9 in python using various methods.

## Using randint() method

Python has a lot of built-in libraries for various tasks in a simplified manner and like the *Math.random() *function in JavaScript, we have the `random` module in python that can be used to generate random integers within a range.

Let’s have a look on its implementation:

```
import random

for i in range(0,9):
    random_number = random.randint(0, 9)
    print(random_number)

```

Output:

In order to get a better understanding of the function, we are calling the loop 10 times and printing the function output 10 times.

```
1
3
2
1
8
8
7
3
9

```

We can see that we are getting desired output but still the problem is that, in case we want to use a float number inside of range, we would get a **ValueError**.

So how can we fix it, don’t worry we will try to fix this issue in the upcoming methods but let’s now see another method from the `random` module that can help us achieve the same output.

## Using randrange() method

This function belongs to `random` module, and it generates random integers within a given range.

This function usually takes up _three parameters_, start, stop, step.

This returns a random integer between the given range. The higher range is not included while calculating the range inside of the function.

Let’s check out the implementation of this method

```
import random

for i in range(9):
    random_number = random.randrange(9)
    print(random_number)

```

Output:

```
1
5
2
8
2
1
0
1
2

```

We are still getting the same output but, in this case, we want to use a `float` number as a parameter of this function then also we would get a **ValueError**.

Now let’s look at the last function which is more preferred base on a security and cryptic Point of view.

## Using secrets module

`Secrets` module is a newly introduced in Python 3.6 that is used to print out more _cryptographically enhanced_ numbers / integers.

This is better than `random` module in aspect of security usage and because of its _cryptographically enhanced_ generating method.

It is generally used to create passwords, OTP etc. because it generates a sequence of integers randomly and in secured manner.

In the `secrets` module, we can use the `randbelow()` method in order to achieve a single random integer within a given range [0,n).

Let us have a look on its implementation on code.

```
import secrets
for i in range(5):
    print(secrets.randbelow(10))

```

Output:

```
3
9
1
4
8

```

## Conclusion

As we are onto conclude this article, let s have a recap of the methods we discussed above to generate random integers between 0-9. We first discussed two of the most commonly used methods of the `random` module i.e. the `randint()` & `randrange()` and then later on, we discussed about the `secrets` module, which can be used to generate _encrypted_ and secure random integers within a given range using the `randbelow()` method.
