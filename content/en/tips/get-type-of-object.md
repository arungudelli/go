---
title: "Get type of an object "
description: "Different methods by which we get the type of an object in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Get type of an object"
author: "dmohanty"
---

## Introduction

Data types are an integral part of any programming as hey are very helpful in almost every line of code, be it defining functions, variables or accessing attributes etc. and therefore it is becoming important for us to learn the methods by which we can output the data type of an object in python.

There are commonly two methods to achieve the desired output, so let’s look at both the methods one by one.

## Using type() method

Python comes with a very _standard_, easy to use method, `type()` in order to easily figure out the type of any object in Python.

`type()` is the **most flexible** and standard method that can be used in order to obtain the type of any object in Python.

Let us have a look on the code implementation of this method:

```
a = 13.0
b = "Python Shiksha"
c = {
    "1" : "One",
    "2" : "Two",
    "3" : "Three"
}
print(type(a))
print(type(b))
print(type(c))

```

Output:

```
<class 'float'>
<class 'str'>
<class 'dict'>

```

As expected, we were able to get the desired output, and we obtained the respective classes of the user defined variables.

This method can be very handy in case if we want to check the type of our output in a large code which can help us debug the code better.

Now let’s have a watch on the other method

## Using isinstance() method

`isinstance()` is another pre defined method in python which can be used to get the type of the object.

But how it’s different from `type()` then. The fact being `type()` takes only one parameter while `isinstance()` takes _2 parameters_.

First parameter being the object we want to get the type of, and the second being the group of classes we want to check in.

Suppose we are passing an object and mostly you predict it to be a string, then you can pass str as a second parameter and the method would return True or False accordingly.

Let’s have a clear example of this method’s implementation

```
print(isinstance(13.0,float))
print(isinstance("Python Shiksha",(str,list,tuple)))
print(isinstance([2,4,6,8],(dict,str,int)))

```

Output:

```
True
True
False

```

As discussed above, we got _Boolean_ values according to the comparison made by the `isinstance()` method and the good thing about this method is that, you can check for the preferred data type among a group of data types as well as per each data type.

## Conclusion

As we conclude this article, we got to know about the two methods that can be used to extract the type of an object in Python.

We discussed in detail about both the methods and their use cases , where can these methods be helpful and save time while programming huge lines of code.
