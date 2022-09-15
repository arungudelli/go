---
title: "4 Different ways to Copy a file in Python"
description: "Different methods by which we can copy a file using Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Copy a file"
author: "dmohanty"
---

## Introduction

Copying of files is a core operating system method that is suitable to be performed either manually or by using CLI.

But can we achieve this result by using python. **Yes we can**!

Three modules in python help us in achieving different operating system level tasks in both `Windows` as well as `Unix` and we will check the methods of this modules that help us copy a file in python.

The three modules are `shuilt`, `os` and `subprocess` which have almost same functionality with few modifications and enhancements at operating system level

We will discuss all their appropriate methods to achieve this task, although all the methods use similar kinds of keywords i.e., `copy` for `Windows` and `cp` for `Unix`.

## Using the `shutil` module

This inbuilt module in Python has various advanced methods for **copying a file using Python** but we will discuss the 2 most common methods for the same.

### Method 1: Using the `shutil.copyfile()` method

The `copyfile` method is a popular method of the `shutil` module that can be used to copy the content of a file into a new file.

The advantage of this method is that if a file exists inside of the new file destination, the contents are _overwritten_.

But in case the source file and destination file are same , then it raises an error.

This method takes in two parameters, one being the source file path and the other being the destination file and path along with a default parameter of `symlinks` that is set to `True` by default.

Let’s see this code in work:

```python
import shutil

shutil.copyfile('./test2/sample.txt', './test1/result.txt')

```

With this piece of code, contents in my **sample.txt** file was copied directly onto the **result.txt** file.

But we must take care of the path of the files specified, in that case we might run into an undesirable error.

One of the most useful feature of this method is its `symlink` parameter which is by default set to `True`, 

i.e., If the source specified is a symbolic link instead of a file then a new symbolic link is created.

### Method 2: Using the `shutil.copy()` method

This method is similar to that of the `copyfile()` and performs the exact similar task of copying the contents of a file into another.

But the advantage that it has is that it also copies the **system permissions** of the source file into the destination file.

Since copying system permissions is not a usual feature inside of a programming therefore this is a good feature in Python.

This method also takes in 2 parameters i.e., the source file path and the destination file path.

Let’s see the code implementation

```python
import shutil

shutil.copy('./test2/sample.txt', './test1/result.txt')

```

After successful execution of the above code , contents of **`sample.txt`** file is copied onto **`result.txt`** file but in case `result.txt` file already has some data, then it is overridden by this method.

Now that we have discussed about the `shutil` module, let’s now checkout the `os` module methods and see their implementation in code.

## Using the `os` module

`os` module is one of the most useful module in python when it comes to working with core operating system features and thus we can use it's method to copy contents from one file to other.

However, this module and methods are **platform specific** and thus we will learn separate methods for both the platforms i.e., Unix and Windows.

### Method 3:  Using the `os.system()` method

This method takes in a parameter called `command` that is a string containing the `shell command`'s for respective platforms.

In our case `copy` for windows and `cp` for Unix.

```python
import os

os.system('copy sample.txt result.txt') # For Windows user

os.system('cp sample.txt result.txt') # For Unix user

```

Run the appropriate line of code for your platform and the contents will be copied from source to destination.

But this method has 1 advantage and 1 drawback. 

Advantage being , if the destination file doesn't exist in the system then it creates a file and saves copies the content of the source onto it.

This code is also very much faster than the other two methods because this code runs in a sub shell and runs in a parallel thread to the python code.

And for waiting for a process completion, we can use the `wait()` method on the result of the system method to wait for this process completion.

## Method 4:  Using the `subprocess` module

The `subprocess` module is kind of new to the scenario but it intends to replace some core functions of the `os` module like the `system` method.

As a result of which you can predict, we can use this module and its method to **copy files in Python**.

We can use the call method in the `subprocess` module in order to initiate a system command in our case, it’s copying a file.

As a parameter to this method, we will again pass a string containing the CL command of the respective operating system.

We can also pass around a **Boolean** i.e. `shell=True` as a parameter to the function, but according to the official docs, using this parameter as `True` can be a security risk.

Let’s see the code and its output:

```python
import subprocess

subprocess.call('copy sample.txt result.txt',shell=True) # For Windows user

subprocess.call('cp sample.txt result.txt',shell=True) # For Unix user

```

As we needed, we achieved the desired result and we were able to copy the contents from **`sample.txt`** onto **`result.txt`**.

## Conclusion

As we conclude this exciting article, in this we learnt about working with the system commands. 

In this, we explored only about the copying of contents of file from one to the other.

We learnt about two major modules i.e., `shutil` and `os` and the most common and useful methods of these modules that can be used to copy a file in python, majorly the `copy` method of the `shutil` module and `system` method the `os` module.
