+++
title = "foreach loop in Go"
date = "2021-01-26T00:00:00+00:00"
description = "There's no foreach loop in Golang.However we can replicate foreach loop behaviour using for loop in Go"
draft = "false"
link = "foreach loop"
image= "images/featured/golangpostimage.png"
enableToc = false
authorurl="https://www.arungudelli.com/"

+++

There's no foreach loop in Golang.

However we can replicate **foreach loop behavior using for loop** in Go.

A "for" statement with a "range" clause loops through all elements of an array, slice, string or map.

For-each element it assigns iteration values to corresponding iteration variables if present and then executes the block.

```
package main

import (
	"fmt"
)

func main() {
	stringSlice := []string{"Hello", "Golang"}
	for index, element := range stringSlice {
		fmt.Println(index, element)
	}
}
```

And the output of above **foreach loop** is 

```
0 Hello
1 Golang
```

But that's not exactly the replica of foreach loop, because it contains index. 

We can use underscore(_) variable or blank identifier in Golang in place of index variable.

```
//A foreach loop in Go
for _, element := range stringSlice {
		fmt.Println(element)
	}
```

