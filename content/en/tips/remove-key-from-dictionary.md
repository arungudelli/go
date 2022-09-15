---
title: "Remove a key from a Python dictionary"
description: "Different methods by which we can remove a key from a Python dictionary in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Remove a key from a dictionary"
author: "dmohanty"
---

## Introduction

_Dictionaries_ usage in recent programming languages have increased multifold and therefore having prior knowledge about shortcut methods to play around with the dictionary gives us an advantage.

In this article, we will discuss in brief about different methods to achieve a simple task i.e., to remove a key from a python dictionary and it has a lot of use cases while writing complex logic in CRUD programs.

What we exactly want to achieve is that:

```
sample_dict: {“India”: 50, “USA”: 20, ”UK”: 30, “Australia”': 40}
edited_dict: {“India”: 50, “USA”: 20, “Australia”': 40}

```

## Using for loop to remove a key from the dictionary

Starting off with a very basic and beginner method.

Using the _iteration and elimination_ method works on almost any iterables in python.

We can easily look out for a desired key by iterating through the dictionary and then checking for the matching key inside of the dictionary else adding the other key value pairs to a new defined dictionary.

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
new_dict = {}
for k, v in sample_dict.items():
    if k != 'UK':
        new_dict[k] = v
print(new_dict)

```

Output:

```
{'India': 50, 'USA': 20, 'Australia': 40}

```

This _naïve_ method is very much useful for the beginner coders in python as this can help them in strengthening their coding skills in iterables and the different operations that we can perform with looping in iterables.

Now let’s look at a slightly higher conceptual method.

## Using del keyword

Using the `del` keyword along with the key to be deleted is one of the most common methods to achieve the desired result.

The `del` keyword is inbuilt inside of python and therefore if a valid key is not provided then, it raises an **KeyError** exception which has to be handles manually.

Let’s now demonstrate the code implementation:

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
del sample_dict['UK']
print(sample_dict)

```

Output:

```
{'India': 50, 'USA': 20, 'Australia': 40}

```

The desired result is achieved, we successfully deleted a key from the dictionary. But in case we give a _invalid key_ inside of the `del` keyword.

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
del sample_dict["London"]
print(sample_dict)

```

Output:

```
Traceback (most recent call last):
File "<string>", line 5, in <module>
KeyError: 'London'

```

As known, the method raises a **KeyError** and thus we have to handle this manually using a _try except_ block.

Now let’s check out the second method.

## Using pop() method

`pop()` method being a better enhancement than the `del` keyword is most preferably to be used in this kind of operation because this method not only handles the **KeyError** pair but also returns the value of the key that is deleted.

This performs a simple delete operation on the dictionary by linearly searching for the key but with appropriate mechanism and all error cases handled.

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
value = sample_dict.pop('UK', 'No Key found')
print(sample_dict)
print(value)

```

Output:

```
{'India': 50, 'USA': 20, 'Australia': 40}
30

```

Now, if we pass an invalid key to the function, it will not raise an error, instead it will our second parameter to the function i.e., _No Key found_ as the error message.

Let’s see this out:

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
value = sample_dict.pop('Delhi', 'No Key found')
print(sample_dict)
print(value)

```

Output:

```
{'India': 50, 'USA': 20, 'UK': 30, 'Australia': 40}
No Key found

```

As expected, the code didn’t break and instead it outputs an error message that can be changed according to the user by passing as a parameter to the `pop` function.

## Using dictionary comprehension to remove a key

As said at first, dictionary in python is a very _flexible_ data type and for that reason itself, we can use the dictionary comprehension method to create a new dictionary dynamically which contains the copy of the original dictionary, only without the key we wanted to remove.

Still confused? Let’s check its implementation.

```
sample_dict = {"India":50,"USA":20,"UK":30,"Australia":40}
new_dict = {x: sample_dict[x] for x in sample_dict if x != 'UK'}
print(new_dict)

```

Output:

```
{'India': 50, 'USA': 20, 'Australia': 40}

```

As expected, we were able to get the desired result but the only drawback of this method is that it creates a new dictionary which in turn uses more memory for storage.

Other than that, this is also a very good method for achieving the desired output.

## Conclusion

As we look to conclude this article, in this we discussed about a lot of methods by which we remove a key from python dictionary, starting from pure beginner method to a somewhat advanced level method.

But out of all the methods that we have discussed here, it is _very much appropriate_ to use the `pop()` method to achieve the result.
