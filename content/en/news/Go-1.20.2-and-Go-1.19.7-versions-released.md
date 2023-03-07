+++
title = "Go 1.20.2 and Go 1.19.7 versions are released"
date = "2023-03-07T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.20.2 and Go 1.19.7 on 07-03-2022."
draft = "false"
link = "Go 1.20.2 and Go 1.19.7"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.20.2` and `Go 1.19.7` on 07-03-2023.

As part of these releases, `Go` language team fixed following minor security issue.

1. **CVE-2023-24532**: `crypto/elliptic`: incorrect P-256 `ScalarMult` and `ScalarBaseMult` results.


## CVE-2023-24532: `crypto/elliptic`: incorrect P-256 `ScalarMult` and `ScalarBaseMult` results.

The `ScalarMult` and `ScalarBaseMult` methods of the P256 Curve may return an incorrect result if called with some specific unreduced scalars (a scalar larger
than the order of the curve).

This does not impact usages of `crypto/ecdsa` or `crypto/ecdh`.

This issue reported by [Guido Vranken](https://twitter.com/GuidoVranken) as part of Ethereum Foundation bug bounty program.

This issue tracked by CVE-2023-24532.

For more details visit following github issue.

[https://github.com/golang/go/issues/58647](https://github.com/golang/go/issues/58647)

The following commit fixes the issue. 

[https://go-review.googlesource.com/c/go/+/471256](https://go-review.googlesource.com/c/go/+/471256)

## Update to Go 1.20.2 version

Use the below download link to update to Go 1.20.2 version

[https://golang.org/dl/#go1.20.2](https://golang.org/dl/#go1.20.2)


or through command prompt 

```
>go get golang.org/dl/go1.20.2
>go1.20.2 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.20.2\go1.20.2.windows-amd64.zip ...
Success. You may now run 'go1.20.2'
```

Now to check the version use the below command

```
>go1.20.2 version
go version go1.20.2 windows/amd64
```

## Update to Go 1.19.7 version

Use the below download link to update to Go 1.19.7 version

[https://golang.org/dl/#go1.19.7](https://golang.org/dl/#go1.19.7)

or through command prompt 

```
>go get golang.org/dl/go1.19.7
>go1.19.7 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.7\go1.19.7.windows-amd64.zip ...
Success. You may now run '1.19.7'
```

Now to check the version use the below command

```
>go1.19.7 version
go version go1.19.7 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-dev/c/3wmx8i5WvNY/m/AEOlccrGAwAJ](https://groups.google.com/g/golang-dev/c/3wmx8i5WvNY/m/AEOlccrGAwAJ)

