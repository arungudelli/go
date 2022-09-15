---
title: "5 methods to Convert Bytes to String in Python"
description: "Different methods by which we can convert Byte to String in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
author: "dmohanty"
---

## Introduction

Data types are a very key aspect in any programming language and in order to code better, one must be very much fluent in various data types their language and the various methods by which we can parse the data / convert the data types of various data.

In this article we will be looking at two data types from Python and then we will also be gaining some idea on how we can convert data from one data type to another data type.

## Overview of Byte and String in Python

**Byte**: Byte usually refers to an integer between 0 and 255 which can generally be represented using b / B.

```python
byte_string = b'I love coding with python'
```

**String**: Strings are a continuous literals of Unicode characters that can be used to represent text information by enclosing the data between single quotes and double quotes.

```
sample_string = “I love coding with python”
```

## Method 1: Using the `decode()` method

`decode()` is an inbuilt method in python which can be used to convert bytes to string.

This inbuilt method uses a particular _encoding scheme_ to convert bytes to string.

Let’s have a look on the demo example:

```python
sample_data = b'Welcome to Python Shiksha'  

# Initialising the variable using the standard byte define notation

print(sample_data)
print(type(sample_data))

decoded_data = sample_data.decode()

print(decoded_data)
print(type(decoded_data))
```

OUTPUT:

```python
b'Welcome to Python Shiksha'
<class 'bytes'>
Welcome to Python Shiksha
<class 'str'>
```

As we can see from the above conclusion that, we are getting almost similar type of output, the only difference being the `b` keyword and the type of the data being outputted, the first one being a **byte** data type while the second one being the **string** data type.

## Method 2: Using the `codecs.decode()` method

Instead of using the built in `decode()` method , we can also import the **codecs** module in order to achieve the same functionality as an alternative.

This alternative provides us with an option to pass an `encoding scheme` as an parameter to the `codecs.decode()` method.

```python
import codecs

sample_data = b'Welcome to Python Shiksha'  # Initialising the variable using the standard byte define notation

print(sample_data)
print(type(sample_data))

decoded_data = codecs.decode(sample_data, 'UTF-8')

print(decoded_data)
print(type(decoded_data))
```

OUTPUT:

```
b'Welcome to Python Shiksha'
<class 'bytes'>
Welcome to Python Shiksha
<class 'str'>
```

Passing the `encoding scheme` as a parameter is not **mandatory**, instead we can simply call the function and voila, we got the exact same output.

## Method 3: Using the `str()` function

Working with strings but not working with the string predefined methods. Eh! Python is so versatile that we can convert almost any data type to strings using the `str()` function.

You may ask, then this would be applicable in this case as well. 

Yes, we can covert bytes to string using Python `str()` function, Let's check it out.

```python
sample_data = b'Welcome to Python Shiksha'

print(sample_data)
print(type(sample_data))

decoded_data = str(sample_data)

print(decoded_data)
print(type(decoded_data))
```

OUTPUT:

```
> b'Welcome to Python Shiksha'
<class 'bytes'>
b'Welcome to Python Shiksha'
<class 'str'>
```

See, we already have predicted that we can use it, and the result is in front of you.

Let’s quickly hop onto our next method i.e., Again using an inbuilt library to achieve our purpose.

## Method 4: Using the `pandas` library

Using the `pandas` library method would be useful in a case where we want to **dynamically convert bytes to a string**.

By using this method what we are doing basically is that we will first loop through an array of byte data types to form a sentence of byte data type and then further using our previously learned `decode()` function to convert it from bytes to string.

```python
sample_data = {'column' : [b'Python', b'loves' , b'Python Shiksha']}
data = pd.DataFrame(data=sample_data)

decoded_data = data['column'].str.decode("UTF-8")

print(decoded_data)
```

OUTPUT:

```
0            Python
1             loves
2    Python Shiksha
Name: column, dtype: object
```

The output obtained by this method might not be the exact one that we required but, yes, we are able to convert byte data types to strings.

Now, the problem is there any last method that we can use to achieve our purpose. 

Of course there is , so next let’s discuss about the last method of our article i.e. using the `map()` method.

## Method 5: Using the `map()` method without the `b` prefix

This is one of the most non-recommended methods to convert bytes to string.

Not because of its weird syntax like the `pandas` module method but the problem here is that in order to convert from byte to string, we need to write the **ASCII codes** of the letters and then use the `map()` function in order to concatenate the byte values in decoded format to form a string.

It is very rare for a programmer to remember **ASCII codes** of all the alphabets, and surfing the internet for the whole sentence would be very hectic.

But since it is a method, let’s check it out.

```python
sample_ascii_data = [73,32,76,111,118,101,32,80,121,116,104,111,110,32,83,104,105,107,115,104,97] #I Love Python Shiksha in ASCII codes
decoded_data = ''.join(map(chr,sample_ascii_data));
print(decoded_data)
print(type(decoded_data))
```

OUTPUT:

```
I Love Python Shiksha
<class 'str'>
```

As you can see in the above method that in order to print a small sentence, we had to write a hell lot of ASCII codes array, so in order to avoid such chaos , you can prefer avoiding this method.

## Conclusion

As we come to an end of this article, let’s just have a recap of what we learnt in this article.

As an overview, we looked upon the String and byte data types, later on we had an in depth view of the different methods available to convert byte data type to string.

