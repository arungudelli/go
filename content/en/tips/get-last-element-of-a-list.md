---
title: "Get the last element of a list"
description: "Different methods by which we can get the last element of a list using Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Get the last element of a list"
author: "dmohanty"
---

## Introduction

Lists, or arrays are again one of the most used data types in the programming world.

Be it developing algorithms, or storing and using series of data, we use lists.

But there are cases where we want to obtain the last element of the list.

It would simple doing _list[length -1]_ but in case of larger programs where we don’t know the length of the list, it would not be easy for us to obtain the last element.

## Using negative indexing

As I have mentioned at he starting that we can simply get the last element by doing _list[len-1]_ but if you are familiar with coding practices, you might me knowing that from the end of a list / array the concept of negative index is used.

This implies that `list[len-1] = list[-1]`, this means that we can simply **negative indexing** in order to get the last element of the list.

```
sample_list = [1,8,9,3,4,5,7]
print(sample_list[-1])

```

Output:

```
7

```

As expected, we were able to obtain the last element of the list using negative indexing.

Now let’s look at our second method.

## Using list slicing

List slicing has always been coder’s favourite method to solve a problem quite efficiently.

We can easily perform list slicing by the help of the slicing operator i.e. **colon(:)**. We just need to specify the starting and ending index it slices the list within that range.

Let’s have a look.

```
sample_list = [1,8,9,3,4,5,6]
last = sample_list[-1:][0]
print(last)

```

Output:

```
6

```

As we can see that the slicing in the above code only returns the last element and slices the rest of the list and thus, we can easily tap onto the first element of the array obtained to get our desired output.

Now let’s have a look on our third method.

## Reverse iterating a list

One of the most beginner friendly method or approach would be reverse iterating the whole list and then printing the first element to get the last element of the original list.

Let’s try this method out in the code:

```
sample_list = [1, 4, 5, 6, 3, 5]
sample_list.reverse()
print(sample_list[0])

```

Output:

```
5

```

As we can see that we were able to get the last element by using the traversing the list in reverse order and fetching the first element of the reversed list.

Now let’s checkout another cool single line function that can achieve us the exact same result with _lesser time complexity_.

## Using list.pop()

`pop()` is a very common and famous function in almost every language that can be used to delete the last element of an array, list etc.

The only **disadvantage** of this method i.e., deletion of the last element as well and thus this isn’t a recommended method if you want to retain the original list without the contents affected.

But this method will do the job for us as of not, let’s see it in work:

```
sample_list = [1, 4, 5, 6, 3, 5]
print(sample_list.pop())

```

Output:

```
5

```

We can see that we were able to extract the last element of the list but now the contents of our list are changed, and our new list looks like `[1, 4, 5, 6, 3]`.

Now let’s have a look at our last method.

## Using reversed () with a combination of next()

This coupling of two methods is again counted as one of the naïve methods of doing the job and thus let’s discuss it.

`reversed()` is used to reverse the list and the `next()` method is used to access the next element inside of the list and in our case the index 0 i.e., the last element of the original array.

Let’s see them in action in code:

```
sample_list = [1, 4, 5, 6, 3, 5]
print(next(reversed(sample_list)))

```

Thus, we were able to get the desirable output and thus the function works perfectly fine achieving the output.

## Conclusion

Now, we have come to the end of this article, in this we discussed a lot of methods for getting the list of methods, along with the category and proper use cases inside of code.

Out of all the above methods discussed _negative indexing_ tend to be the most appropriate method for getting the last element, since it doesn’t modify the contents of the list neither does it change the order of the contents inside of the list.
