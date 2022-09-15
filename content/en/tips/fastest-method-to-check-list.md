---
title: "Fastest way to check if a value exists in a list"
description: "Comparing different methods to check for the fastest method"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Fastest method to check if value exists"
author: "dmohanty"
---

Sometime or other while coding, we surely require to assure ourselves that the value we are searching exists in a list or not in order to continue our code.

**Lists** being an important Data structure in Python are used in almost every field where python is used. 

Thus checking for a value being an important use case , let’s start exploring about the methods to check for a value inside a list and which method is the fastest among them, that can help us achieve our solution.

## Overview of Lists

List contains a group of elements of a different data type separated by commas, and enclosed inside square brackets ‘[ ]’. 
Example of a list:
```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
```

## Methods to check for a value

After having a brief idea of what a list is, now let’s start to discuss about the different methods that we can use.

### Using the for loop

The **novice method** of solving this problem that can be easily adopted by any beginner is by using the `for` loop. 
The mighty `for` loop helps us to iterate through the whole list and check if our desired value is present inside the list or not.

```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
required_word = "Bombay"
for i in sample_list:
    if (i==required_word):
        print("Value Found")
```
Output:
```
Value Found
```

Thus we can easily achieve our output , but is this the fastest and most optimized way of doing it ?

Maybe, we will discuss about it in the upcoming sections.

### Using the in operator

`in` operator is one of the **most valuable** operators in Python having a wide range of use case in almost every data structure in python.
It is one of the most useful and liked keyword in python.

In operator returns a *bool* as result depending upon if the value is present or not.

How can we check for the presence of a value using the powerful `in` operator ?

```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]

required_word = "Chennai"
if required_word in sample_list:
    print("Value Found")
else:
    print("Value Not Found")
```

Output:
```
Value Not Found
```

As expected , the value we are searching for is not present in our input. 

The code gets smaller but, Is this the fastest way ?

Maybe. Let’s try out the next method.

### Using the not in operator

In the previous section we discussed about the `in` operator, now we will be using the same operator with a bit of modification in order to improve the runtime performance.

We will use the `not in` operator to check if our desired word is present inside of the list.

This operator will return a *bool* value as well depending upon if the value is noy present inside the list or is it.

```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]

required_word = "Bombay"
if required_word not in sample_list:
    print("Value Not Found")
else:
    print("Value Found")
```
Output:
```
Value Found
```

The code is very much similar to that of the previous one. 

But the runtime performance is a little bit improved.

Wait until we compare all of them !

### Using sort() + bisect_left()

This method resembles to one of the **most conventional** methods in programming that is the *binary search*.

By using this method, we will first **sort** the list and thus we would not maintain the order of elements and the `bisect_left()` method returns the first occurrence of an element inside the list.

Let’s try this algo centric approach of solving our problem:

```
from bisect import bisect_left ,bisect

sample_list = ["Delhi","Bombay","Madras","Kolkata"]
required_word = "Madras"
sample_list.sort()
if bisect_left(sample_list, required_word)!=bisect(sample_list, required_word):
    print ("Value Found")
else:
    print("Value Not Found")
```
Output:
```
Value Found
```

Seems like a complicated code , but is the code is actually complex ?

We will find break down the answer in a few mins.

### Using lambda function

Instead of searching for an element inside a list, what if we can just filter all elements from inside the list except for the searched element.

But, how can we do that ?

Since , It’s Python that we are working with, inbuilt functions make our task even simpler.

We can use the inbuilt `filter()` method to achieve this result. But this method takes in a **lambda** function as an argument. 

This method returns a filter object which we will append inside an empty list and will get all the elements that are left out after filtering.

```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
required_word = "Madras"
unique_list = list(filter(lambda word: required_word in word, sample_list))
print(unique_list)
```
Output:
```
['Madras']
```

As discussed above, we wrapped the output inside an empty list and here we have the desired result.

But there is a problem.

This method is comparatively **slower** than all other methods because the `filter()` constructor is similar to that of a generator function and since, we are converting the result into a list at the end therefore, the runtime performance is degraded.

### Using count() method

Again since it’s Python, we have a bunch of inbuilt function which can simplify our code and problem quite efficiently.

In this section, we will see the usage of the `count()` method in order to tackle our problem.

`count()` method can be used to check if a particular value exists inside a list or not and if yes, it returns a sequence of the occurrences of the element.

If the value is greater than 0, it implies that the searched element exists inside of the list.

``` 
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
required_word = "Delhi"
if (sample_list.count(required_word)) > 0:
    print("Value Found")
else:
    print("Value Not Found")
```
Output:
```
Value Found
```

Optimal solution ? Can be since it uses inbuilt function.

A little more wait !

### Using the any() method

As we enter the last method of this article, we will have a look over another inbuilt function that can help us achieve the desired solution.
`any()` method acts like a helper function which would check if the searched element has occurred at least once inside the list and returns a *Boolean* value accordingly.

```
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
required_word = "Calcutta"
if (any(word in required_word for word in sample_list)) > 0:
    print("Value Found")
else:
    print("Value Not Found")
```
Output:
```
Value Not Found
```

With this method we complete all the methods that can be used to check for a value inside of a list.

In the next section we will discuss the most awaited part, the title itself.

## Which of the above is the  fastest method ?

For calculating the time taken by each of the above methods, we will take the help of **timeit** module.

The **timeit** module is an inbuilt class in python which has a method called `timeit()` and the method takes in 4 parameters namely *setup*, *stmt* , *timer* and *number*.

Let’s then calculate and disclose the suspense:

```
import timeit

code_starter = """
from bisect import bisect_left ,bisect

required_word = "Bombay"
sample_list = ["Delhi","Bombay","Madras","Kolkata"]
"""

novice_method = """
for i in sample_list:
    if (i==required_word):
        # print("Value Found")
        pass
"""

in_method = """
if required_word in sample_list:
    # print("Value Found")
    pass
else:
    # print("Value Not Found")
    pass

"""

notin_method = """
if required_word not in sample_list:
    # print("Value Not Found")
    pass
else:
    # print("Value Found")
    pass
"""

sort_method = """
sample_list.sort()
if bisect_left(sample_list, required_word)!=bisect(sample_list, required_word):
    # print ("Value Found")
    pass
else:
    # print("Value Not Found")
    pass
"""
  
lambda_method = """
unique_list = list(filter(lambda word: required_word in word, sample_list))
# print(unique_list)
pass
"""

count_method = """
if (sample_list.count(required_word)) > 0:
    # print("Value Found")
    pass
else:
    # print("Value Not Found")
    pass
"""

any_method = """
if (any(word in required_word for word in sample_list)) > 0:
    # print("Value Found")
    pass
else:
    # print("Value Not Found")
    pass
"""

print('Time of Code using for loop: ', timeit.timeit(setup = code_starter , stmt= novice_method, number= 10000000))
print('Time of Code using in operator: ', timeit.timeit(setup = code_starter , stmt= in_method, number= 10000000))
print('Time of Code using the not in operator: ', timeit.timeit(setup = code_starter , stmt= notin_method, number= 10000000))
print('Time of Code Using sort + bisect: ', timeit.timeit(setup = code_starter , stmt= sort_method, number= 10000000))
print('Time of Code using lambda function: ', timeit.timeit(setup = code_starter , stmt= lambda_method, number= 10000000))
print('Time of Code using count function: ', timeit.timeit(setup = code_starter , stmt= count_method, number= 10000000))
print('Time of Code using any function: ', timeit.timeit(setup = code_starter , stmt= any_method, number= 10000000))
```
Output:
```
Time of Code using for loop:  1.0890936
Time of Code using in operator:  0.29121489999999994
Time of Code using the not in operator:  0.28329629999999995
Time of Code Using sort + bisect:  2.2233091
Time of Code using lambda function:  6.141415800000001
Time of Code using count function:  0.7794974999999997
Time of Code using any function:  8.35378860000128
```

Yayy! We have a Winner ! 

`Not in` operator stands out to be the fastest among all of them.

But while coding , we can also consider using the mighty, flexible `in` operator since both the methods have a difference of *1 millisecond*. 

## Conclusion

As we near the completion of this article, the conclusion of this would be that, we can use both `in` and `not in` operators but it would be a foolish way if we use the **lambda** function or the `any()` method since both of them take very long for their completion.

In this article, we first discussed about the various methods of checking for a value inside of a list and then we saw how to determine the fastest method.











