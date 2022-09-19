---
title: "How to parse/format RFC3339 date time string in Go"
description: "To parse/format RFC3339 date time in Go, we can use 'time.parse' method along with 'time.RFC3339' constant in golang 'time' package"
date: 2022-09-19T00:00:00+00:00
lastmod: 2022-09-19T00:00:00+00:01
draft: false
images: []
toc: true
---

**RFC3339** widely used standard for the date time format across the web. 

Both backend and frontend will use this format to communicate about the DateTime.

Most common RFC3339 date time format is 

```
2022-09-18T07:25:40.20Z
```

## Method 1 : Using `time.parse()` method and `time.RFC3339` constant

**To parse/format RFC3339 date time in Go, we can use `time.parse` method along with `time.RFC3339` constant in golang `time` package.**

Let's go through an example to understand it further.

```go

package main

import (
	"fmt"
	"time"
)

/** Parsing RFC3339 date format in Go**/

func main() {

	RFC3339dateString := "2022-09-18T07:25:40.20Z"

	fmt.Println("Input date time", RFC3339dateString)

	formattedDate, err := time.Parse(time.RFC3339, RFC3339dateString)
	if err != nil {
		fmt.Println("Error while parsing the date time :", err)
	}
	fmt.Println(formattedDate)
}

```

I have imported the `time` package and passed `time.RFC3339` constant to the `time.parse()` method.

```
// Output
Input date time 2022-09-18T07:25:40.20Z
2022-09-18 07:25:40.2 +0000 UTC
```

## Method 2: Using exact date time layout.

Instead of using `time.RFC3339` constant we can pass the exact date time format string as parameter to the `time.parse()` method.

```go
package main

import (
	"fmt"
	"time"
)

/** Parsing RFC3339 date format using time format string**/
func main() {

	RFC3339dateLayout := "2006-01-02T15:04:05Z07:00"
	RFC3339dateString := "2022-09-18T07:25:40.20Z"

	fmt.Println("Input date time", RFC3339dateString)

	formattedDate, err := time.Parse(RFC3339dateLayout, RFC3339dateString)
	if err != nil {
		fmt.Println("Error while parsing the date time :", err)
	}
	fmt.Println(formattedDate)
}

```

The date time format string taken from [here](https://pkg.go.dev/time#pkg-constants)

Do not prefer this method.

The date time format "2006-01-02T15:04:05Z07:00" is nothing but the value of `time.RFC3339`.
