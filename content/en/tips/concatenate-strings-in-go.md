+++
title = "Best way to Concatenate Strings in Go"
date = "2021-01-22T00:09:21+09:00"
description = "To concatenate string in Go (aka Golang) we can use strings.Builder and bytes.Buffer types."
draft = "false"
link = "concatenate strings"
image= "images/featured/golangpostimage.png"
enableToc = true
authorurl="https://www.arungudelli.com/"

+++

To concatenate strings in Go (aka Golang) we can use `strings.Builder` and `bytes.Buffer` types.

In Go language, string is a primitive type and it is immutable.

Whenever we change a string or append to another string, we will be creating a new string.

Because of this reason concatenating strings using `+` operator can be inefficient while joining a lot of strings together.

So using `strings.Builder` and `bytes.Buffer` types is the best way to concatenate multiple strings together, when we dont know the length of the resulting string.

## Using strings.Builder

The `Builder` type is added in Go 1.10 version as part of `strings` package.

A Builder is used to efficiently build a string using Write methods. It minimizes memory copying.

We can use **`WriteString` function of Builder type to concatenate strings**.

```
package main

import (
    "strings"
    "fmt"
)

func main() {
    
	var concatenatestrings strings.Builder

    for i := 0; i < 1000; i++ {
        concatenatestrings.WriteString("str")
    }

    fmt.Println(concatenatestrings.String())
}

```

If you are using older versions Go language, you can use `bytes.Buffer` package.

## Using bytes.Buffer

The usage of `bytes.Buffer` type is similar to `strings.Builder` type.

It also contains method `WriteString` which is used to concatenate strings.

```
package main

import (
    "bytes"
    "fmt"
)

func main() {
    
	var concatenatestrings bytes.Buffer

    for i := 0; i < 1000; i++ {
        concatenatestrings.WriteString("str")
    }

    fmt.Println(concatenatestrings.String())
}
```