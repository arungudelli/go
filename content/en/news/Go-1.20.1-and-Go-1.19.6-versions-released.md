+++
title = "Go 1.20.1 and Go 1.19.6 versions are released"
date = "2023-02-14T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.20.1 and Go 1.19.6 on 04-10-2022."
draft = "false"
link = "Go 1.20.1 and Go 1.19.6"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.20.1` and `Go 1.19.6` on 14-02-2023.

This is the first minor release for [`Go 1.20`](https://golangtutorial.dev/news/go-1.20-version-released/) version. 

As part of these release, `Go` language team fixed 4 minor security issues.

1. **CVE-2022-41722**: `path/filepath`: `path` traversal in `filepath.Clean` on Windows.
2. **CVE-2022-41725**: `net/http`, `mime/multipart`: denial of service from excessive resource consumption.
3. **CVE-2022-41724**: `crypto/tls`: large handshake records may cause panics
4. **CVE-2022-41723**: `net/http`: avoid quadratic complexity in HPACK decoding

## CVE-2022-41722: `path/filepath`: `path` traversal in `filepath.Clean` on Windows.

On Windows, the `filepath.Clean` function could transform an invalid path such as `a/../c:/b` into the valid path `c:\b`.

This transformation of a relative (if invalid) path into an absolute path could enable a directory traversal attack. 

The `filepath.Clean` function will now transform this path into the relative (but still invalid) path `.\c:\b`.

[ryotkak](https://twitter.com/ryotkak) reported this issue.

For more details visit following github issue.

[https://github.com/golang/go/issues/57274](https://github.com/golang/go/issues/57274)

The following commit fixes the issue. 

[https://go-review.googlesource.com/c/go/+/468119/2/src/path/filepath/path.go](https://go-review.googlesource.com/c/go/+/468119/2/src/path/filepath/path.go)

## CVE-2022-41725: `net/http`, `mime/multipart`: denial of service from excessive resource consumption

Multipart form parsing with `mime/multipart.Reader.ReadForm` can consume largely unlimited amounts of memory and disk files. 

This also affects form parsing in the `net/http` package with the Request methods `FormFile`, `FormValue`, `ParseMultipartForm`, and `PostFormValue`.

`ReadForm` takes a `maxMemory` parameter, and is documented as storing "up to maxMemory bytes +10MB (reserved for non-file parts) in memory". 

File parts which cannot be stored in memory are stored on disk in temporary files. 

The un configurable 10MB reserved for non-file parts is excessively large and can potentially open a denial of service vector on its own. 

However, `ReadForm` did not properly account for all memory consumed by a parsed form, such as map entry overhead, part names, and MIME headers, permitting a maliciously crafted form to consume well over 10MB. 

In addition, `ReadForm` contained no limit on the number of disk files created, permitting a relatively small request body to create a large number of disk temporary files.

`ReadForm` now properly accounts for various forms of memory overhead, and should now stay within its documented limit of 10MB + maxMemory bytes of memory consumption. 

Users should still be aware that this limit is high and may still be hazardous.

`ReadForm` now creates at most one on-disk temporary file, combining multiple form parts into a single temporary file. 

The `mime/multipart.File` interface type's documentation states, "If stored on disk, the File's underlying concrete type will be an *os.File.". 

This is no longer the case when a form contains more than one file part, due to this coalescing of parts into a single file. 

The previous behavior of using distinct files for each form part may be reenabled with the environment variable `GODEBUG=multipartfiles=distinct`.

Users should be aware that `multipart.ReadForm` and the `http.Request` methods that call it do not limit the amount of disk consumed by temporary files. 

Callers can limit the size of form data with `http.MaxBytesReader`.

For more details visit following github issue.

[https://github.com/golang/go/issues/58006](https://github.com/golang/go/issues/58006)

Thanks to [Arpad Ryszka](https://github.com/aryszka) and  [Jakob Ackermann](https://github.com/das7pad) for reporting this issue.

The following commit fixes the above issues.

[https://go-review.googlesource.com/c/go/+/468120](https://go-review.googlesource.com/c/go/+/468120)

## CVE-2022-41724: `crypto/tls`: large handshake records may cause panics

Message marshalling makes use of BytesOrPanic a lot, under the assumption that it will never panic. 

This assumption was incorrect, and specifically crafted handshakes could trigger panics. 

Rather than just surgically replacing the usages of BytesOrPanic in paths that could panic, replace all usages of it with proper error returns in case there are other ways of triggering panics which we didn't find.

In one specific case, the tree routed by expandLabel, we replace the usage of BytesOrPanic, but retain a panic. 

This function already explicitly panicked elsewhere, and returning an error from it becomes rather painful because it requires changing a large number of APIs.

The marshalling is unlikely to ever panic, as the inputs are all either fixed length, or already limited to the sizes required. 

If it were to panic, it'd likely only be during development. 

A close inspection shows no paths for a user to cause a panic currently.

This patches ends up being rather large, since it requires routing errors back through functions which previously had no error returns.

Where possible I've tried to use helpers that reduce the verbosity of frequently repeated stanzas, and to make the diffs as minimal as possible.


For more details visit following github issue.

[https://github.com/golang/go/issues/58001](https://github.com/golang/go/issues/58001)

Thanks to [Marten Seemann](https://github.com/marten-seemann) for reporting this issue.

The following commit fixes the above issues.

[https://go-review.googlesource.com/c/go/+/468125](https://go-review.googlesource.com/c/go/+/468125)

## CVE-2022-41723: `net/http`: avoid quadratic complexity in HPACK decoding

A maliciously crafted HTTP/2 stream could cause excessive CPU consumption in the HPACK decoder, sufficient to cause a denial of service from a small number of small requests.

This issue is also fixed in `golang.org/x/net/http2`, for users manually configuring HTTP/2.

Thanks to [Philippe Antoine](https://twitter.com/PhilippeAntoine) for reporting this issue.

For more details visit 

[https://github.com/golang/go/issues/57855](https://github.com/golang/go/issues/57855)

## Update to Go 1.20.1 version

Use the below download link to update to Go 1.20.1 version

[https://golang.org/dl/#go1.20.1](https://golang.org/dl/#go1.20.1)


or through command prompt 

```
>go get golang.org/dl/go1.20.1
>go1.20.1 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.20.1\go1.20.1.windows-amd64.zip ...
Success. You may now run 'go1.20.1'
```

Now to check the version use the below command

```
>go1.20.1 version
go version go1.20.1 windows/amd64
```

## Update to Go 1.19.6 version

Use the below download link to update to Go 1.19.6 version

[https://golang.org/dl/#go1.19.6](https://golang.org/dl/#go1.19.6)

or through command prompt 

```
>go get golang.org/dl/go1.19.6
>go1.19.6 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.6\go1.19.6.windows-amd64.zip ...
Success. You may now run '1.19.6'
```

Now to check the version use the below command

```
>go1.19.6 version
go version go1.19.6 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-dev/c/G2APtTxT1HQ/m/6O6aksDaBAAJ](https://groups.google.com/g/golang-dev/c/G2APtTxT1HQ/m/6O6aksDaBAAJ)

