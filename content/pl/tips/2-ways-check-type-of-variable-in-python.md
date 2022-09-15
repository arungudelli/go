---
title: "2 ways to check type of a variable in Python"
description: "Two important methods for determining the type of a variable in Python."
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "check type of a Variable"
author: "dmohanty"


---

**Variables** play a very important and major role in programming.

**Variables** are nothing but reserved memory locations that are capable of storing values.

Thus, every time we assign a value to a variable, some of the memory is consumed by the variable.

While Data types are the different categories which  define that what type of value is stored inside a variable, whether it is an integer, a floating-point number or a string etc.

## Data Types in Python:

Python has numerous standard data types that are used to define the operations possible on them and the storage method for each of them.

The commonly used data types in python are:

| Data Type      | Constructor |
 ----------- | ----------- 
| Integer      | int()       |
| Float   | float()        |
| String   | str()        |
| List   | list()        |
| Tuple   | tuple()        |
| Dictionary   | dict()        |
| Set   | set()        |


Example:
```
# Integer
a = 10

# Float
b= 25.56

# String
c="Hello World"

# List
d=[1,2,3,4,5]

# Tuple
e=(12,56)

# Dictionary
f={"India":1, "France":2}

# Set
g={1,2,3,4}

```

## Extracting the type of a variable in Python.

Let's start discussing both the methods in detail

## Using the type() method

Python has a built-in `type()` method , which gives the class type of the variable as an output.

The `type()` method takes in one argument i.e., the variable whose data type is to be determined, and it outputs the class type of the argument.

```
a = 10
b= 25.56
c="Hello World"
d=[1,2,3,4,5]
e=(12,56)
f={"India":1, "France":2}
g={1,2,3,4}

print("The Type of Variable is: ", type(a))
print("The Type of Variable is: ", type(b))
print("The Type of Variable is: ", type(c))
print("The Type of Variable is: ", type(d))
print("The Type of Variable is: ", type(e))
print("The Type of Variable is: ", type(f))
print("The Type of Variable is: ", type(g))
```

Output:
```
The Type of Variable is:  <class 'int'>
The Type of Variable is:  <class 'float'>
The Type of Variable is:  <class 'str'>
The Type of Variable is:  <class 'list'>
The Type of Variable is:  <class 'tuple'>
The Type of Variable is:  <class 'dict'>
The Type of Variable is:  <class 'set'>
```

We have seen the use of the `type()` method for all the data types. Now let’s hop onto the other method i.e. the `isinstance()` method.

## Using the isinstance() method

`isinstance()` is another in-built Python method which can be used to extract the data type of a variable in python.

The `isinstance()` method takes in two arguments, and returns a Boolean value , according to the condition that if the first argument is an instance of class type of the second argument.

Let’s define it by the help of a code:

```
a = 10
b= 25.56
c="Hello World"
d=[1,2,3,4,5]
e=(12,56)
f={"India":1, "France":2}
g={1,2,3,4}

print("The Variable Type is Integer: ", isinstance(a,int))
print("The Variable Type is String: ", isinstance(b,str))
print("The Variable Type is String: ", isinstance(c,str))
print("The Variable Type is List: ", isinstance(d,list))
print("The Variable Type is Set: ", isinstance(e,set))
print("The Variable Type is Dictionary: ", isinstance(f,dict))
print("The Variable Type is Float: ", isinstance(g,float))
```

Output:
```
The Variable Type is Integer:  True
The Variable Type is String:  False
The Variable Type is String:  True
The Variable Type is List:  True
The Variable Type is Set:  False
The Variable Type is Dictionary:  True
The Variable Type is Float:  False
```

## Difference between type() & isinstance() methods

Since both the methods are equally useful for getting the desired result, we can use either of the method but we should now look at some of the differences between both these methods.

```
class Parent:
    pass

class Child(Parent):
    pass

x1 = Parent()
print(type(x1))
x2 = Child()
print(type(x2))
```

Output:
```
<class '__main__.Parent'>
<class '__main__.Child'>
```

The `type()` returns a True value only if the **exact class type** matches but the `isinstance()` method return true even if the **superclass type** matches.

```
class Parent:
    pass

class Child(Parent):
    pass

x1 = Parent()

x2 = Child()

print(type(x1) is Child)

print(type(x1) is Parent)

print(isinstance(x2,Child))

print(isinstance(x2,Parent))
```

Output:
```
False
True
True
True
```

It is clearly visible from the above output that,  the `isinstance()` method return **True** if the type matched both the Base and Derived class but the `type()` only returns **True** if the type of the passed-on class type matches. 

Thus, we can conclude that :
We can use `type()` if we want to determine the exact type & 

`isinstance()` if we want to determine the type while considering inheritance.

## Conclusion

In this article, we discussed in detail about the two methods that can be used to extract the Data type of a variable in Python.

We first roughly looked at the different Data types in Python, then we discussed about the `type()` method and how can it be used.

Then we discussed about the `isinstance()` method and lastly we looked at the differences between the two methods when used for a **class object**.






