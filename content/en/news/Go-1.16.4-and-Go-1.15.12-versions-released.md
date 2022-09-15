+++
title = "Go 1.16.4 and Go 1.15.12 versions are released"
date = "2021-05-07T00:00:00+09:00"
description = "Golang team at Google released Go 1.16.4 and Go 1.15.12 versions."
draft = "false"
link = "Go 1.16.4 and Go 1.15.12"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Golang team at Google released Go 1.16.4 and Go 1.15.12 versions.

As part of this releases, Go Language team addressed a security fix according to the new security ploicy.
[#44918](https://github.com/golang/go/issues/44918)

And also it fixes the issue [#45710](https://golang.org/issue/45710) reported by [Guido Vranken](https://twitter.com/GuidoVranken) as part of [Ethereum 2.0 bounty program](https://ethereum.org/en/eth2/get-involved/bug-bounty).

ReadRequest and ReadResponse in net/http can hit an unrecoverable panic when reading a very large header (over 7MB on 64-bit architectures, or over 4MB on 32-bit ones). 

Transport and Client are vulnerable and the program can be made to crash by a malicious server.  

Server is not vulnerable by default, but can be if the default max header of 1MB is overridden by setting `Server.MaxHeaderBytes` to a higher value, in which case the program can be made to crash by a malicious client.

This also affects [golang.org/x/net/http2/h2c](http://golang.org/x/net/http2/h2c) and `HeaderValuesContainsToken` in [golang.org/x/net/http/httpguts](golang.org/x/net/http/httpguts), and is fixed in [golang.org/x/net@v0.0.0-20210428140749-89ef3d95e781](golang.org/x/net@v0.0.0-20210428140749-89ef3d95e781).


## Update to Go 1.16.4 version

Use the below download link to update to Go 1.16.4 version

[https://golang.org/dl/#go1.16.4](https://golang.org/dl/#go1.16.4)

## Update to Go 1.15.12 version

Use the below download link to update to Go 1.15.12 version

[https://golang.org/dl/#go1.15.12](https://golang.org/dl/#go1.15.12)

The official announcement

[https://groups.google.com/g/golang-dev/c/XZVx6Q9HzM4/m/x9KoRl0zBwAJ?pli=1](https://groups.google.com/g/golang-dev/c/XZVx6Q9HzM4/m/x9KoRl0zBwAJ?pli=1)

