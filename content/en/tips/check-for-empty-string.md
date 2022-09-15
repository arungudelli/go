+++
title = "How to Check for an Empty String in Go"
date = "2021-01-23T14:09:21+09:00"
description = "There are two ways we can check for an empty string in Go language.1. Comparing with empty string. 2. Checking the length of the string."
draft = "false"
link = "Check for empty string"
enableToc = true
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

There are two ways we can check for an empty string in Go language.

1. Comparing with an empty string.
2. Checking the length of the string.

Both ways are used in official Golang's libraries. 

Depending upon our coding styles we can use one of the above methods.

## Comparing with an empty string

The below code snippet compares the given string with an empty string and if both are equal then the string is empty.

```
package main

import (
	"fmt"
)

func main() {
	emptystring := ""
	if emptystring == "" {
		fmt.Println("String in Empty")
	}

}

```

## Checking the length of the string

Using `len()` method we can get length of the string, and if it's equal to `0` then **the string is empty**.

```
package main

import (
	"fmt"
)

func main() {
	emptystring := ""

	if len(emptystring) == 0 {
		fmt.Println("String in Empty")

	}

}
```

## String with white spaces

And if the string contains only spaces i.e., if it contains leading and trailing white spaces, before checking for the empty string we can use `TrimSpace` method to remove the white spaces.

```
package main

import (
	"fmt"
	"strings"
)

func main() {
	emptystringWithSpaces := "     "

	if strings.TrimSpace(emptystringWithSpaces) == "" {
		fmt.Println("String in Empty")

	}

}
```



