---
title: "Listing all files/directories inside a folder in Python"
description: "Useful Python language Tips & tricks"
date: "2021-07-19T04:15:05+09:00"
draft: true
link: "List Directories/Files"
author: "dmohanty"
---

## Introduction

We can list down all files or directories inside a folder in Python by using various methods that are discussed below. 

Some of the major methods are by using the `os.walk()`, `os.listdir()`,glob module etc.

Python’s by-default module i.e., the OS module allows user to get access to various functions to interact with the file system.

For eg: The `walk()` method lists all the files inside a directory & the `listdir()` method finds files on a specifies path.

Python’s Glob module has the glob( ) function that looks for the required files in the current directory.

## Using the os.listdir( ) function

The most basic way of listing all the files into one directory is via using the `os.listdir( )` method. However, this method only returns the list of all files & sub-directories inside the root directory. 

The received data can be further filtered by using the `os.path.isdir( )` to list all the subdirectories.

```
import os
dirName = 'c:/users/temp’
for file in os.listdir(dirName):
 dir = os.path.join(dirName, file)
 if os.path.isdir(dir):
 print(dir)

```
OUTPUT:
```
[ c:/users/temp /file1.txt,
c:/users/temp/sample,
c:/users/temp/testFolder,
c:/users/temp/sample2.txt ]
```

## For Listing The Subdirectories Separately

The main code can now be used recursively to enable filtering by subdirectories.

```
import os
def listdirs(dirName):
 for file in os.listdir(dirName):
 dir = os.path.join(dirName, file)
 if os.path.isdir(dir):
 print(dir)
 listdirs(dir)
dirName = 'c:/users/temp’
listdirs(dirName)
```
OUTPUT:
```
[ c:/users/temp/sample,
c:/users/temp/testFolder ]
```
## Using the os.scandir( ) function

For python 3.5+, you can use the `os.scandir()`, which offers significantly better performance over `os.listdir()`. 

This method returns the directory entries along with file attribute information. 

The entries can be filtered by using the `is_dir()` functions, which would return `true` if the current entry points to a directory.

```
import os
rootdir = ‘C:/users/temp'
for it in os.scandir(rootdir):
 if it.is_dir():
 print(it.path)
```
OUTPUT:

```
[ C:/users/temp/samplefolder1,
C:/users/temp/samplefolder2,
C:/users/temp/sqlfolder,
C:/users/temp/test ]
```
The main code can now be used recursively to enable filtering by
sub-directories.

```
import os
def listdirs(rootdir):
 for it in os.scandir(rootdir):
 if it.is_dir():
 print(it.path)
 listdirs(it)
rootdir = 'c:/users/temp'
listdirs(rootdir)
```

## Using pathlib module

For Python 3.4+ users, the `pathlib` module is very useful to list all the sub-directories in a directory. 

The reason behind using the pathlib module is to get access to the `Path.iterdir()` function, which contains the path objects of the directory contents. 

And in a similar way, the entries can be filtered by using the `Path.Is_dir()` function.

```
from pathlib import Path
dirName = ‘c:/users/temp’
for path in Path(dirName).iterdir():
 if path.is_dir():
 print(path)
```
OUTPUT:

```
[PosixPath('.hg'), PosixPath('docs'), PosixPath('dist'),
PosixPath('__pycache__'), PosixPath('build')]
```

This code in its recursive version can be used to search through th subdirectories.

## Using os.walk( ) function

For listing all the files in a directory or sub-directory, it is better to use the `os.walk()` method, because this method yields a 3-tuple iterator (dirpath, dirnames, filenames).

Where `dirpath` is the path for the root directory, `dirnames` is the list of names of subdirectories in the root directory & `filenames` lists all the files in the root directory as well as sub-directories.

```
import os
dirName = ‘C:/users/Angular’
for dirpath, dirname, filename in os.walk(dirName):
 for subdir in dirname:
 print(os.path.join(dirName, subdir))
```

OUTPUT:

```
[ C:/users/ Angular /samplefolder1,
C:/users/ Angular /samplefolder2,
C:/users/ Angular /AngularImage.png,
C:/users/ Angular /test.txt,
C:/users/Angular/angular.pdf ]
```

We can also use the previously used methods in order to filter our entries by using `is_dir()`,`.endswith(‘’)` etc.

## Using glob module

This method becomes really useful when we have to iterate over a list of files. 

The `Glob.glob()` method returns an iterator over the list of path names that match a specified pattern.

The `glob()` function searches for a list of files filtered on the basis of a specified pathname pattern. 

This function also has a parameter recursive, whose default value is set to `False`, but if its
value is set to `True`, then this functions searches inside the subdirectories for files matching the specified pathname pattern.

```
import glob
location = 'c:/users/temp/'
for path in glob.glob(f ‘ {location}/*/ ’):
print(path)
```

This returns all the directories & subdirectories inside the root path directory.

```
[C:/users/temp/samplefolder1,
C:/users/temp/samplefolder2,
C:/users/temp/sqlfolder,
C:/users/temp/test]
```

For Python 3.5+ versions extended support for recursive globs is given for using ** to search subdirectories.

```
import glob
rootdir = 'path/to/dir'
for path in glob.glob(f'{rootdir}/*/**/', recursive=True):
 print(path)
```
OUTPUT:

```
[c:/users/temp/notes/getSample
c:/ users /temp/release,
c:/ users /temp/dist/doc,
c:/ users /temp/dist/samples/firstSample]
```

## What to Use?

After learning to implement all of the method possible, there is an uncertainty for deciding the best method to adapt to. 

But as we have learnt that the `os.walk()` method provides maximum flexibility to work the file system in python. 

While `glob()` enables to search and filter through a specific pattern of pathname. 

Thus, every method and library has it own pros and cons. 

Hence, it is advisable to use the `os.walk()` method but the usability changes according to the requirements in a program.

## Conclusion:

In this article , we briefly discussed about the various methods to list all the files, sub-directories, directories inside a root directory in Python language.







