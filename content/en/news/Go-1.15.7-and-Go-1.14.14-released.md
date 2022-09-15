+++
title = "Go 1.15.7 and Go 1.14.14 versions are released"
date = "2021-01-19T00:00:00+09:00"
description = "Go language team at Google released Go 1.15.7 and Go 1.14.14 versions to address few security issues recently reported"
draft = "false"
link = "Go 1.15.7 and Go 1.14.14"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Go language team at Google released Go 1.15.7 and Go 1.14.14 versions to address few security issues recently reported. 

All users are recommend to update to one of these Go language releases.

If you are not sure which version to update choose Go 1.15.7.

The issues fixed as part of these releases.

1. [cmd/go: packages using cgo can cause arbitrary code execution at build time](https://github.com/golang/go/issues/43783)
2. [crypto/elliptic: incorrect operations on the P-224 curve](https://golang.org/issue/43786)

The security issue in cmd/go package has been reported by [RyotaK](https://twitter.com/ryotkak)

For more details on the `cmd/go` change and to help deciding whether your own programs might have similar issues, see the blog post at [https://blog.golang.org/path-security](https://blog.golang.org/path-security).


And the second security issue in `crypto/elliptic` was found by the `elliptic-curve-differential-fuzzer` project running on OSS-Fuzz and reported by Philippe Antoine (Catena cyber).

## Update to Go 1.15.7 version

Use the below download link to update to Go 1.15.7 version

[https://golang.org/dl/#go1.15.7](https://golang.org/dl/#go1.15.7)