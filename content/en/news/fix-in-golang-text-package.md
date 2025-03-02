+++
title = "Vulnerability in golang.org/x/text/language package has been fixed"
date = "2022-10-11T00:00:00+00:00"
description = "Vulnerability in golang.org/x/text/language"
draft = "false"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Recently [Adam Korczynski](https://mobile.twitter.com/adamkorcz4) of ADA Logics, discovered a vulnerability in `Go` language `text/language` package, which could cause a denial of service attack.

## What is the issue? 

The BCP 47 tag parser has quadratic time complexity due to inherent aspects of its design. 

Since the parser is, by design, exposed to untrusted user input, this can be leveraged to force a program to consume significant time parsing `Accept-Language` headers.

Further, an attacker can create a large `Accept-Language` header, which the `ParseAcceptLanguage` function will take too much time to parse.

## How the issue is fixed? 

This issue tracked by **CVE-2022-32149** and [#56152](https://github.com/golang/go/issues/56152)

The version `v0.3.8` of `golang.org/x/text` fixes this vulnerability in the `golang.org/x/text/language` package

Here is the complete details regarding the fix.

[Fix in ParseAcceptLanguage](https://go-review.googlesource.com/c/text/+/442235/2/language/parse.go)

```go

var errTagListTooLarge = errors.New("tag list exceeds max length")


func ParseAcceptLanguage(s string) (tag []Tag, q []float32, err error) {
	defer func() {
		if recover() != nil {
			tag = nil
			q = nil
			err = language.ErrSyntax
		}
	}()

    // return error If the string length is high
	if strings.Count(s, "-") > 1000 {
		return nil, nil, errTagListTooLarge
	}


```

With the above fix `ParseAcceptLanguage` function reject excessively large `Accept-Language` strings.

## Official announcement

Here is the Official announcement regarding this fix in `golang.org/x/text/language` package

[Official announcement](https://groups.google.com/g/golang-dev/c/qfPIly0X7aU/m/NR_qVahPCAAJ)

