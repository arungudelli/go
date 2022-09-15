---
title: "How to Parse a String to int or float in Python"
description: "How to convert a String into float or int in python"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Parsing a String"
author: "dmohanty"
---

**Data types** play a very major role in any programming language.

They are like the stepping stones of getting introduced to a programming language. They specify the kind of data that a variable can store. Like text or whole numbers or decimals etc.

If you have been programming for a while now, then it is pretty obvious that you must have come across the popular data types like string, int, float, double etc. 

In this article, we will discuss about How can we convert a string to a float or int in Python.

## Data Types in Python

As mentioned, data types are one of the building blocks of any programming languages, an the same applies to python too.

Python has different data types that can be used to specify a variable about what kind of data it can store. And it is very important that we also know, how to **convert** from one data type to another data type.

Let’s look at some of the popular data types in python,

```
String: sample_text = "I am a programmer"
```
`Strings` are used to represent text information and are enclosed within **single** or **double** quotes.

```
Int: sample_number = 15
```
`Int` is used to represent **whole numbers** & **integers** in python.

```
Float: sample_decimal = 25.5
```
`Float` is used to represent **decimals** and **floating-point** numbers.


So, now that we have a basic knowledge of the data types, we can now discuss about **type-conversion**; in simpler words, converting from one data type to another.

We will discuss how to convert a string into whole numbers and floating-point numbers in python.

Let’s get started:

## Convert String to Float

In this section we will discuss about how we can convert our string to floating-point numbers.

## Using float() method

`float()` is an inbuilt function in python that allows us to convert any data type into floating-point numbers.

Thus, this is the easiest way to convert a string into floating-point numbers

```
sample_decimal="25.56"
new_decimal=float(sample_decimal)
print(new_decimal)
print(new_decimal+4.44)
```

Output:
```
25.56
30.0
```

From the above code snippet, we can figure out that after we have converted a string to a float, then we can apply all the basic operations like addition and subtraction to it.

If by mistake instead of a number as a text, we provide some text into the `float()` function

Example:
```
sample_text="Convert"
new_decimal=float(sample_text)
print(new_decimal)
```

Output:
```
Traceback (most recent call last):
  File "<string>", line 2, in <module>
ValueError: could not convert string to float: 'Convert'
```

Then it will result in an `ValueError` because the in-built `float()` is not configured to take alphabets as its parameter.

## Using Decimal() method

Since we are only focused on converting strings into floating-point numbers, then we can import the **decimal** module explicitly and then use the `Decimal()` method in order to convert the string into a floating-point number.

```
from decimal import Decimal

sample_decimal="10.55"
new_decimal=Decimal(sample_decimal)
print(new_decimal)
print(new_decimal+9)
```

Output:
```
10.55
19.55
```

But we have got an issue ! If we go on to use a float instead of an int in the last line, then we will un into a error `unsupported operand type(s) for *: 'Decimal' and 'float'`.

```
from decimal import Decimal

sample_decimal="10.55"
new_decimal=Decimal(sample_decimal)
print(new_decimal)
print(new_decimal+9.45)
```

Output:
```
10.55
Traceback (most recent call last):
  File "<string>", line 6, in <module>
TypeError: unsupported operand type(s) for +: 'decimal.Decimal' and 'float'
```

This happens because the python interpreter doesn’t consider *Decimal* and *float* to be at the same level.

How can we fix this issue ?

This is quite easy. We can use the knowledge that we have until now to solve this problem. We can simply **typecast** the `Decimal` into *float* data type using the `float()` method and then we can use all our operations freely.

Like:
```
from decimal import Decimal

sample_decimal="10.55"
new_decimal=Decimal(sample_decimal)
print(new_decimal)
print(float(new_decimal)+9.45)
```

Output:
```
10.55
20.0
```

This wraps up our Parsing the string into float section. 

We can now discuss about how can we convert a string into int in python in the following section.

## Convert String to Int

In a similar way as like of `float()`, we can use the inbuilt `int()` method to convert a *string* to *integer/whole number*.

## Using int() method

`int()` is an inbuilt function in python that allows us to convert any data type into **whole numbers / integers**.

Thus, this is the easiest way to convert a string into whole numbers.

```
sample_number="15"
new_num=int(sample_number)
print(new_num)
print(new_num * 10)
```

Output:
```
15
150
```

However, if we pass any other data like **text** or **hexadecimal** number inside a string as a parameter to the `int()` function, the code will output an `ValueError`.

```
sample_number="code"
new_num=int(sample_number)
print(new_num)
```

Output:
```
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: invalid literal for int() with base 10: 'code'
```

Unfortunately, this is the only method that can be used to convert a string into an integer in python.

With this being stated we mark the end of our discussion on how to parse a string as float or int.

## Conclusion

In this article we discussed about Data types in python and about typecasting in python.

We discussed how can we convert / parse a string into float or int in python and learnt about the various methods of achieving our desired result.

We also discussed about the possible error cases that we can come across while working with these methods.


