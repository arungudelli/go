---
title: "Specify new lines while writing to file"
description: "How to write and append new lines to a file"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Write to a file"
author: "dmohanty"
---
Many a times, as a python programmer you may encounter a problem , where you would have to write new files onto an existing file.

How can we add new lines to an existing file ?

We will discuss about all the different methods that we can use in order to achieve it in this article.

## Working with Files

While working with files in python, we need to take care of a few things.

- Before writing to a file, we have to first open the file using `open()`

- We can write on to a file using either `write()` or `writelines()`

- Most importantly, we have to close the file using `close()`

Now let’s discuss about all the steps in detail:
The `open()` method takes in two major parmeters:
- The `path` parameter specifies the file path of the text file that will appended with new lines or be written upon.
- The `mode` parameter specifies the mode with which we want to open the file.

Syntax:
```
f.open(path,mode)
```

The mode is then further categorized into 2 parts:

`w` - This mode is used to write to a new text file.

`a` -  This mode is used to write to an existing text file / appending to an existing file.

After opening the file , the output from the `open()` method is a file object which has 2 methods namely, `write()` and `writelines()`.

`write()` is used to add a string to the file while `writelines()` is used to add a **iterables sequence**(like list, set , tuple) of strings to the file.

Syntax:
```
f.write(“XYZ”)
f.writelines(“Hello world \n”)
```

## How to write on to a file

So by the help of examples let us try to understand more or less how these two methods work.

```
lines = ['Hello World', 'Welcome to python.shiksha']
path = "E:/file.txt"
with open(path, 'w') as f:
    for line in lines:
        f.write(line)
        f.write('\n')
f.close()
```
Output:
In file.txt
```
Hello World
Welcome to python.shiksha
```

The `open()` has a feature of creating new file by itself if the specified file doesn’t exist.
But we can modify the above code, to get an improved runtime performance.

```
lines = ['Hello World', 'Welcome to python.shiksha']
path = "E:/file.txt"
with open(path, 'w') as f:
    f.write('\n'.join(lines))
f.close()
```
Output:
In file.txt
```
Hello World
Welcome to python.shiksha
```

We can dynamically add new lines while writing to the file.

Using a for loop and writing to a file is pretty simple but now let’s try the *writelines* method.

```
lines = ['Hello World', 'Welcome to python.shiksha']
path = "E:/file.txt"
with open(path, 'w') as f:
    f.writelines(lines)
f.close()
```

Output:
In file.txt
```
Hello World
Welcome to python.shiksha
```

No loops and pretty easy method if we have a sequence of multiple lines.

But what about adding new lines to an existing method ?

It is also as simple as writing to a new file.

We just have to change the `w` mode to `a` mode.

```
newLines = [' ','Hope you enjoyed the blogs', 'Thank You !']
path = "E:/file.txt"
with open(path, 'a') as f:
      f.writelines('\n'.join(newLines))
f.close()
```
Output:
In file.txt
```
Hello World
Welcome to Python.shiksha
Hope you enjoyed the blogs
Thank You !
```
For appending new lines to a file , we just have to **play around with the mode**.

With this we complete the discussion on writing to a text file.

## Conclusion
 
Let’s wrap up this with a few important points that should be kept in mind while working with the files.

- First open the file using the `open()` method and choosing an appropriate mode i.e. `a` or `w`.

- After completing the work always close the file using `close()` method.

Syntax:
```
f.close() 
```

- Use the `write()` or `writelines()` method to write/append onto a file.



