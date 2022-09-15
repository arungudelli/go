---
title: "Print String and Variable"
description: "How to print string and variable on same line in python"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Print string-variable on same line"
author: "dmohanty"
---

Many times while programming, we come across some use case where we have to print a string and a variable on the same line.

Other programming languages does it so easily ? 

What about python , does it support the same format ?

Most Probably. 

Let’s check this out in this article.

## What is a Variable ?

Before diving into the different, let’s brush up our basics about variables in python:

A Python **variable** is a *reserved memory location* to store values. 

In simple words, a variable in a python gives data to the computer for processing.

Variables in Python has a datatype like Numbers (Integers and Decimals), List, Tuple, Strings, Dictionary etc.

## Methods to print string & variable on same line

Let's dive deep into the various methods 

### Using type conversion

The fundamental method of printing a string and a variable on the same line is by using **type conversion** and **string concatenation**.

This method probably works the same for all the programming language.

```
num = 5
print ("The Variable is "+str(num))
```

Output:
```
The Variable is 5
```

Pretty simple and easy method but **type conversion** is not always a good option.

How can we retain the type of the variable  along with achieving our desired result?

### Using the comma operator

We can use the `,` operator inside of our print to output multiple variable or string + variable in the same line.

This method also *adds a space* between your variables so that the output looks neat.

```
num = 5
num1 = 10
print ("The Variables are",num,"and",num1)
```

Output:
```
The Variables are 5 and 10
```

We returned the variable type as well as achieved our desired output.

But there is also other method of performing the exact same task.

### Using the % operator

We can also use the orthodox C printf method to achieve the same result.

That is by using the `%` operator, we can use the % operator and then specify the **type** of the variable and then using the variable name along with the `%` operator.

In this method also, we can use multiple variables.

```
num = 5
num1 = 10
print ("The Variables are %d and %d"%(num,num1))
```

Output:
```
The Variables are 5 and 10
```

### Using the string formatting method

This is one of the **most effective** method to be used because it serves the purpose along with a lot of other features like specifying the alignment, padding, fill  etc.

This method is highly **effective** in places where we need multiple use cases in one `print` statement.

```
num = 5
num1 = 10.2
print ("The Variables are {} and {}".format(num,num1))
```

Output:
```
The Variables are 5 and 10.2
```

With this , now we can successfully claim that we have leant all the methods by which we can print both variables and string on the same line.

## Conclusion

In this article, we discussed about the various methods by the hep of which we can print a variable and a string on the same line. 

At first, we discussed about the generic doing method i.e. type conversion and then we saw the method of using the `,` operator and `%` operator and finally concluded with the most useful **string formatting** method.
