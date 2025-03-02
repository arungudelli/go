+++
title = "Go 1.19.4 and Go 1.18.9 versions are released"
date = "2022-12-06T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.19.4 and Go 1.18.9 on 04-10-2022."
draft = "false"
link = "Go 1.19.4 and Go 1.18.9"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.19.4` and `Go 1.18.9` on 06-12-2022.

As part of these release, `Go` language team fixed two minor security issues.

1. **CVE-2022-41720**: `os`, `net/http`: avoid escapes from `os.DirFS` and `http.Dir` on Windows.
2. **CVE-2022-41717**: `net/http`: limit canonical header cache by bytes, not entries.

This includes security fixes to the `net/http` and `os` packages.

## CVE-2022-41720: `os`, `net/http`: avoid escapes from `os.DirFS` and `http.Dir` on Windows


The `os.DirFS` function and `http.Dir` type provide access to a tree of files rooted at a given directory. 

These functions permitted access to Windows device files under that root. 

For example, `os.DirFS("C:/tmp").Open("COM1")` would open the `COM1` device.

Both `os.DirFS` and `http.Dir` only provide read-only filesystem access.

In addition, on Windows, an `os.DirFS` for the directory `\`(the root of the current drive) can permit a maliciously crafted path to escape from the drive and access any path on the system.

The behavior of `os.DirFS("")` has changed. 

Previously, an empty root was treated equivalently to `"/"`, so `os.DirFS("").Open("tmp")` would open the path `"/tmp"`.

This now returns an error.

For more details visit following github issue.

[https://github.com/golang/go/issues/56694](https://github.com/golang/go/issues/56694)

## CVE-2022-41717: `net/http`: limit canonical header cache by bytes, not entries

An attacker can cause excessive memory growth in a `Go` server accepting `HTTP/2` requests.

`HTTP/2` server connections contain a cache of HTTP header keys sent by the client. 

While the total number of entries in this cache is capped, an attacker sending very large keys can cause the server to allocate approximately 64 MiB per open connection.

This issue is also fixed in `golang.org/x/net/http2`, for users manually configuring `HTTP/2`.

For more details visit following github issue.

[https://github.com/golang/go/issues/56350](https://github.com/golang/go/issues/56350)

[Josselin Costanzi](https://mobile.twitter.com/jossctz) reported this issue.


## Other fixes

Apart from the above fixes these releases includes some bug fixes to the compiler, the runtime, and the `crypto/x509`, `os/exec`, and `sync/atomic` packages.

Here is the list minor bugs fixed in these releases.

[Go 1.19.4 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.19.4+label%3ACherryPickApproved)

[Go 1.18.9 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.9+label%3ACherryPickApproved)

## Update to Go 1.19.4 version

Use the below download link to update to Go 1.19.4 version

[https://golang.org/dl/#go1.19.4](https://golang.org/dl/#go1.19.4)


or through command prompt 

```
>go get golang.org/dl/go1.19.4
>go1.19.4 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.4\go1.19.4.windows-amd64.zip ...
Success. You may now run 'go1.19.4'
```

Now to check the version use the below command

```
>go1.19.4 version
go version go1.19.4 windows/amd64
```

## Update to Go 1.18.9 version

Use the below download link to update to Go 1.18.9 version

[https://golang.org/dl/#go1.18.9](https://golang.org/dl/#go1.18.9)

or through command prompt 

```
>go get golang.org/dl/go1.18.9
>go1.18.9 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.9\go1.18.9.windows-amd64.zip ...
Success. You may now run '1.18.9'
```

Now to check the version use the below command

```
>go1.18.9 version
go version go1.18.9 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-dev/c/G9Jj4cO4Gpk/m/kOkLVG6TAgAJ](https://groups.google.com/g/golang-dev/c/G9Jj4cO4Gpk/m/kOkLVG6TAgAJ)

