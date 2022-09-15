---
title: "Check if a file exists or not without exception in Python"
description: "How to check if a file exists without exception in Python."
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "file exists check"
author: "dmohanty"
---

In this article, we will briefly discuss about the different python scripting methods with the help of which we can check if a file exists or not without exception. 

While we are working with python scripting, many times we may have to perform a certain task on if a particular file or directory exists and thus, in the upcoming sections we will discuss the solutions to our problem.

## Check if a file exists

The simplest method of checking if a file exists or not in python without importing any libraries explicitly is using the `try` & `except` block.

The *try* and *except* block looks for the file provided and raises an `IOError` exception if file is not accessible.

Code 1:
```
try:
    with open('E:\TestFolder\sample.txt') as f:
        print(f.readlines())
except IOError:
    print("File not accessible")

```
OUTPUT:
```
['Hello World']
```

Code 2:
```
try:
    with open('E:\TestFolder\test.txt') as f:
        print(f.readlines())
except IOError:
    print("File not accessible")

```

OUTPUT:
```
File not accessible
```

In the above examples, we opened the file using the `with` keyword which makes sure that the file is properly closed even though an exception is raised and thus, making the code more dynamic by avoiding the `close` function.

If checking the existence of a file was so smooth, then why this article ?

This is because the above method is the least likely to be used method, because in this case we are trying to open a file ignoring the **Race** conditions.

**Race** conditions refer to a situation when more than one process try to access the same file.

For e.g.: While checking for existence, there might be another process running which tries to delete the same file and by using the *try* and *except* block, we are ignoring the  **Race** conditions.

## Python Methods to check existence of file without exception

There are a few methods by the help of which we can effectively evaluate the existence of a file.

## Using the os module

We can evaluate the existence of a file/directory by using the `exists()` method of the `os.path` module. 

For better filtering of our results, we can also use the `isfile()` and `isdir()` methods to know if the mentioned path leads to a file or a directory.

`os.path.exists(path)` returns a **boolean** value accordingly if the provided path leads to a *file*, *directory*, valid *symlink* or not.

`os.path.isfile(path)`  returns a **boolean** value accordingly if the provided path leads to a *file* or not.

`os.path.isdir(path)`  returns a **boolean** value accordingly if the provided path leads to a *directory* or not.

```
import os.path

if os.path.exists('E:\TestFolder\sample.txt'):
    print("File exists")
else:
    print("File doesn't exist")


print(os.path.isfile('E:\TestFolder\sample.txt'))
print(os.path.isdir('E:\TestFolder\sample.txt'))

```
OUTPUT:
```
File exists
True
False
```

This method is a go-to use method if there are no simultaneous actions being performed on the same file like deleting the file or copying the file.

## Using the pathlib module

This method can only be used by programmers using Python version equivalent or more than *Python 3.4*. 

**Pathlib** is one of the easiest to use and understand module of Python that provides the object-oriented interface to work with the filesystem paths.

We can install **pathlib** using the following command:

```
pip install pathlib

```

After installing we have access to tap onto the path class of the pathlib module and in the `path` class , we have access to the `exists()` method with the help of which we can check if a file exists or not.

The `path` class accepts the path information.

```
import pathlib
f = pathlib.Path("E:\TestFolder\sample.txt")
if f.exists():
    print ("File exists")
else:
    print ("File not exist")

```
OUTPUT:
```
File exists
```

This `exists()` method returns `True` if a file exists else if returns `False` if a file is not present.

In order to use the *pathlib* module in **Python2** you can use the following command:

```
pip install pathlib2

```

The main difference between using the **os** and **pathlib** module is that *pathlib* allows the user to work with the filesystem paths as `Path` objects while *os* works with the paths as simple `string` objects.

## Using the glob module

Python’s Glob module allows the user to interact with the filesystem. The main advantage of using the **glob** module is because of its **ability to match a pattern**.

By using the glob module, we get access to the `glob()` method that we can use to check if a file exists or not.

The `glob()` returns a Boolean value as the output i.e., `True` if file exists and is readable and `False` if the file doesn’t exist or isn’t readable.

```
import glob    
if glob.glob("E:\TestFolder\sampleFolder\Test.txt"):
    print ("File exists")
else:
    print("File not exist")

```
OUTPUT:
```
File exists
```

This is how we can use the **Glob** module to evaluate if a file exists or not.

## Different Usecases

Since we have discussed all the different methods of using Python scripting to check if a file exists or not.

Now, it’s the time that we should discuss some *important usecases* of these methods. 

## Check if all files of a list exist

Suppose, you have multiple files in a directory and you want to check if some particular files exist in that directory or not. 

In that case we can add all the *to be searched* files inside of a list and can iterate through the list and by using **list comprehension** method we can check if each file exists using the `os` module and `exists()` combination.

Then we can use the `all` function to iterate through all the **boolean** outputs of the `exists()` method.

`all` function returns `True` if all the iterables are `True` in the list else it returns `False` even if one iterables is `False` inside the list.

```
import os.path

filelist = ['E:\\TestFolder\\sample.txt', 
            'E:\TestFolder\sampleFolder\Test.txt',]

if all([os.path.exists(f) for f in filelist]):
    print("All files exist")
else:
    print("All files doesn't exist")

```
OUTPUT:
```
All files exist
```

## Check if a file is empty or not

Sometimes we may come across *usecases* where our provided contains a file which is empty.

For such situations, we need to ensure that file is not empty and is not corrupted.

The `os` module comes with a pre-defined method called `getsize()` which returns `0` if  file is empty else it returns the `size of the file in bytes`.

```
import os

file_path = "E:\TestFolder\sample.txt"

if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
    print ("File exists and Not Empty")
elif os.path.exists(file_path) and os.path.getsize(file_path)==0:
    print ("File exists and Empty") 
else:
    print ("File Doesn't exist") 

print(os.path.getsize('E:\TestFolder\sampleFolder\Test.txt'))

```
OUTPUT:
```
File exists and Empty
11
```

## Check if a file exists with an extension

We can achieve the above result by using the regular expression & the **Glob** module.

This *usecase* comes into play when we want to check for files with a particular extension.

```
import glob

if glob.glob('E:\TestFolder\*.pptx'):
    print("PowerPoint File exists") 
else:
    print("PowerPoint File doesn't exist")

```
OUTPUT:
```
PowerPoint File doesn’t exist
```

## Conclusion

In this article we discussed in detail about all the various methods that can be used in python scripting to check if a file exists or not.

We also discussed some *important usecases* where these methods can be used to check if a file exists and  reduce the code as well as improve runtime performance.