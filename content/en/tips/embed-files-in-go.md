+++
title = 'Embed Files in Go using "embed package" in go 1.16 version'
date = "2020-12-17T14:09:21+09:00"
description = "In Go 1.16 version, using package embed, we can easily embed files in Go programs."
draft = "false"
link = "Embed Files"
image= "images/featured/golangpostimage.png"
enableToc= false
authorurl="https://www.arungudelli.com/"



+++

In Go 1.16 version, using package "embed" we can easily embed files in Go programs.

The embed file content variable should be of type string, []byte, or FS only.

```
package main

import _"embed"


func main() {
	//go:embed "hello.txt"
	var s string
	print(s)
}
```

And running the program using [beta version of Go 1.16](https://golangtutorial.dev/news/go-beta-1.16-released/).


```
go1.16beta1 run embed-file.go

//OUTPUT
Hello, Gophers!
```

Reading file content in bytes format.
```
//go:embed "hello.txt"
var b []byte
print(string(b))
```

To read the file contents in embed.FS format use the below code snippet.

```
//go:embed hello.txt
var f embed.FS
data, _ := f.ReadFile("hello.txt")
print(string(data))
```

