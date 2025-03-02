+++
title = "Go 1.18 build error //go:linkname must refer to declared function or variable"
date = "2023-02-20T00:00:21+09:00"
description = "To fix this '//go:linkname must refer to declared function or variable' error we need to update 'golang.org/x/sys' package"
draft = "false"
enableToc = true
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

After upgrading to Go 1.18 version, you might get `//go:linkname must refer to declared function or variable` error while running `go build` command.

This error observed in Mac systems. 

This is because of an older version of `golang.org/x/sys` package. 

To fix this `//go:linkname must refer to declared function or variable` error we need to update `x/sys` package by running below command.

```go
go get -u golang.org/x/sys
```

