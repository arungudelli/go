+++
title = "How to Write multiline strings in Go"
date = "2021-01-23T14:09:21+09:00"
description = "To create or write multiline strings in Go, use the backtick (`) character while declaring or assigning value to the string."
draft = "false"
link = "multiline strings"
enableToc = false
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"


+++

To create or write multiline strings in Go, **use the backtick (`) character** while declaring or assigning value to the string.

Multiline strings are very helpful when working with large strings like SQL, HTML or XML files inside Go.

```
multiline_string := `select * from
emp
`
```

Please go through the below example to understand it further.

```
package main

import "fmt"

func main() {

	multiline_string := `Hello Gophers
welcom to golangtutorial.dev
`

	fmt.Printf("%s", multiline_string)
}

//OUTPUT
Hello Gophers
welcom to golangtutorial.dev

```