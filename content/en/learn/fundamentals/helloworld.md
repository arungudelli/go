---
title: "Writing Your First Go Program Hello World 👋"
description: "Learn how to write your first Go program by creating a simple 'Hello, World!' app. Set up a Go module, write clean Go code, and run it using the Go CLI — perfect for beginners starting with Go in a real project structure"
date: 2021-02-28T00:00:00+00:00
lastmod: 2025-02-28T00:00:00+00:00
draft: false
weight: -280
collapsible: false
images: ["images/hello_world.webp"]
type: docs
menu:
  learn:
    parent: "fundamentals"

---

Learning a new programming language is always exciting! In this guide, we’ll walk through writing your first Go (Golang) program, covering the key components that make up a basic Go application. 

If you don’t understand everything right away, don’t worry—this is just the beginning of your journey with Go.

{{< figure
  process="fill 2100x900"
  lqip="21x webp q20"
  loading="lazy"
  fetchpriority="auto" 
  sizes="auto"
  src="images/hello_world.webp"
  alt="Go Program Hello World"
  caption="Go Program Hello World"
>}}


## Go Hello World 

They say every programming journey starts with a humble "Hello, World!" — and who are we to break that sacred tradition? 😄 

Just like learning to crawl before walking, printing "Hello, World!" is our first baby step into the world of Go. 

It's simple, it's classic, and it's a rite of passage for every developer.

### Project Setup

All the code for this tutorial will be placed in a folder called `hello-world` inside the following GitHub repository: [https://github.com/arungudelli/go-learning](https://github.com/arungudelli/go-learning).

Make sure your folder structure looks like this:
```
go-learning/
└── hello-world/
    ├── go.mod
    └── main.go
```

Navigate to the `hello-world` directory:

```sh
cd go-learning/hello-world
```

### Creating a Go Module 

First, we’ll create a Go module… wait, what’s a module? 🤔

Great question! A Go module is basically a container for your Go code. 

It's how Go knows where your project starts, what dependencies it needs, and what version of Go it's using. 

Think of it like a well-organized backpack for your code — everything you need, zipped up and labeled.

When we run `go mod init`, we're telling Go, "Hey, this is the start of my project!" That command creates a `go.mod` file that tracks your module's name and dependencies.

Don't stress about understanding everything right now. You'll get more comfortable with modules as you go deeper into Go. 

We'll explore them in more detail in a future tutorial.


---

### Setting Up Your Go Module

Run the following command inside the `hello-world` folder to initialize a Go module:

```sh
go mod init hello_world

// go: creating new go.mod: module hello_world
```

This creates a `go.mod` file with the following contents:

```go
module hello_world

go 1.24.0
```

✅ Now your `hello-world` folder is a Go module named `hello_world`.

---

### Writing Your First Go Program

Next, let’s write the legendary “Hello, World!” program.

1. Inside the `hello-world` folder, create a file named `main.go`:
2. Add the following code:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Do not panic, If you are not understanding anything that's fine. You are going to learn.

## Building and Running the Go hello World Program

### Option 1: Run Directly (Without Building)

We can run the go program without building using `go run` command.

This compiles and runs your program in one step.

```
go run main.go
```

OOPS! I got below error.

```
CreateFile main.go: The system cannot find the file specified.
```

Even you get the above error, Congratualtion that's your first go program error.

Why I got above `CreateFile go The system cannot find the file specified.` error is my source code is in "hello-world" folder.

And I ran the command in some other folder, so the `go run` command unable to find the `main.go` file returned the above error.

Navigate to source code folder and run the above command again. 

```
> go run main.go
Hello!, World
```

![Hello World Go example](/images/helloworld/Hello_World_Go_example.PNG)

Or you can pass the complete relative path of the source code file to the `go run` command to run the program.

```
> D:\> go run D:\Blogging\go-learning\hello-world\main.go
Hello!, World
```

### Option 2: Build and Run Separately

The `go build` command compiles Go source code and creates an executable binary. 

This binary can be run independently without needing the Go source files. 

Now run the `go build` inside "hello-world" a directory with has main.go file.

```sh
go build
```

This will produce an executable named `hello_world` (or hello_world.exe on Windows). 

When you run this file, it will display: Hello, world!

```
>  .\hello_world.exe
Hello, World!
```
![Hello world go executable binary](/images/helloworld/goexecutablebinary.PNG)


The executable binary file will be in the same folder as your source code.

```
> tree /f
D:.
    hello_world.exe
    main.go
    README.md

```

![Hello world go Binary location](/images/helloworld/Hello_world_Binary_file_location.PNG)

## Summary

- ✅ You created a Go module using `go mod init`
- ✅ Wrote your first Go program
- ✅ Learned how to build and run Go code

This is just the beginning. Stay tuned for more tutorials in the [go-learning GitHub repo](https://github.com/arungudelli/go-learning) as we dive deeper into Go’s core features like functions, loops, and structs.

Stay curious and keep coding! 🚀




