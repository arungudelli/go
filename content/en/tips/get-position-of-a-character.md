---
title: "Get Position of a Character"
description: "How to get position of a character in a string in python"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Get position of a character"
author: "dmohanty"
---

Strings are an important data type in python and there are a lot of use cases where we might require to fetch or extract the position of a character inside of a string. 

How can solve this issue using Python ?

In this article, we will tackle all the different methods that can be used in order to find the position of a character from a string. 

## Strings in Python

Strings are the data types in python that are surrounded by single *quotations* or double *quotations* and can be assigned to a variable. 

Example 
```
sample_text = “Welcome to Python”
```

## Methods to get position of a character in python

Let’s dive deeper into the methods by the help of which we can achieve our desired result.

### Using for loop

The mighty and powerful `for` loop is back again at action in order to solve our problems.

This is the **beginner** method and most likely to be used by the novice coders. 

You must be familiar with the fact that strings act the same ways as that of the lists and thus can be iterated through by the help of the `for` loop.

```
sample_text = "Welcome to Python"
char ="y"
position = 0

for i in range(0,len(sample_text)):
    if sample_text[i] == char:
        position = i + 1
        break

print(position)
```

Output:
```
13 
```
Thus, we can clearly verify that we have got the desired output. 

But as stated prior, this is a **novice** method of solving this problem.

### Using the find() method

Since, we are programming in python, we must be pretty aware about the fact that there are a lot of **inbuilt** functions that can simplify the complex tasks.

For this problem also we have a **inbuilt** python method i.e. the `find()` method.

The `find()` method takes in a *parameter* i.e. the character which is to be searched and returns an *integer* value which  is the position of the character and returns **–1** if the character is not present.

```
sample_text = "Welcome to Python"
char ="y"
position = sample_text.find(char)
print(position)
```

Output:
```
12
```

Here we see that for the same searched word we get two different answers, this is because the find method starts with an initial index counting of 0 while the for loop starts with an initial index counting of 1.

### Using the index() method

Yet this is another **inbuilt** method in python that functions the exact same way as that of the `find() `function but has only one difference i.e. the `index()` method raises a ValueError if the character is not found.

```
sample_text = "Welcome to Python"
char ="y"
try:
    position = sample_text.index(char)
    print(position)
except ValueError as e:
    print("Character Not Found")
```

Output:
```
12
```

This method works exactly the same way, so it then comes to a choice of using either of the methods.

## Conclusion

In this article, we briefly discussed about methods by the help of which we can get the position of a character in a string. 

Firstly we discussed about the **generic** programming method, followed by two inbuilt python methods `index()` and `find()`.

Thus we complete another important use case of the strings in python.

