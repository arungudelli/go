---
title: "Comments in Go Program"
description: "how to write comments in Go Program."
date: 12-12-2022T00:00:00
lastmod: 12-12-2022T00:00:01
draft: false
weight: -278
collapsible: false
type: docs
menu:
  learn:
    parent: "fundamentals"

---

In this tutorial we will learn how to write comments in `go` programs.

With the time, programs become more and more complex. 

It becomes necessary to add meaningful comments to the code, which should explain the purpose of the code.

As one of the famous quote says 

```text
Any one can write code that a computer can understand. 

Good programmers write code that humans can understand.
```
Comments are best way to write understandable code.

There are two types of comments in `go` language. 

## One line comments in `go`

In `go` language, one-line comments start with two forward slash characters `//`.

When you start a line with two forward slash `//`,the rest of the line is a comment.

```go
// This is where the program execution starts.
func main() {
	fmt.Println("Hello, World")
}
```

We can write comments followed by a statement as well. 

```go
// This is where the program execution starts.
func main() {
	fmt.Println("Hello, World") //Displays Hello World in the console.
}
```

## Multiline comments in `go` 

When you declare a function, it's a good practice to write detailed description of what does the function will do. 

In such cases multiline comments are very useful. 

In `go` language, multiline comments start with a forward slash and an asterisk `/*` and end with an asterisk and a forward slash `*/`.

```go

/*
Hello this is a multiline comment in go language.
From the main() function program execution starts.
*/
func main() {
	fmt.Println("Hello, World")
}

```

Comments are only for understanding the code. 

Whatever you write inside the comments are ignored by the `go` compiler. 

```go

func main() {
	fmt.Println("Hello, World")
    /*
    fmt.Println("Iam inside the comment")
    */
}

```

The second `fmt.Println("Iam inside the comment")` statement will be ignored by the `go` compiler, and won't be displayed in the console.

Some times this can be very useful, We can simply put the code in the comments so that we can revert back it easily. (Instead of deleting.)

```go
func main() {
	fmt.Println("Hello, World")
    //doSomething()
}
```

## Nested comments are not supported. 

The below `go` code returns error as nested comments are not supported. 

```go

/*
Hello this is a multiline comment in go language.
From the main() function program execution starts.
/* hi*/
*/
func main() {
	fmt.Println("Hello, World") // Displays Hello World in the console.
}

```

There is no practical use case of nested comments. 

## Bad comments

Even though comments are nice way to describe functionality of the code, but some programmers often use them wrongly.

```go
/*
The line 1 will do this () and line 10 do that thing and so on.... 
This variable is used to do this thing etc... 
*/
SomeComplexCode()
```

Such comments in the code should be minimal.

There is a rule about comments "If the code is so unclear that it requires a comment, then maybe it should be rewritten instead". 

A good written code will contain minimal comments and should be easy to understand without them.

As said in the start of the article, **We should write meaningful comments not just comments.** 


## Summary

1. There are two types of comments in `go`, one liner and multiline comments.
2. one-line comments start with two forward slash characters `//`.
3. multiline comments start with a forward slash and an asterisk `/*` and end with an asterisk and a forward slash `*/`.
4. Nested comments are not supported.
5. Write meaningful comments.
