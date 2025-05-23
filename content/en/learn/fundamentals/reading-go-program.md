---
title: "Reading a Go Program"
description: "Understanding Go Program"
date: 2021-02-28T00:00:00+00:00
lastmod: 2025-02-28T00:00:00+00:00
draft: false
weight: -279
collapsible: false
type: docs
images: ["images/featured/Read-Go-Program.png"]
menu:
  learn:
    parent: "fundamentals"

---

Let's understand the Hello World `Go` Program by reading it line by line.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello! World")
}
```

The `Go` program starts with `package` keyword followed by package name in this case `main`.

`packages` are one of the building blocks of `Go` programming language.

In simple words **a `go` package contains re-usable code or functionality.**

For example `Go` has a built in package called `math` Package which provides basic constants and mathematical functions.

We can simply import the `math` package in our programs and we can use functions like `math.abs()` etc. 

If you want more generic definition, a `package` contains set of `.go` files and may include other packages.

There are two types of packages in `go`

1. Executable package (`main` package)
2. Non Executable packages (non `main` packages) (You can think of them as libraries). 

We can discuss more about this later as of now what you should understand is **every `go` program must start with a `package` declaration**

## `package main`

Package `main` defines a standalone executable program. 

```go
package main
```
Here we are declaring package `main`. 

Let's run the program.

```bash
go run hello_world.go
Hello! World
```
To understand further rename the `main` package to some other name

```go
package main1

import "fmt"

func main() {
	fmt.Println("Hello! World")
}
```

Now let's run the program

```bash
go run hello_world.go
```

You will get `package command-line-arguments is not a main package` error. 

That means we can run `go` program which contains package `main`.

i.e., `main` package is executable package. 

As we renamed it to `main1` it's acting like a library (just like `math` package, we can import it in another file).

## `import "fmt"`

`fmt` package is non executable package, it contains re-usable code or functions related to formatting input and output.  

Inside `main()` we are calling `fmt.Println("Hello! World")` method. 

`Println` is a function in `fmt` package which displays the message in command prompt (output).

To use `Println` function, we must include package `fmt` in our program.

Using `import` keyword, we can use the code from other packages in our `go` programs. 

Let's remove `import "fmt"` from our code run the program.

```bash
go run hello-world.go
.\hello-world.go:8:2: undefined: fmt
```

We will get `undefined: fmt` error. 

So to use functions or code from other packages in `go` programs, we must include corresponding packages using `import` statement. 

```go
import "package name"
```

Package name should be included in double quotes. 

And to call the package functions, we must prefix the function name with package name and dot.

```go
fmt.Println("Hello! World")
```

To know more about `Println` function type `go doc fmt.Printf` command.

```bash
>go doc fmt.Printf

package fmt // import "fmt"

func Printf(format string, a ...any) (n int, err error)
    Printf formats according to a format specifier and writes to standard
    output. It returns the number of bytes written and any write error
    encountered.
```

And let's remove or comment out the `fmt.Println()` statement. 

```go
package main

import "fmt"

func main() {
	//fmt.Println("Hello! World")
}

```

You will get `imported and not used: "fmt"` error. 

The `go` compiler is saying that the `fmt` package is imported but not used. 

That means every `go` program that imports a package must use that package in the code. 

It helps in maintaining the `go` source code. If the package is not useful and there is no point in importing it in the source code.

## `func main()`

The `func` keyword declares a function in `go`. 

In this program we are declaring a function named `main()`.

Like other programming languages, the body of the `go` functions are enclosed in curly braces `{}`.

`main()` function is very important function inside package `main`.

It's where the execution of the program starts.

Let's rename `main()` function and see what happens.

```bash
go run hello-world.go
```

The `go` compilers throws `runtime.main_main·f: function main is undeclared in the main package` error.

When you type `go run` command, the compiler searches for the `main()` function inside the package `main`.

If there is no `main()` function the compiler does not know where to start the program, so it will throw an error.

**We must declare `main()` function inside `main` package.**

## Summary

1. `main` is an executable package.
2. `func` keyword used to declare the functions in `go`
3. To include other packages in the programs we should use `import` keyword.
4. If you import a package, then we must use it in some way in the code.
5. Package `main` must declare function `main()`.
6. The `go` program execution starts from the `main()` function.