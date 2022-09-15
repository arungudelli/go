+++
title = "Go 1.17.1 and Go 1.16.8 versions released"
date = "2021-09-09T00:00:00+09:00"
description = "Golang team at Google released Go 1.17.1 and Go 1.16.8 versions."
draft = "false"
link = "Go 1.17.1 and Go 1.16.8"
image= "images/featured/golangpostimage.png"
enableToc= false

+++



Golang team at Google released Go 1.17.1 and Go 1.16.8 versions.

As part of this releases, Go Language team addressed a security issue CVE-2021-39293, [#47801](https://github.com/golang/go/issues/47801) reported by [Emmanuel Odeke](https://twitter.com/odeke_et) while working on OSS-Fuzz project.

An oversight in the fix for [CVE-2021-33196](https://github.com/golang/go/issues/46242) still allows for an out of memory panic when the indicated directory size in the archive header is so large that subtracting it from the archive size overflows a uint64, effectively bypassing the check that the number of files in the archive is reasonable


The following commit fixes this issue. 
[https://github.com/golang/go/commit/1dd24caf08985066b309af6bc461780c73e05c35](https://github.com/golang/go/commit/1dd24caf08985066b309af6bc461780c73e05c35)

![Golang CVE-2021-39293](/images/Golang-CVE-2021-39293.png)

## Update to Go 1.17.1 version

Use the below download link to update to Go 1.17.1 version

[https://golang.org/dl/#go1.17.1](https://golang.org/dl/#go1.17.1)

or through command prompt 

```
>go get golang.org/dl/go1.17.1
>go1.17.1 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.17.1\go1.17.1.windows-amd64.zip ...
Success. You may now run 'go1.17.1'
```

Now to check the version use the below command

```
>go1.17.1 version
go version go1.17.1 windows/amd64
```

![Go 1.17.1](/images/go1-17-1.png)

## Update to Go 1.16.8 version

Use the below download link to update to Go 1.16.8 version

[https://golang.org/dl/#go1.16.8](https://golang.org/dl/#go1.16.8)


or through command prompt 

```
>go get golang.org/dl/go1.16.8
>go1.16.8 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.16.8\go1.16.8.windows-amd64.zip ...
Success. You may now run 'go1.16.8'
```

Now to check the version use the below command

```
>go1.16.8 version
go version go1.16.8 windows/amd64
```

The official announcement

[https://groups.google.com/g/golang-announce/c/dx9d7IOseHw?pli=1](https://groups.google.com/g/golang-announce/c/dx9d7IOseHw?pli=1)

