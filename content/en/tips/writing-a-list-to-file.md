---
title: "Writing a list to a file"
description: "How to write contents of a list to a file in python"
date: "2021-07-19T04:15:05+09:00"
draft: false
link: "Write List to a file"
author: "dmohanty"
---
Writing lines to a file in python is quite simple and easy, but is it also true for writing lists to a file .

Let’s see.

In this article, we will see about all the different methods about how to write a list onto a file and how to crack the effective solution.

## Using the for loop

This is again one of the many use cases of the `for` loop.

The mighty `for` loop is capable of solving many of the problems in python.

For writing a list to a file in python, we have to use both the `for` loop and the `write()` method.  

By this we can imply iterate through a list of strings and by the help of the `write()` method, write each iteration to the file.

```
lines = ['Hello','World', 'Welcome to Python.shiksha']
path = "E:/Sample Folder/test.txt"
f=open(path,'w')
for i in lines:
    f.write(i+'\n')

f.close()
```

Output:
In test.txt

```
Hello
World
Welcome to Python.shiksha
```

This is a very beginner method of solving this problem i.e. good and effective for novice coders.

But if you are not aa beginner, you might not be interested in the same.

But how to reach an efficient solution ?

Let’s see the other methods.

## Using the string.join() method

Since, python is a very versatile language, it has a lot of inbuilt methods to work on with, thus there is also a string method that we can use in order to solve this problem.

Instead of a `for` loop we can use the `join()` method, by the help of which we can join the whole list using a **delimiter** and forming one super string and then we can use the `write()` method to add the super string onto our file.

```
lines = ['Hello','World', 'Welcome to Python.shiksha']
path = "E:/Sample Folder/test.txt"
f=open(path,'w')
string='\n'.join(lines)
f.write(string)

f.close()
```

Output:
In test.txt

```
Hello
World
Welcome to Python.shiksha
```

Thus pretty easily by using the join() method we could achieve the same result without a for loop.

But can we make this code a little bit more *compact* ?

Yes, we can.

## Using string.join() with open method

In the previous section, we saw about the `join()` method but can we make that code more *compact*. 

Yes, of course we can, by making the opening of the file a **dynamic** method and using the `string.join()` method directly.

```
lines = ['Hello','World', 'Welcome to Python.shiksha']
path = "E:/Sample Folder/test.txt"
with open(path,'w') as f:
  f.write('\n'.join(lines))
```

Output:
In test.txt

```
Hello
World
Welcome to Python.shiksha
```

Thus, by making the process **dynamic**, we can boost the **runtime performance** a bit and make the code look clean and *compact*.

## Using the writelines() method

Previously we saw the use of the `write()` method, which takes in a string as an argument and writes it onto a file. 

But files in python also have a `writelines()` method which takes in a **list of strings** as the argument and writes the list onto a file.

We can directly use the list but in order to make our text look better and cleaner, firstly we need to append the **newline** character after every line by using the map function.

```
lines = ['Hello','World', 'Welcome to Python.shiksha']
path = "E:/Sample Folder/test.txt"
f=open(path,'w')
lines=map(lambda x:x+'\n', lines)
f.writelines(lines)
f.close()
```

Output:
In test.txt

```
Hello
World
Welcome to Python.shiksha
```

Thus, we can see that we have reached the same output but with a very **effective** method and solution.

This method is very efficient to be used by dedicated programmers for solving this problem.

## Conclusion

In this article, we discussed in detail about the various methods that we can use in order to write a list to a file in python.

We started our discussion from the beginner approach i.e. a for loop and later extended it to the inbuilt `join()` method followed by its compact version and then finally concluding with the programmer approach i.e. the `writelines()` method.
