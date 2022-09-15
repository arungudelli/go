---
title: "Delete a File / Folder in Python"
description: "How to delete a File/ Folder using Python Scripting"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Delete a file or folder"
author: "dmohanty"
---

**Scripting** has always been a *flagship* feature that Python has provided to its users.

Keeping this premium feature of Python in mind, in this article , we will discuss about how to delete a file or folder from a directory / sub directory using Python.

## Using os.remove()

The **os** module of python gives us full immunity to interact with the operating system and play around with the files and folders in our machine.

But the **os** methods also raise an `OSError` in case of an invalid file path or corrupted file path etc.

With the help of the os module, we can use the `os.remove()` method in order to delete a file from our system.

The remove method takes in two parameters, while one of them is optional.

The two parameters are:
Path : File Path
dirDesc (optional) : A file description regarding your directory / sub directory.

The `remove()` method can be invoked by :  `os.remove(Path, dirDec)`  

```
import os 
    
dirName = "Test"
fileName ="file1.txt"

location = "E:\SampleFolder"


filePath = os.path.join(location, fileName)

dirPath = os.path.join(location, dirName)

os.remove(filePath)  
print("File Succesfully Removed")

os.remove(dirPath) 
print("Directory Succesfully Removed !")
```
Output:
```
File Succesfully Removed

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
PermissionError: [WinError 5] Access is denied: 'E:\\SampleFolder\\Test'
```

If the specified path is that of a directory, then the `OSError` is raised.

Thus, we can conclude that this method can’t be used for removing or deleting a directory.

But this is not a *healthy approach* as a good programmer.

So, being a responsible coder, we should handle all the possible errors and show some error message instead.

Let’s try to handle the `OSError` generated while trying to remove a directory.

```
import os 
    
dirName = "Test"
location = "E:\SampleFolder"

dirPath = os.path.join(location, dirName)
try: 
    os.remove(dirPath) 
    print(" File removed successfully") 
except OSError as error: 
    print(error) 
    print("File cannot be removed")
```
Output:
```
[WinError 5] Access is denied: 'E:\\SampleFolder\\Test'
File cannot be removed
```

## Using os.rmdir() 

We were unable to delete directories using the `remove()` method that doesn’t imply that we can never remove directories ?

No, we can. It’s Python and thus we always have a scope of achieving our desired result.

We can use the `rmdir()` method from the os module to remove the **empty directories** from our machine.

But this method can only remove the empty directories and will raise an `OSError` if the specified path is not that of an empty directory.
Not specifically what we wanted but pretty similar. 

Removing empty directories are also sometimes an important use case.

```
import os 
    
dirName = "Test"
emptyDirName = "TestClean"

location = "E:\SampleFolder"
dirPath = os.path.join(location, dirName)
emptyDirPath = os.path.join(location,emptyDirName)

os.rmdir(emptyDirPath)
print("Directory Removed")

os.rmdir(dirPath)
print("Dir Removed Successfully")
```
Output:
```
Directory Removed

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
OSError: [WinError 145] The directory is not empty: 'E:\\SampleFolder\\Test'
```

As mentioned above, we get an `OSError` whenever we try to remove a **non-empty directory**.
Again since, we have an error , our responsibility is to handle that user and show a nice error message for the user.

```
import os 
    
dirName = "Test"
emptyDirName = "TestClean"

location = "E:\SampleFolder"
dirPath = os.path.join(location, dirName)

try:     
    os.rmdir(dirPath) 
    print(" File removed successfully") 
except OSError as error: 
    print(error) 
    print("File cannot be removed")
```
Output:
```
[WinError 145] The directory is not empty: 'E:\\SampleFolder\\Test'
File cannot be removed
```

But still we haven’t achieved what we wanted i.e. removing any directory from our machine.
We will discuss about how to remove an entire directory from the machine.

## Using shutil.rmtree()

Well, apart from **os** we can also use the **shutil** module in order to delete a complete directory from our system.
The `shutil.rmtree()` method takes in three parameters with two being optional.

path: File Path
ignore_errors: If true, errors due to failure are ignored.
onerror: if ignore_errors is false, then we can handle error using onerror

Let’s try this method and tr to remove our directory:

```
import shutil
import os 
    
dirName = "Test"
location = "E:\SampleFolder"

dirPath = os.path.join(location, dirName)
  
shutil.rmtree(dirPath)
print("Directory Removed !")
```
Output:
```
Directory Removed !
```
### Using ignore_errors

```
import shutil
import os 
    
dirName = "Test"

location = "E:\SampleFolder"
  
dirPath = os.path.join(location, dirName)

shutil.rmtree(dirPath, ignore_errors = True)
print("File Removed ?")
```
Output:
```
File Removed ?
```
This method bypasses all the weird error messages that are generated if a file is not present.


### Using the onerror

The onerror must be assigned with a function having three parameter,

function – function which raised the exception.
path – File path that caused the exception
excinfo – exception info raised by sys.exc_info() 

```
import shutil
import os 
    
dirName = "Test"

location = "E:\SampleFolder"
  
dirPath = os.path.join(location, dirName)
  
def Errorhandler(func, path, exc_info):
    print("Oops ! Something went Wrong")
    print(exc_info)
  
shutil.rmtree(dirPath, onerror = Errorhandler)
```
Output:
```
Oops ! Something went Wrong
(<class 'FileNotFoundError'>, FileNotFoundError(2, 'The system cannot find the path specified'), <traceback object at 0x000001B4A669DE00>)
Oops ! Something went Wrong
(<class 'FileNotFoundError'>, FileNotFoundError(2, 'The system cannot find the file specified'), <traceback object at 0x000001B4A669DE00>)
```

## Conclusion

With this we complete the scripting using python and discussing about the different methods by the help of which we can delete files and folders from our system.

First, we looked up on the different methods from the **os** module by which we were able to delete files and empty directories.

Towards the end, we discussed about the method from **shutil** module by which we could delete a complete directory.



