+++
title = "Slice Contains Method in Go"
date = "2022-03-16T00:00:00+09:00"
description = "Go slices.Contains() method if an element exist in slice or not"
draft = "false"
link = "slice contains()"
enableToc = true
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

In Go 1.18 version, Golang team introduced a new experimental package `slices` which uses generics.

And this `slices` package contains a collection of generic functions that operate on slices of any element type.

And it has `slices.Contains()` method Which checks if an element exist in slice or not.

Use the below command to get `slices` package.

```
go get golang.org/x/exp/slices

```

## Go Slice Contains Method example

Let's go through an example to understand if further.

Import the slices package and use `slices.Contains()` method as shown below.

```
package main

import (
	"fmt"

	"golang.org/x/exp/slices"
)

func main() {
	fmt.Println("Go Slice Contains Method example")
	fruits := []string{"apple", "orange", "banana"}
	fmt.Println(slices.Contains(fruits, "banana")) // true
}

//OUTPUT:

Go Slice Contains Method example
true
```

