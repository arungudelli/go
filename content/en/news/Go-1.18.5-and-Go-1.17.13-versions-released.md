+++
title = "Go 1.18.5 and Go 1.17.13 versions released"
date = "2022-08-01T00:00:00+00:00"
description = "Golang team at Google released Go 1.18.5 and Go 1.17.13 versions"
draft = "false"
link = "Go 1.18.5 and Go 1.17.13"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Golang team at Google released Go 1.18.5 and Go 1.17.13 versions.

As part of this minor release, Go language team addressed following security issue. 

1.  CVE-2022-32189: math/big: index out of range in Float.GobDecode.

## CVE-2022-32189: math/big: index out of range in Float.GobDecode

This includes security fixes to the `encoding/gob` and `math/big` packages.

Decoding big.Float and big.Rat types can panic if the encoded message is too short.

The issue is found by [https://github.com/catenacyber/ngolo-fuzzing](https://github.com/catenacyber/ngolo-fuzzing) on oss-fuzz [https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=49120](https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=49120).

Have a look at the Github issue for more details.

[https://github.com/golang/go/issues/53871](https://github.com/golang/go/issues/53871)


## Other bug fixes 

Here is the list minor bugs fixed in this release.

[Go 1.18.5 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.5+label%3ACherryPickApproved)

[Go 1.17.13 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.17.13+label%3ACherryPickApproved)



## Update to Go 1.18.5 version

Use the below download link to update to Go 1.18.5 version

[https://golang.org/dl/#go1.18.5](https://golang.org/dl/#go1.18.5)

or through command prompt 

```
>go get golang.org/dl/go1.18.5
>go1.18.5 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.5\go1.18.5.windows-amd64.zip ...
Success. You may now run '1.18.5'
```

Now to check the version use the below command

```
>go1.18.5 version
go version go1.18.2 windows/amd64
```

## Update to Go 1.17.13 version

Use the below download link to update to Go 1.17.13 version

[https://golang.org/dl/#go1.17.13](https://golang.org/dl/#go1.17.13)


or through command prompt 

```
>go get golang.org/dl/go1.17.13
>go1.17.13 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.17.13\go1.17.13.windows-amd64.zip ...
Success. You may now run 'go1.17.13'
```

Now to check the version use the below command

```
>go1.17.13 version
go version go1.17.13 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-announce/c/YqYYG87xB10/m/NzQjeXshBAAJ](https://groups.google.com/g/golang-announce/c/YqYYG87xB10/m/NzQjeXshBAAJ)

