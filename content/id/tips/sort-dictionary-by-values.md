---
title: "5 ways to sort a dictionary by value in Python"
description: "How can we Sort a Dictionary by values using different methods ?"
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "Sort dictionary by value"
author: "dmohanty"
---

With the growing community of Python, the newer versions of Python have made programming simpler and easier.

Like prior to **Python 3.7**, the insertion of items into the dictionary were unordered but the later version of python made the tedious work simpler by ordering the items according to their insertion in a dictionary.

In this article we will be discussing how we can sort a dictionary by values.

## Overview of a Dictionary

In Python, dictionary doesn't have any pre-defined to sort its items.

Hence, before sorting a dictionary, we have to convert dictionary to another data structure such as list.

As we know, that the `.items()` method of the dictionary returns a list of **tuples** and each tuple contains one **key-value pair**.

```
sample_dict={"India":'Delhi', "England": ‘London’, "Australia": 'Canberra', "Russia": 'Moscow',}

print(list(sample_dict.items()))
```
Output:
```
[('India', 'Delhi'), (‘England’,’London’), ('Australia', 'Canberra'), ('Russia', 'Moscow')]
```

## Different Methods of sorting a Python dictionary

Let's dive in deeper onto discussing the various methods of sorting a Dictionary by value.

## Sort using Bubble sort

After getting the above output, we have the freedom that the items can now be rearranged since they are inside a list and thus, we can use the **bubble sort** method to arrange the tuples.

```
sample_dict={"India":'Delhi', "England": ‘London’, "Australia": 'Canberra', "Russia": 'Moscow',}
sample_list=list(sample_dict.items())
length = len(sample_list)
for i in range(length-1):
    for j in range(i+1,length):
        if sample_list[i][1]>sample_list[j][1]:
            t=sample_list[i]
            sample_list[i]=sample_list[j]
            sample_list[j]=t
    result=dict(sample_list)
print(result)
```

Output:
```
{'Australia': 'Canberra', 'India': 'Delhi', 'England': 'London', 'Russia': 'Moscow'}
```
From the output we can clearly see that our *sample_dict* is now sorted according to the values in alphabetical order. 

But the question that arises is that, Is this method feasible ? 

Answer is **No**. Then, we can use the `sorted()` method.

## Sort using sorted() method

We can use Python’s inbuilt `sorted()` method to sort our dictionaries. 

But by default, `sorted(`) sorts the dictionary, for enabling the method to sort by values we need pass one more argument i.e., key. 

The `key` is a **function** that's called on each pair before the values are compared for sorting. 

The `get()` method on dictionary objects returns the value of for the keys of a dictionary.

```
sample_dict={"India":'Delhi', "England": ‘London’, "Australia": 'Canberra', "Russia": 'Moscow',}
final_dict = dict()
final_keys = sorted(sample_dict, key=sample_dict.get)

for k in final_keys:
    final_dict[k] = sample_dict[k]

print(final_dict)
```

Output:
```
{'Australia': 'Canberra', 'India': 'Delhi', 'England': 'London', 'Russia': 'Moscow'}
```
Here the function `sorted(sample_dict, key=sample_dict.get)` returns a list of keys whose values are sorted in order.

Using python’s inbuilt method `sorted()` has reduced the code to a great extent and improved the performance but this `sorted()` method can be combined with another method called `itemgetter()` to further improve the performance.

## Sort using the sorted function and operator module

The **operator** module consists of the `itemgetter()` function which returns a callable object that returns an item from an object.

Testing the `itemgetter(`) function:

```
sample_dict={"India":'Delhi', "England": 'London', "Australia": 'Canberra', "Russia": 'Moscow'}
getItem = operator.itemgetter('India')
print(getItem(sample_dict))
```
Output:
```
Delhi
```

Here the `itemgetter()` returns a callable object that returns the value of the dictionary with corresponding key as *India*.

As we know that the `.items()` returns a list of tuples, in a similar way, the `itemgetter()` method sorts the **list of tuples** and after the list is sorted, we can create a dictionary out of it.

```
import operator

sample_dict={"India":'Delhi', "England": 'London', "Australia": 'Canberra', "Russia": 'Moscow'}
final_list = sorted(sample_dict.items(), key=operator.itemgetter(1))
result = dict([(k,v) for k, v in final_list])
print(result)
```

Output:
```
{'Australia': 'Canberra', 'India': 'Delhi', 'England': 'London', 'Russia': 'Moscow'}
```

With less lines of code and improved runtime performance, we can easily sort the dictionary. 

But since we ate using the key function, there is another method that we can use other than `itemgetter()`, that is `lambda` that is discussed in the next section.

## Sort using lambda function

Don’t want to import a module explicitly for using its method, what if there is an alternative for the same with the same computation time and better runtime performance.

Yes, you heard it right we can use `lambda` functions inside the `key` function to solve our purpose of sorting a dictionary.

`Lambda` functions are anonymous, nameless functions in python and by using these functions we can override the use of operator modules and `itemgetter()` method.

```
sample_dict={"India":'Delhi', "England": 'London', "Australia": 'Canberra', "Russia": 'Moscow'}
final_list = sorted(sample_dict.items(), key=lambda item: item[1])
result = dict([(k,v) for k, v in final_list])
print(result)
```

Output:
```
{'Australia': 'Canberra', 'India': 'Delhi', 'England': 'London', 'Russia': 'Moscow'}
```

Even lesser lines of code with equal computational time. But we have an issue ?

All the above discussed methods are applicable only to **Python 3.7+** only. What about users having lower python versions.

We also have a crack for the users of lower versions of python.

## Using OrderedDict 

Dictionaries have been buffed after **Python 3.7** but in versions *prior* to 3.7, Dictionaries were not sorted according to order of insertion.

For achieving the same, we have to use the OrderedDict library from the `collections` module.

```
import operator
from collections import OrderedDict

sample_dict={"India":'Delhi', "England": 'London', "Australia": 'Canberra', "Russia": 'Moscow'}
final_list = sorted(sample_dict.items(), key=operator.itemgetter(1))

result = OrderedDict()
for k, v in final_list:
    result[k] = v

print(result)
```

Output:
```
OrderedDict([('Australia', 'Canberra'), ('India', 'Delhi'), ('England', 'London'), ('Russia', 'Moscow')])
```

## Conclusion

In this article we discussed in detail about all the possible methods of sorting a dictionary by values in python.

We also had a overview about the individual computation time of each method and which method is preferable for achieving the purpose. 

At the end, we discussed about the methods that lower python version users need to adopt for the same. 



