---
title: "Check if a Key exists in a Python Dictionary"
description: "How to check if a key exists in a Python Dictionary by using various methods and Functions."
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "Check Dictionary Key existence"
author: "dmohanty"
---

## Introduction

Dictionaries are the Data structures of Python which consist of  key-value pairs which can be used to store data. 

Like other data structures in python, Dictionaries/Map also contains indexes called **Keys**. 

Keys can be both numeric as well as string but it can’t be of the form of a **mutable sequence** or object. 

In this article we will briefly discuss the various methods to **check if a key exists in a Python Dictionary** and which method is more reliable.

For that, we will use a reference dictionary i.e.:

```
sample_dict = {'oranges': 1, 'mango': 2, 'cherry': 2}
```

## Checking using "in" operator

This is the simplest way of checking if a key exists in a dictionary. 

The `in` operator is special kind of python operator that is used to check if a value/element exists in a sequence. 

The operator returns a `Boolean` value depending on whether a key exists or not.

```
key_val = "oranges" # Key to be searched 
if key_val in sample_dict:
    print("Key Present")
else:
    print("Key not present")

key = "apples" # Key to be searched
if key in sample_dict:
    print("Key Present")
else:
    print("Key not present")

```
OUTPUT:
```
Key Present
Key not present

```
This is the most preferable way of achieving the desired result. 

This method takes the help of python’s default method, `__contains()__` , which we will discuss in the coming sections of this article, to check if a key exists `in` a dictionary.

## Using the .keys() method

Python in-built `.keys()` method can also be used to check if a key exists in a dictionary. 

As we know that the `.keys()` method returns a **dynamic object/sequence** of all the keys of that dictionary.

```
print(sample_dict.keys())
```
OUTPUT:
```
dict_keys(['oranges', 'mango', 'cherry'])
```

We can now easily either loop through this sequence using a `for` loop or a better option would be using our supreme `in` operator.

```
key_val = "oranges" # Key to be searched 
if key_val in sample_dict.keys():
    print("Key Present")
else:
    print("Key not present")

key = "apples" # Key to be searched
if key in sample_dict.keys():
    print("Key Present")
else:
    print("Key not present")

```

OUTPUT:
```
Key Present
Key not present

```
## Using the __contains__() function (For Python 3.X+ users)

Python has a shortcut method to ease the work of programmers i.e., instead of manually searching for the key inside of a dictionary we can simply use the inbuilt `__contains__()` function.

`__contains__()` function takes the key to be searched as a parameter and returns a `Boolean` value according to the existence of the key.

This function works the exact same way as the `has_key()` function but the `__contains__()` function is available for the latest version of python i.e. Pythpn 3.X +.

```
key_val = "mango" # Key to be searched 
if sample_dict.__contains__(key_val):
    print("Key Present")
else:
    print("Key not present")

key = "banana" # Key to be searched
if sample_dict.__contains__(key):
    print("Key Present")
else:
    print("Key not present")

```

OUTPUT:
```
Key Present
Key not present

```

## Using has_key() function (For Python 2.X users)

We can simply use the inbuilt `has_key()` function which takes the key to be searched as a parameter and returns a `Boolean` value according to the existence of the key.

But this function is now deprecated and can only be used in Python 2.X versions

```
Key_val = 'oranges'
if sample_dict.has_key(key_val):
    print('Key Present')
else:
    print('Key not Present')

key = "apples" # Key to be searched
if sample_dict.has_key(key):
    print("Key Present")
else:
    print("Key not present")

```

OUTPUT:
```
Key Present
Key not present

```


## Using the get() method

Python’s `get()` method can be used to assure the existence of a key in a dictionary. 

The `get()` method accepts a key as a parameter and searches through the dictionary for that key and returns **None** if key is not present, else return the **value** corresponding to that key.  

The `get()` method works as follows:

```
key_val = "mango"
key = "banana"

print(sample_dict.get(key_val))
print(sample_dict.get(key))   

```

OUTPUT:

```
2
None

```
Thus, in practice it can used to solve our problems efficiently.

```
key_val = "mango" # Key to be searched 
if sample_dict.get(key_val) != None:
    print("Key Present")
else:
    print("Key not present")

key = "banana" # Key to be searched
if sample_dict.get(key) == None:
    print("Key not Present")
else:
    print("Key present")

```

OUTPUT:
```
Key Present
Key not Present

```

## Handling KeyError exception

There might be various methods to get the keys from the dictionary but in order to handle the **exception** of a non-existent key we can use the famous `try` and `except` clause to get rid of the **Key Error**.

```
try:
    sample_dict[key]
except KeyError as err:
    print('Key not present')

```
Although this is one of the fastest approaches but shouldn’t be preferred usually because they are triggered really quick but retrieving the code/logic is quite slow.

## Comparing the various methods

Now after learning all the various methods to evaluate the existence of a key in a Dictionary, now it's the time for us to compare the performance of all the methods which can help us find out the best method for coding efficiently.

```
import timeit

code_starter = """
key = 'oranges'
sample_dict = dict(oranges = 1 , mango = 2 , cherry = 2)
"""

method_1 = """
if key in sample_dict:
  # print('Key present')
  pass
else:
  # print('Key not present')
  pass 
"""

method_2 = """
if sample_dict.get(key):
  # print('Key present')
  pass
else:
  # print('Key not present')
  pass 
"""

method_3 = """
if sample_dict.__contains__(key):
  # print('Key present')
  pass
else:
  # print('Key not present')
  pass  
"""

method_4 = """
try:
  # sample_dict[key]
  pass
except KeyError as err:
  # print('Key not found')
  pass 
"""
  
method_5 = """
if key in sample_dict.keys():
  # print('Key found')
  pass
else:
  # print('Key not found')
  pass 
"""

print('Time of code_1: ', timeit.timeit(setup = code_starter , stmt= method_1, number= 10000000))
print('Time of code_2: ', timeit.timeit(setup = code_starter , stmt= method_2, number= 10000000))
print('Time of code_3: ', timeit.timeit(setup = code_starter , stmt= method_3, number= 10000000))
print('Time of code_4: ', timeit.timeit(setup = code_starter , stmt= method_4, number= 10000000))
print('Time of code_5: ', timeit.timeit(setup = code_starter , stmt= method_5, number= 10000000))

```

OUTPUT:
```
Time of code_1:  0.3363925999999964
Time of code_2:  0.5303875000000033
Time of code_3:  0.4667841999999993
Time of code_4:  0.16626540000000034
Time of code_5:  0.7169203999999993
```
From the above output, we can clearly see that method 4 i.e the `Handling keyError` is the fastest method based on time but again as we have discussed that `Handling KeyError` method has some **major drawbacks** and hence, shouldn't be used in practical. 

Ignoring method 4, the next fastest method based on execution time is method 1 i.e. using the `in` operator. 

Thus, we can easily conclude that the `in` operator method for evaluating existence of a key inside a dictionary is the most preferable and adopted method by programmers.

## Conclusion

In this article we briefly discussed about the various methods with the help of which we can check **if a key is present in a dictionary** or not and we also compared the performance of all the discussed methods and which method should be preferred which writing code.
