+++
title = "Go 1.16.1 and Go 1.15.9 versions are released"
date = "2021-03-10T00:00:00+09:00"
description = "Golang team at Google released Go 1.16.1 and Go 1.15.9 versions."
draft = "false"
link = "Go 1.16.1 and Go 1.15.9"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Golang team at Google released Go 1.16.1 and Go 1.15.9 versions.

As part of this releases, Go Language team addressed few security issues reported recently.

## Fixed security Issues

1. [encoding/xml: infinite loop when using `xml.NewTokenDecoder` with a custom `TokenReader`](https://github.com/golang/go/issues/44913)

The `Decode`, `DecodeElement` and `Skip` methods of an `xml.Decoder` provided by `xml.NewTokenDecoder` may enter an infinite loop when operating on a custom `xml.TokenReader` which returns an EOF in the middle of an open XML element.

[Sam Whited](https://github.com/SamWhited) reported this issue.

Here is the commit which will fix the above issue. 
[https://github.com/golang/go/commit/d86e53e896eca907ad67300c0bb495e3dd925358](https://github.com/golang/go/commit/d86e53e896eca907ad67300c0bb495e3dd925358)

2. [archive/zip: can panic when calling Reader.Open](https://github.com/golang/go/issues/44916)

The `Reader.Open` API in Go 1.16, will panic when used on a ZIP archive containing files that start with “../”.

Commit for the fix 
[https://github.com/golang/go/commit/634d28d78ccbeb6e86f8bfeba030ea8be518f8fa](https://github.com/golang/go/commit/634d28d78ccbeb6e86f8bfeba030ea8be518f8fa)


## Update to Go 1.16.1 version

Use the below download link to update to Go 1.16.1 version

[https://golang.org/dl/#go1.16.1](https://golang.org/dl/#go1.16.1)

## Update to Go 1.15.9 version

Use the below download link to update to Go 1.15.9 version

[https://golang.org/dl/#go1.15.9](https://golang.org/dl/#go1.15.9)


The above security issues will be addressed in Go 1.16.2 and Go 1.15.10 versions as well.

If you are not sure about which version to update then choose Go 1.16.1 version.

The announcement

[https://groups.google.com/g/golang-announce/c/MfiLYjG-RAw/m/zzhWj5jPAQAJ](https://groups.google.com/g/golang-announce/c/MfiLYjG-RAw/m/zzhWj5jPAQAJ)