+++
title = "How to Join/Concatenate Strings with a Separator or Delimiter in Go"
date = "2021-01-22T00:09:21+09:00"
description = "To join or concatenate strings with a separator or delimiter in Go, use strings.Join() method"
draft = "false"
link = "join strings with separator"
image= "images/featured/golangpostimage.png"
enableToc = false
authorurl="https://www.arungudelli.com/"

+++

To join or concatenate strings with a separator or delimiter in Go, use **`strings.Join()`** method.

`strings.Join()` function accepts two parameters, slice of strings and delimiter and returns a combined string joined by a delimiter.

```
func Join(str []string, separator string)
```

The below example code combines two strings separated by a comma delimiter.

```
package main

import (
    "fmt"
    "strings"
)

func main() {

    result := strings.Join([]string{"Hello", " world!"}, ",")
    fmt.Println(result)
}

//OUTPUT
Hello, world!
```

To combine strings separated by a space use the below code snippet.

```
result := strings.Join([]string{"Hello", "world!"}, " ")

//OUTPUT 
Hello world!
```

If we pass empty string as delimiter, the strings.Join() function combines two string without a separator.

```
result := strings.Join([]string{"Hello", "world!"}, "")

//OUTPUT
Helloworld!

```