+++
title = "Go 1.17.7 and Go 1.16.14 versions released"
date = "2022-02-10T00:00:00+09:00"
description = "Golang team at Google released Go 1.17.7 and Go 1.16.14 versions."
draft = "false"
link = "Go 1.17.7 and Go 1.16.14"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Golang team at Google released Go 1.17.7 and Go 1.16.14 versions.

As part of this minor release, Golang team addressed three security issues. 

1. CVE-2022-23806-crypto/elliptic: fix IsOnCurve for big.Int values that are not valid coordinates
2. CVE-2022-23772-math/big: prevent large memory consumption in Rat.SetString
3. CVE-2022-23773-cmd/go: prevent branches from materializing into versions

## CVE-2022-23806 - crypto/elliptic: fix IsOnCurve for big.Int values

This fix addressed a security issue CVE-2022-23806, [#50974](https://github.com/golang/go/issues/50974) reported by [Guido Vranken](https://twitter.com/guidovranken). 

The following commit fixes this issue. 

[https://github.com/golang/go/commit/e16331902340c02bdf1831b5508df2307b871ef6](https://github.com/golang/go/commit/e16331902340c02bdf1831b5508df2307b871ef6)

## CVE-2022-23772 - math/big: prevent large memory consumption in Rat.SetString

This fix addressed a security issue CVE-2022-23772, [#50699](https://github.com/golang/go/issues/50699) reported by [Emmanuel Odeke](https://twitter.com/odeke_et) while working on OSS-Fuzz project.

Emmanuel Odeke previously reported a security issue CVE-2021-39293, which is fixed as part of [Go 1.17.1 and Go 1.16.8 versions](https://golangtutorial.dev/news/go-1.17.1-and-go-1.16.8-versions-released/) release.

The following commit fixes this issue.

[https://github.com/golang/go/commit/539d430efb5043cc6a2d4d4fcd2866b11717039a](https://github.com/golang/go/commit/539d430efb5043cc6a2d4d4fcd2866b11717039a)

## CVE-2022-23773 - cmd/go: prevent branches from materializing into versions 

This fix addressed a security issue CVE-2022-23773, [#35671](https://github.com/golang/go/issues/35671).

The following commit fixes this issue.

[https://github.com/golang/go/commit/fbcc30a2c9d076b27b4b411e2cec91ec13528081](https://github.com/golang/go/commit/fbcc30a2c9d076b27b4b411e2cec91ec13528081)

## Update to Go 1.17.14 version

Use the below download link to update to Go 1.17.14 version

[https://golang.org/dl/#go1.17.14](https://golang.org/dl/#go1.17.14)

or through command prompt 

```
>go get golang.org/dl/go1.17.14
>go1.17.14 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.17.14\go1.17.14.windows-amd64.zip ...
Success. You may now run 'go1.17.14'
```

Now to check the version use the below command

```
>go1.17.14 version
go version go1.17.14 windows/amd64
```

## Update to Go 1.16.14 version

Use the below download link to update to Go 1.16.14 version

[https://golang.org/dl/#go1.16.14](https://golang.org/dl/#go1.16.14)


or through command prompt 

```
>go get golang.org/dl/go1.16.14
>go1.16.14 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.16.14\go1.16.14.windows-amd64.zip ...
Success. You may now run 'go1.16.14'
```

Now to check the version use the below command

```
>go1.16.14 version
go version go1.16.14 windows/amd64
```

The official announcement

[https://groups.google.com/g/golang-dev/c/89UpoWO48zM/m/rK8jq_BGEQAJ](https://groups.google.com/g/golang-dev/c/89UpoWO48zM/m/rK8jq_BGEQAJ)

