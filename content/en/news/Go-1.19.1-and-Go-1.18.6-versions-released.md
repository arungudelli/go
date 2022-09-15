+++
title = "Go 1.19.1 and Go 1.18.6 versions are released"
date = "2022-09-06T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.19.1 and Go 1.18.6 on 06-09-2022."
draft = "false"
link = "Go 1.19.1 and Go 1.18.6"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

Go language team at Google released two minor versions Go 1.19.1 and Go 1.18.6 on 06-09-2022.

As part of these releases, Go language team fixed following security issues.

1. CVE-2022-27664: net/http: handle server errors after sending GOAWAY
2. CVE-2022-32190: JoinPath does not strip relative path components in all circumstances

## CVE-2022-27664: net/http: handle server errors after sending GOAWAY

This includes security fixes to the `net/http` package.

A closing HTTP/2 server connection could hang forever waiting for a clean shutdown that was preempted by a subsequent fatal error. This failure mode could be exploited to cause a denial of service.

The issue is reported by [Bahruz Jabiyev](https://mobile.twitter.com/BahruzJabiyev), [Tommaso Innocenti](https://mobile.twitter.com/innotommy), Anthony Gavazzi, [Steven Sprecher](https://twitter.com/StevenSprecher), and [Kaan Onarlioglu](https://www.linkedin.com/in/kaan-onarlioglu/).

For more details visit following github issue.

[https://github.com/golang/go/issues/54658](https://github.com/golang/go/issues/54658)

## CVE-2022-32190: JoinPath does not strip relative path components in all circumstances

This fixes the issue in `net/url` package.

`JoinPath()` doesn't remove `../` path components appended to a domain that is not terminated by a slash. 

This could conceivably lead to a directory traversal attack. 

The result of `JoinPath()` shouldn't depend on whether the first component is `/` terminated or not.

```
fmt.Println(url.JoinPath("https://go.dev", "../x"))  // https://go.dev/../x
fmt.Println(url.JoinPath("https://go.dev/", "../x")) // https://go.dev/x
```

[Shi0n](https://twitter.com/cs1rt) reported this issue. 

## Other bug fixes 

Apart from the above security issues, this release addressed few issues related to the `compiler`, the `go` command, the `pprof` command, the `runtime`, and the `crypto/tls` and `encoding/xml`packages

Here is the list minor bugs fixed in this release.

[Go 1.19.1 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.19.1+label%3ACherryPickApproved)

[Go 1.18.6 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.6+label%3ACherryPickApproved)

## Update to Go 1.19.1 version

Use the below download link to update to Go 1.19.1 version

[https://golang.org/dl/#go1.19.1](https://golang.org/dl/#go1.19.1)


or through command prompt 

```
>go get golang.org/dl/go1.19.1
>go1.17.13 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.1\go1.19.1.windows-amd64.zip ...
Success. You may now run 'go1.19.1'
```

Now to check the version use the below command

```
>go1.19.1 version
go version go1.19.1 windows/amd64
```

## Update to Go 1.18.6 version

Use the below download link to update to Go 1.18.6 version

[https://golang.org/dl/#go1.18.6](https://golang.org/dl/#go1.18.6)

or through command prompt 

```
>go get golang.org/dl/go1.18.6
>go1.18.6 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.6\go1.18.6.windows-amd64.zip ...
Success. You may now run '1.18.6'
```

Now to check the version use the below command

```
>go1.18.6 version
go version go1.18.6 windows/amd64
```



## Official Announcement

The official announcement

[https://groups.google.com/g/golang-announce/c/x49AQzIVX-s/m/0tgO0pjiBQAJ](https://groups.google.com/g/golang-announce/c/x49AQzIVX-s/m/0tgO0pjiBQAJ)

