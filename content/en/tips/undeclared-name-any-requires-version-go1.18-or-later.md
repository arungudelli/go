+++
title = "undeclared name: any (requires version go1.18 or later) error in Go"
date = "2023-02-15T00:00:21+09:00"
description = "There are two ways we can check for an empty string in Go language.1. Comparing with empty string. 2. Checking the length of the string."
draft = "false"
enableToc = true
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

The new predeclared identifier `any` was introduced in Go 1.18 version.

It is an alias for the empty interface. 

We can use `any` instead of `interface{}`.

You will get `undeclared name: any (requires version go1.18 or later) error` if your `go.mod` file contains a `go` version below 1.18. For instance 1.17.

```go
module example.com/foo
go 1.17
```

Changing your `go.mod` to read `go 1.18` should resolve this error.

```go
module example.com/foo
go 1.18
```

Every `go` module contains `go.mod` file which controls the version of the `Go` language being used when compiling that particular module. 

This approach helps us to adopt the new language features easily, as the module authors will have full control over the language version they use. 

If he wants to use the latest version he can use or else if he wants use older version he can use it by mentioning the older version in the `go.mod` file.

If you are using latest language features such as generics in your module and if your `go.mod` file contains the older version you will get `undeclared name: any (requires version go1.18 or later)` error.

To fix this error you need to update `go` language version in the `go.mod` file.

The following code will return error as we are using predeclared identifier `any` which is added in `go 1.18` version and the `go.mod` contains the version `go 1.17`

```go
package main

import "fmt"

func main() {
	var i any
	i = 50
	fmt.Println(i)
}
-- go.mod --
module example.com/foo

go 1.17
```

If you change it to the latest version the error will be fixed.