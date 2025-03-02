---
title: "Hello World Go Programming Language"
description: "We will start learning Go programming language, by writing simple Hello World program"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -280
collapsible: false
type: docs
menu:
  learn:
    parent: "fundamentals"

---

We will start learning Go programming language, by writing simple Hello World program.

## Writing your first Go Program

First Choose your local working directory. I have created a folder named `golangexamples` in my machine.

Create a file named `hello_world.go`. 

`.go` file extension used to represent go language source code files.

Copy paste the below hello world program which will print "Hello! World" message in the command prompt.

```go
package main

import "fmt"
func main() {
    fmt.Println("Hello! World")
}
```
Do not panic, If you are not understanding anything that's fine. You are going to learn.

## Running Go Program

Now will run our program by using `go run` command.

```
go run hello_world.go
```

OOPS! I got below error.

```
CreateFile hello_world.go: The system cannot find the file specified.
```

Even you get the above error, Congratualtion that's your first go program error.

Why I got above `CreateFile go The system cannot find the file specified.` error is my source code is in "golangexamples" folder.

And I ran the command in some other folder, so the `go run` command unable to find the `hello_world.go` file returned the above error.

Navigate to source code folder and run the above command again. 

```
> go run hello_world.go
Hello!, World
```

![Hello World Go example](/images/helloworld/Hello_World_Go_example.PNG)

Or you can pass the complete relative path of the source code file to the `go run` command to run the program.

```
> D:\>go run Blogging\goposts\golangExamples\golangexamples\hello_world.go
Hello!, World
```

## Build Go Program into executable Binary file

If you want to build your go program into an executable binary file use `go build` command.

```
> go build hello_world.go
```

If everything is Ok, Then you should see the executable binary file in the same folder as your source code.

```
> tree /f
D:.
    hello_world.exe
    hello_world.go
    README.md

```

![Hello world go Binary location](/images/helloworld/Hello_world_Binary_file_location.PNG)


Now we can run the generated executable binary file directly.

```
>hello_world.exe
Hello!, world
```

![Hello world go executable binary](/images/helloworld/goexecutablebinary.PNG)


