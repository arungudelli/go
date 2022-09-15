---
title: "5 Python methods to add New Keys to a Dictionary"
description: "Learn how to add new keys to an existing dictionary"
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "Add keys to Dictionary"
author: "dmohanty"
image: "images/featured/addNewKeysPythonDictionary.png"

---

Dictionaries have been a very important Data structure in python.

In this article we will discuss in detail about all the different methods that we can use in order to **add new keys onto our existing python dictionary**.

Dictionary is a collection of *data values*, that can hold data of different data types like a **map**.

Dictionary hold a key value pair as its elements.

Keys and values in a Dictionary is separated by a **colon**, whereas each pair is separated by a **comma**. 

Keys of a Dictionary are unique and are of *immutable* data types such as Strings & tuples.

Example of a dictionary:
```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}
```

## How to add new keys to the Python Dictionary?

From the above discussion we can have an overall idea of how a dictionary looks like.

Now let’s look at the methods. 

## Using the index notation method

The **index notation** method is the basic method that can be adopted in the case when you know the key and the corresponding value.

This method is similar to that of replacing an element in a list by an assigned index.

This method is used to add a new key value pair, by assigning a new value to a key.

In case the key doesn’t exist; a new key will be created and if the key already exists then the existing value will be overwritten by the assigned value.

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}

//Adding new keys
test_dict['swimming']=5
test_dict['archery']=6
test_dict['cricket']=9

print(test_dict)
```

Output:
```
{'cricket': 9, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

## Adding multiple keys at a time to a Python Dictionary

We say how to add a single key-value pair in the previous section, but is that method feasible for bigger input?

Probably No. So, we can add multiple key value pair to a dictionary using Python’s inbuilt `update()` method.

## Using the update() method

This method can take in any *iterable* sequence of **length two**.

For reducing the lines of code discussed in the previous method, we can also use this method by passing keys as arguments along with their corresponding values.

### By passing another dictionary as an argument

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}

new_dict = {'swimming': 5, 'archery': 6}
test_dict.update(new_dict)
print(test_dict)
```

Output:
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}

### By passing iterables sequences as an argument

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}

new_dict = (('swimming', 5), ('archery',6))
test_dict.update(new_dict)
print(test_dict)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

### By passing direct key and corresponding value as argument

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}

test_dict.update(swimming=5, archery=6)
print(test_dict)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

## Using the Merge & Update operator

`Merge` & `Update` operator has now been added to the core module of dict class but it is available only for **Python 3.9+** users.

`Merge` operator as the name suggests, merges the keys and values of both of the dictionaries into a new dictionary. The merge operator is accessed by the `|`(pipe) sign.

The `Update` operator adds the key-value pairs of the second dictionary to the first dictionary. Thus, it updates the existing dictionary by adding multiple key value pairs to the old ones. 

It can be accessed by `|=` sign.

Using the Merge(|) operator

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}
new_dict = {'swimming':5, 'archery':6}
result = test_dict | new_dict
print(result)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

Using the Update (|=) operator

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}
new_dict = {'swimming':5, 'archery':6}
test_dict |= new_dict
print(test_dict)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

Now as we have discussed about all the major methods that we can use in order to add new keys to a dictionary, it’s time that we discuss about some of the **deprecated** method as a general information.

## Using the `__setitem__` method

This method is considered as an internal command of python but is deprecated due to its **very poor computational time** and runtime performance.

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}
test_dict.__setitem__('swimming', 5)
print(test_dict)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5}
```

## Using the * operator

The `*` operator is used to merge the old dictionary with the new key value pairs to a new dictionary.

```
test_dict = {'cricket':1, 'football':2 , 'hockey':3 , 'wrestling':4}

new_dict= {**test_dict,**{'swimming':5 , 'archery':6}}
print(new_dict)
```

Output:
```
{'cricket': 1, 'football': 2, 'hockey': 3, 'wrestling': 4, 'swimming': 5, 'archery': 6}
```

Yahoo ! After discussing about all the different methods consisting of both working and deprecated methods, we are now ready to add this functionality onto our code.

## Conclusion

We first added the key-value pair using index notation method. 

Then, we discussed about the `update()` method to add multiple key-value pairs to a dictionary. 

We then probed into the `Merge` and `Update` operators available from **Python versions 3.9+**.

Lastly, we looked at the deprecated methods as a general information about python.