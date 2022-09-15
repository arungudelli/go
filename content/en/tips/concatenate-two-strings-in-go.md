+++
title = "How to Concatenate Two strings in Go"
date = "2021-01-22T00:09:21+09:00"
description = "There three simple ways to concatenate two strings in Go language 1. Using + operator 2. Using string append += operator. 3. Using Sprintf()"
draft = "false"
link = "concatenate two strings"
image= "images/featured/golangpostimage.png"
enableToc = true
authorurl="https://www.arungudelli.com/"

+++

There three simple ways to concatenate two strings in Go language 

1. Using + operator
2. Using string append += operator.
3. Using Sprintf()

As string type is immutable in Go, the above methods creates new strings whenever we combine strings.

If you want more efficient way of combining strings go through the below article.

[Best way to Concatenate Strings in Go](https://golangtutorial.dev/tips/concatenate-strings-in-go/)

And if the performance is not a priority, use the below methods. 

## Using + Operator

Like in other programming languages, we can use `+ operator` to combine strings in Go.

Often `+ operator` called as **concatenate operator**.

Have a look at the below examle.

```
package main

import (
    "fmt"
)

func main() {

    var strone string 
    strone = "Hello"
  
    var strtwo string 
    strtwo = "World!"

    combinedstring := strone + "," + strtwo

    fmt.Println(combinedstring)
}

//OUPUT 
Hello,World!
```

## Using string append += operator

To append a string to another string we can use **string append** `+= operator`.

The below code snippent append string one to string two.

```
package main

import (
    "fmt"
)

func main() {

    var strone string 
    strone = "Hello"
  
    var strtwo string 
    strtwo = "World!"

    strone += strtwo

    fmt.Println(strone)
}

//OUTPUT
HelloWorld!
```

## Using Sprintf()

We can use `Sprintf()` method in the Go `fmt` package to combine two or more strings together as shown below. 

```
package main
 
import (
    "fmt"
)
 
func main() {
 
    strone := "Hello"
    strtwo := "Go"
    strthree := "World"
     
    result := fmt.Sprintf("%s %s %s", strone, strtwo,strthree)
     
    fmt.Println(result) 
}

//OUTPUT
Hello Go World

```

To concatenate strings with a Separator or Delimiter go through the below post.

[Concatenate Strings with a Separator](https://golangtutorial.dev/tips/join-strings-with-separator/)