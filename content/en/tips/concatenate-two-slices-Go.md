+++
title = "How to Concatenate Two Slices in Go"
date = "2021-01-22T00:09:21+09:00"
description = "Using golang's `append()` function we can concatenate two slices in Go."
draft = "false"
link = "Concatenate Two Slices"
image= "images/featured/golangpostimage.png"
enableToc = false
authorurl="https://www.arungudelli.com/"

+++

Using golang's `append()` function we can concatenate two slices in Go.

Let's go through an example to understand it further.

I have created two integer slices and appending `sliceOne` to the another slice `sliceTwo`.

```
package main

import (
	"fmt"
)

func main() {
	sliceOne := []int{1, 2}
	sliceTwo := []int{3, 4}

	result := append(sliceOne, sliceTwo)
	fmt.Printf("c: %v\n", result)

}
```

If you run above code you will get following error.

```
cannot use sliceTwo (type []int) as type int in append
```

`append()` is a variadic function, that means we can pass multiple arguments to it.


```
//func append(slice []Type, elems ...Type) []Type

append([]int{1, 2},3)    //1,2,3 
append([]int{1, 2},3,4)  //1,2,3,4
```

But in the above example, we trying to append slice of integers instead of single integer. 

That's why we are getting type mismatch error.

To pass slice as a parameter to `append()` method use `...`.

```
package main

import (
	"fmt"
)

func main() {
	sliceOne := []int{1, 2}
	sliceTwo := []int{3, 4}

	result := append(sliceOne, sliceTwo...)
	fmt.Printf("c: %v\n", result)

}
```
OUTPUT is 

```
c: [1 2 3 4]

```

