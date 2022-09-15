---
title: 'Iterate through a Python Dictionary key values using "for" loop'
description: "Various methods of iterating through a dictionary key values in Python"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Iterating Dictionary"
author: "dmohanty"
---

## Overview Of a Dictionary:

`Dictionaries` are considered to be one of the most important Data Structures in `Python`, reason being they can store limitless amount of information. 

The keys of a dictionary are always immutable, since they need to be kept `unique` throughout the dictionary.

In this article, we are going to dive deep into iterating through a dictionary for extracting data of that dictionary.

Simple example of a Dictionary:

```
sample_dict = {"India": 'Delhi', "USA”: 'Washington D.C', "Russia”: 'Moscow’}

```
where `keys` are India, USA, and Russia and the `values` being Delhi, Washington D.C and Moscow.

## Iterating through keys directly

Since **Dictionaries** are considered as mapping objects in **python**, Therefore, they already have access to the default ` __iter__` method which returns a iterator object that can iterate through all the objects of the structure. 

In case of Dictionaries, the `__iter__` method is set to be the keys of the dictionary. 

This implies that putting a dictionary into a for loop will by default iterate through its keys.  

```
for key in sample_dict:
     print(key)

```
OUTPUT:

```
India
USA
Russia
```
This is probably the simplest way to iterate through a dictionary. 

Now the question arises, how can we access the values using this method. 

Well, there is shortcut to achieve the values using this method and the shortcut being the **[]** operator. 

The **[]** operator allows us to iterate through the key and access their corresponding values.

```
for key in sample_dict:
     print(sample_dict[key])

```
OUTPUT:

```
Delhi
Washington D.C
Moscow
```
Thus, in this way we can get access to the keys and corresponding values of a dictionary directly by the help of Python’s `__iter__` method.

## Iterating using .keys() method

If there is a need to extract only the keys from a dictionary, then we can simply iterate through the keys by calling the `.keys()` method which gives us a dynamic view object of all the keys of that dictionary.

If we see:

```
 print(sample_dict.keys())
```

OUTPUT:
```
dict_keys (['India', 'USA', 'Russia'])
```
Here we get a dynamic view object of all the `keys` and we can easily iterate through the dynamic object to get access to the corresponding values.

```
for key in sample_dict.keys():
    	 print(key)

```
OUTPUT:
```
India
USA
Russia
```
As discussed earlier, we can access the corresponding values in the same way i.e by the help of the **[]** operator.

```
for key in sample_dict.keys():
     print(sample_dict[key])
```
OUTPUT:
```
Delhi
Washington D.C
Moscow
```
Thus, we got an idea about how to access the keys and corresponding values of a dictionary by the help of the `.keys()` method.

## Iterating using .values() method

Similar to the `.keys()` method, if there is a need to extract only the values of a dictionary then we can iterate through the values of a dictionary using the `.values()` method. 

Like `.keys()`, this method also gives us a dynamic view object of all the values of that dictionary. 
Like:

```
print(sample_dict.values())
```

OUTPUT:

```
dict_values(['Delhi', 'Washington D.C', 'Moscow'])
```

Here, we can see that this returns a dynamic object view of the values of the dictionary and we can easily iterate through this object to get access to the values of that dictionary using a **For** loop.

```
for value in sample_dict.values():
     print(value)

```
OUTPUT:

```
Delhi
Washington D.C
Moscow
```
In this case, extracting corresponding **keys** from `.values()` is a bit complicated, We have to iterate through the values list and then use the index of the current value in the values list to print the corresponding key from the list of keys.

```
keyList = list(sample_dict.keys())
valList = list(sample_dict.values())
for val in valList:
     print(keyList[valList.index(val)])

```
OUTPUT:
```
India
USA
Russia
```
At this time, this might seem to be a complicated, but Python also has an easier way of accessing both the values at the same time and easily playing around with them.

## Iterating using .items() method

When you’re a lazy programmer, then you always prefer to use both keys and values at the same time instead of using them individually. 

Thus, to ease the work of programmers, Python has the `.items()` method. 

This method can be used to access both the keys and values of a dictionary. 
Let’s see how,

```
print(sample_dict.items())
```
OUTPUT:
```
dict_items([('India', 'Delhi'), ('USA', 'Washington D.C'), ('Russia', 'Moscow')]) 
```
It returns a new dynamic view of the key-value pairs in the dictionary, and thus, we can iterate through this view object using the **For** loop to get access to all the key-value pairs of the dictionary.

```
 for keyval in sample_dict.items():
       print(keyval)

```
OUTPUT:
```
('India', 'Delhi')
('USA', 'Washington D.C')
('Russia', 'Moscow')
```
But here the question arises that this method returns a **tuple** of the key-value pair, then how to access them separately. 

Well, that’s pretty simple. We can simply use **tuple** unpacking to access the keys and corresponding values.

```
for key, val in sample_dict.items():
     	print(key,”:”, val)

```
OUTPUT:
```
India : Delhi
USA : Washington D.C
Russia : Moscow
```
**Unpacking** is done with the help of two variables, in this case: key & val to access the keys and values separately. 

In this method you will have more control over the contents of the dictionary and thus will make it more *readable* and *Pythonic*.

## Conclusion

In this article, we discussed the different methods on how to iterate through a dictionary using the **For** loop and how we can implement the different methods to refactor our code to an easy and understandable code. 