---
title: "3 ways to get the number of elements inside a Python list"
description: "Different methods and functions to extract the number of elements inside a list"
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "Get number of elements in a list"
author: "dmohanty"
---

In this Python article, we will discuss about the different methods around which we can count the number of elements inside of a Python list containing strings, lists and numbers.

## What is a List ?

Python provides a very wide range of compound and simple Data structures and List is one the most flexible and popular Data structures in Python.

List contains a group of elements of a different data type *separated* by **commas**, and *enclosed* inside square brackets **[ ]**. 

Example of a list:

```
sample_list = [ 'apples','oranges','grapes','mangoes','bananas']
```

## Extracting number of elements from a Python list

After we have an overview of what a list looks like, let us dive deep into methods

## Using the for loop

The simplest method that can be used to extract the number of elements inside a Pyton list is by using the `for` loop. 

We can use the for loop to iterate through the list using a `for` loop and can use a counter to keep track of the number of the elements inside the list by increasing the counter by 1 on each iteration.

```
sample_list = [ 'apples','oranges','grapes','mangoes','bananas']
count=0
for i in sample_list:
    count+=1
print(count)
```

Output:
```
5
```

## Using the len() method

Python has an inbuilt `len()` function for calculating the number of elements inside a list.

This function takes in the string whose length is to be calculated as the argument and this function returns an integer value as the output i.e., the **length** of the string.

```
sample_list = [ 'apples','oranges','grapes','mangoes','bananas']
length = len(sample_list)
print(length)
```

Output:
```
5
```

The functionality of the `len()` function depends upon the internal `__len__()` constructor of the python.

When a object is passed to the `len()` function as an argument, the internal `__len__()` function is called and the number elements inside the data structure is counted.

Surprisingly, this `len()` functions works on every *sequential data structure* of Python, be it list or dictionary or tuple or string, this method got all of them covered.

## Using the `list.__len__()` method

In the previous section, we saw that `__len__()` is the internal function that is called upon using `len()` but we can also use the Python internal method **directly** to extract the number of elements in a list.

```
sample_list = [ 'apples','oranges','grapes','mangoes','bananas']
length = sample_list.__len__()
print(length)
```

Output:
```
5
```

Although, we can use the parent function i.e., `__len__()` but it is recommended not to use it because of the **computational time**.

Instead of `__len__()`, we can use `len()` as a preferable choice.

## Diving into List of Lists

As the name of the article suggests, we need to extract the number of elements from a list, but in case we have a list containing lists inside it, then if we go onto using our `len()` method, then;

```
sample_list = [ ['apples','oranges'],'grapes',['mangoes','bananas'],['peaches' , 'blueberries']]
length = sample_list.__len__()
print(length)
```

Output:
```
4
```

If we closely evaluate the output and the *input string*, then we can clearly see that our `len()` method considers a child list as one element, but according to our target we shouldn’t consider a list as an element.

Then is the `len()` method broken ? 

**No**, it isn’t. We have to use this method in a careful manner in order to achieve our result.

## Using for loop

We can use the `for` loop for extracting the total number of elements inside the parent list. 

We can simply iterate through the parent list and can then use a counter that would be increased by the length of the child list after every iteration.

But this method has an **disadvantage**, that we will discussed after evaluating our result,

```
sample_list = [ ['apples','oranges'],'grapes',['mangoes','bananas'],['peaches' , 'blueberries']]
count = 0
for i in sample_list:
    count+=len(i)
print(count)
```

Output:
```
12
```

If we carefully look at our input and count the number of individual elements that are present, we can conclude that there are a total of **7** individual elements inside our sample_list. 

But the python interpreter gives the output as **12**.

Why did this happen ?

If you scroll back to the section where we had discussed about the `len()` method, then you can figure out that the `len()` method is applicable to any *sequential data structure* in python.

And if we check in our output then we can see that *grapes* is not inside of a child list and is the element of the parent list, but since we are adding length of each element onto our counter, Therefore, `len()` counts the length of string individually and not the whole string as one element.

That is why, we get 12 as output. Here also `len()` broke !

Thus, it is always advisable to use the `for` loop for lists inside list systems only and only when we are sure that the parent list **doesn’t contain any string as its own element**, this could lead the interpreter to a different answer rather than our desired answer.

Correct way of using the for loop:

```
sample_list = [['oranges','apples'],[12,14],['one',1]]

count = 0
for i in sample_list:
    count+=len(i)
print(count)
```

Output:
```
6
```

## Using the list comprehension method

Instead of using a for loop, a counter, then adding the length of each element to our counter and then achieving our final result. Too much lines of code ?

We can achieve the exact same result in just *one line of code*.

Want to know how ?

By using the list comprehension method, let us see how –

```
sample_list = [['oranges','apples'],[12,14],['one',1]]
length = sum([len(i) for i in sample_list])
print(length)
```

Output:
```
6
```

See, we have reduced the excess lines of code, improving runtime performance.

But still, the mess-up that was created in the previous section is not solved yet.

That is, how to consider strings as an individual element if it is present in the parent list and not count it as a separate sequence.

We will avoid this mess-up by the same way as discussed in the following section.

## Diving into Nested Lists

Nested lists refer to a situation like list inside a list inside a list and so on.

Example of a Nested List:

```
sample_list = [['oranges','apples'],[12,14,['fruits',['peaches' , 'blueberries']]],['one',1,['mangoes','bananas']]]
```

Oops. This looks so complicated; how can we get the total number of elements from this kind of mess ?

For that again we have to take the help of a for loop along with some other backup methods & techniques which would help us to achieve our desired result.

In order to extract the total number of elements from a nested list system, 

- first we have to iterate through the parent list and check if our current element  is a list or not, 

- if it is a list then we have to gain call the user defined function recursively in order to calculate the length of the child list and 

- if the current element is not a list, then we can simply count the element as a whole (including strings) and can achieve the desired result.

```
def countElementInANestedList(item):
    count = 0
    if isinstance(item, list):
        for i in item:
            count += countElementInANestedList(i)
    else:
        count += 1
    return count

sample_list = [['oranges','apples'],[12,14,['fruits',['peaches' , 'blueberries']]],['one',1,['mangoes','bananas']]]

result = countElementInANestedList(sample_list)
print(result)
```

Output:
```
11
```

Yahoo ! We cracked the ultimate solution. 

The built-in `isinstance()` function that we used checks if the first argument is an **instance** of the class given as the second argument.

In this case, we check if the current element is a list or not.

If we consider this to be the ultimate solution, then can it solve our mess-up of the previous section ?

**Yes**, it can. For a lists in a, list system, in a similar manner we can call the *user-defined* function **recursively** in order to solve our problem.

Like,

```
def countElementInListsInAList(item):
    count = 0
    if isinstance(item, list):
        for i in item:
            count += countElementInListsInAList(i)
    else:
        count += 1
    return count

sample_list = [ ['apples','oranges'],'grapes',['mangoes','bananas'],['peaches' , 'blueberries']]

result = countElementInListsInAList(sample_list)
print(result)
```

Output:
```
7
```

Yeppie ! We have successfully achieved our results in all the possible methods. 

## Conclusion

As we near the end of this article, we can conclude that we have discussed various methods by the help of which we can extract the number of elements inside of a list, Lists in a list and a Nested List.

We have learnt that `len()` is the most preferable go-to method while working with simple lists and **recursive functions** are a good option to work with when we are dealing with compound lists or a mixture of lists.









