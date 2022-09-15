+++
title = "How to Convert a zero-terminated byte array to string in Go"
date = "2020-11-05T14:09:21+09:00"
description = "To Convert an int to string in Go use strconv.Itoa()(int32 to string) and strconv.FormatInt()(int64 to string) functions which are part of Go's strconv package"
draft = "true"
link = "convert int to string"
authorurl="https://www.arungudelli.com/"

+++

To Convert an int to string in Go, use **`strconv.Itoa()`(int32 to string)** and **`strconv.FormatInt()`(int64 to string)** functions which are part of Go's `strconv` package.

We will go through an example to understand them further.

Create a file named 'convert-int-to-string.go' and will write code to convert both int32 and int64 to string.

## int32 to string

To convert int32 to string use `strconv.Itoa()` function. 

`strconv.Itoa` accepts parameter of type int32 and converts it to string.

```
package main

import (
    "strconv"
    "fmt"
)

func main() {
    var intValue int = 100
    var stringValue string
    stringValue = strconv.Itoa(intValue)
    fmt.Printf("%T, %v\n",intValue,intValue)
    fmt.Printf("%T, %v\n",stringValue,stringValue)
}
```

Run the 'convert-int-to-string.go' file.

```
> go run convert-int-to-string.go
int, 100
string, 100
```

## int64 to string

As `strconv.Itoa` function accepts only int32 variables, if you try to use variable of type int64 you will get following error.

```
cannot use intValue (type int64) as type int in argument to strconv.Itoa
```

To convert int64 to string we can use `strconv.FormatInt()`

```
package main

import (
    "strconv" 
    "fmt"
)
func main() {
    var int64Value int64 = 100
    var stringValue string
    stringValue = strconv.FormatInt(int64Value, 10)
    fmt.Printf("%T, %v\n",int64Value,int64Value)
    fmt.Printf("%T, %v\n",stringValue,stringValue)
}
```

In the above example, I am passing second parameter as 10 to the `strconv.FormatInt()`.

The second parameter represents the base i.e., decimal or hexadecimal etc.

10 represents decimal numbers.

Now run the the program 

```
> go run .\convert-int-to-string.go
int64, 100
string, 100
```

To get the hexa decimal string pass second parameter as 16 as shown below

```
var n int64 = 100
hexaDecimal := strconv.FormatInt(n, 16)
fmt.Printf("%T, %v\n",hexaDecimal,hexaDecimal)

output:
string, 64
```

Even we can use `strconv.FormatInt` to convert int32 to string.

```
var nInt32 int = 100
nstring := strconv.FormatInt(int64(nInt32), 10)
fmt.Printf("%T, %v\n",nstring,nstring)

output:
string, 100
```