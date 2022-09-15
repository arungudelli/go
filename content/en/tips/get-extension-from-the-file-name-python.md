---
title: "How extract/get extension from the file name in Python"
description: "Different methods by which we can extract extension from file name using Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
author: "dmohanty"
---

## Introduction

Every operating system, be it windows or macOS, uses a certain group of letters as suffix to specify the file name of the computer file.

According to the file extension only, the operating system is notified to perform the desired usage on the file.

In case we are using a **remote file** somewhere in a big codebase, where we don’t know the file extension of the generated file, in that case we are required to extract the extension from the file name using Python and then perform the required action.

## Using `os.path()` method

File Path manipulation is enhanced by the usage of the `os.path()` method in python.

This module completely handles the receiving, opening, saving and opening of data from file paths by itself.

So, in order to extract the file extension from the file name we can use the `splittext()` function.

The `os.path.splitext()` function returns a tuple with two items: the file extension and the path with the name of the file.

Let’s see its implementation

```python
import os
path = 'D:/Python Shiksha/sample.py'
result = os.path.splitext(path)

print(result[1])

```

Output:

```
.py

```

Easy and compact to use module and as we can see that it extracts both the file path as well as the extension name, which can be helpful in achieving some particular result.

## Using `pathlib.Path()` function

`Pathlib` is one of the most used python modules when it comes to playing around with the file paths.

By passing the filename as a string parameter to the `pathlib.Path()` function, we can create a new `Path()` object which has three values to be accessed.

**Parent** attribute can be used to get the name of the master folder,

**Name** attribute can be used to get the file path name and

**Suffix** attribute can be used to get the file extension, which we can use in order to achieve our desired output.

Let’s check its implementation

```python
import pathlib
path = pathlib.Path('D:\Python Shiksha\sample.py')
print(path.suffix)

```

Output:

```
.py

```

`Pathlib` being a very powerful module with a lots of methods for playing around and performing numerous tasks on the file path, and thus this simple task of getting extension from the file name can be easily achieved.

## Conclusion

As we come to the end of this article, we have discussed two methods that uses two different modules and can be used to achieve a lot of at from the given file path and thus we can extract the extension name easily from the file path in Python.
