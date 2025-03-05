+++
title = "Go 1.24.1 and Go 1.23.7 are released"
date = "2025-03-05T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.24.1 and Go 1.23.7 on 05-03-2024."
draft = "false"
link = "Go 1.24.1 and Go 1.23.7"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.20.2` and `Go 1.23.7` on 07-03-2023.

As part of these releases, `Go` language team fixed following minor security issue.

1. **CVE-2025-22870**: `net/http`, `x/net/proxy`, `x/net/http/httpproxy`: proxy bypass using IPv6 zone IDs .


## **CVE-2025-22870**: `net/http`, `x/net/proxy`, `x/net/http/httpproxy`: proxy bypass using IPv6 zone IDs.

Matching hosts against proxy patterns could mistakenly interpret an IPv6 zone ID as part of the hostname. 

For instance, if the NO_PROXY environment variable was set to "*.example.com", a request to "[::1%25.example.com]:80" would be incorrectly matched and bypass the proxy.

This issue reported by [Juho Forsén](https://www.linkedin.com/in/jupenur/) who works at Mattermost.

This issue tracked by CVE-2025-22870.

For more details visit following github issue.

[https://go.dev/issue/71984](https://go.dev/issue/71984)

The following commit fixes the issue. 

[https://github.com/golang/go/commit/334de7982f8ec959c74470dd709ceedfd6dbd50a](https://github.com/golang/go/commit/334de7982f8ec959c74470dd709ceedfd6dbd50a)

## Update to Go 1.24.1 version

Use the below download link to update to Go 1.24.1 version

[https://golang.org/dl/#go1.24.1](https://golang.org/dl/#go1.24.1)


or through command prompt 

```
>go get golang.org/dl/go1.24.1
>go1.24.1 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.24.1\go1.24.1.windows-amd64.zip ...
Success. You may now run 'go1.24.1'
```

Now to check the version use the below command

```
>go1.24.1 version
go version go1.24.1 windows/amd64
```

## Update to Go 1.23.7 version

Use the below download link to update to Go 1.23.7 version

[https://golang.org/dl/#go1.23.7](https://golang.org/dl/#go1.23.7)

or through command prompt 

```
>go get golang.org/dl/go1.23.7
>go1.23.7 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.23.7\go1.23.7.windows-amd64.zip ...
Success. You may now run '1.23.7'
```

Now to check the version use the below command

```
>go1.23.7 version
go version go1.23.7 windows/amd64
```

