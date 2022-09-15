+++
title = "How to check if a file exists or not in Go/Golang"
date = "2022-05-09T00:00:00+00:00"
description = "To check if a file exists or not in `Go` language, we can make use of `os.Stat(filePath)` and `errors.Is(error, os.ErrNotExist)` functions in `Go`."
draft = "false"
link = "check if a file exists or not"
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"
enableToc = true
+++

To check if a file exists or not in `Go` language, we can make use of `os.Stat(filePath)` and `errors.Is(error, os.ErrNotExist)` functions in `Go`.

Let's go through an example to understand it further.

## Using `os.Stat(filePath)` and `errors.Is(err, os.ErrNotExist)`

I have created a file called `file-exists-or-not.txt` in the same folder as `file-exists.go` program. 

```
package main

import (
	"errors"
	"fmt"
	"os"
)

func checkFileExists(filePath string) bool {
	_, error := os.Stat(filePath)
	//return !os.IsNotExist(err)
	return !errors.Is(error, os.ErrNotExist)
}

func main() {

	var filePath string = "file-exists-or-not.txt"

	isFileExist := checkFileExists(filePath)

	if isFileExist {
		fmt.Println("file exist")
	} else {

		fmt.Println("file not exists")
	}

}

```

I have created a separate utility function `checkFileExists()` in the above `Go` program, to check if a file exists or not in the given the file path. 

We can combine both `os.Stat(filePath)` and `errors.Is(error, os.ErrNotExist)` functions into single statement as shown below.

```
package main

import (
	"errors"
	"fmt"
	"os"
)

func main() {

	var filePath string = "file-exists-or-not.txt"

	if _, err := os.Stat(filePath); errors.Is(err, os.ErrNotExist) {
		fmt.Println("file not exist")

	} else {
		fmt.Println("file exists")

	}
}

```

## `CreateFile The system cannot find the file specified`

If the file does not exists in the given path, `errors.Is()` function returns following error message `CreateFile The system cannot find the file specified.`.

```

var filePath string = "file-not-exists.txt"


if _, err := os.Stat(filePath); errors.Is(err, os.ErrNotExist) {
		fmt.Println(err.Error())
} 

```

Here is the output

```
>go run check-file-exists-or-not.go
CreateFile file-not-exists.txt: The system cannot find the file specified.
```

## Using `os.Stat(filePath)` and `os.IsNotExist()`

In place of `errors.Is(err, os.ErrNotExist)` function, we can use `os.IsNotExist()` function as well.

```
package main

import (
	"errors"
	"fmt"
	"os"
)

func main() {

    var filePath string = "file-exists-or-not.txt"

  _, error := os.Stat(filePath)
    if error == nil {
        fmt.Println("file %s exists", filePath)
    } else if os.IsNotExist(error) {
        fmt.Println("file %s does not exists", filePath)
    } else {
        fmt.Println("file %s stat error: %v", filePath, error)
    }

}

```

But according to the Go language documentation we should use `errors.Is(err, os.ErrNotExist)` instead of `os.IsNotExist()`.

```
// This function predates errors.Is. It only supports errors returned by
// the os package. New code should use errors.Is(err, fs.ErrNotExist).
func IsNotExist(err error) bool {
	return underlyingErrorIs(err, ErrNotExist)
}
```

[https://github.com/golang/go/blob/master/src/os/error.go#L90-L91](https://github.com/golang/go/blob/master/src/os/error.go#L90-L91)

## Using `os.Open()`

We can use Go's `os.Open()` function to check if a file exist or not.


```

package main

import (
    "fmt"
    "os"
)

func checkFileExists(filePath string) bool {
    _, error := os.Open(filePath) // For read access.
    return error == nil

}

func main() {

    var filePath string = "file-exists-or-not.txt"

	isFileExist := checkFileExists(filePath)

	if isFileExist {
		fmt.Println("file exist")
	} else {

		fmt.Println("file not exists")
	}

}


```
