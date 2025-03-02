+++
title = "Go 1.19.2 and Go 1.18.7 versions are released"
date = "2022-10-04T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.19.2 and Go 1.18.7 on 04-10-2022."
draft = "false"
link = "Go 1.19.2 and Go 1.18.7"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.19.2` and `Go 1.18.7` on 04-10-2022.

As part of these releases, `Go` language team fixed following security issues.

1. **CVE-2022-2879**: `archive/tar`: unbounded memory consumption when reading headers
2. **CVE-2022-2880**: `net/http/httputil`: ReverseProxy should not forward unparseable query parameters
3. **CVE-2022-41715**:`regexp/syntax`: limit memory used by parsing regexps

## CVE-2022-2879: `archive/tar`: unbounded memory consumption when reading headers

This includes security fixes to the `archive/tar` package.

`Reader.Read` did not set a limit on the maximum size of file headers.

A maliciously crafted archive could cause Read to allocate unbounded amounts of memory, potentially causing resource exhaustion or panics.

`Reader.Read` now limits the maximum size of header blocks to 1 MiB.

The issue is reported by [Adam Korczynski](https://mobile.twitter.com/adamkorcz4).

For more details visit following github issue.

[https://github.com/golang/go/issues/54853](https://github.com/golang/go/issues/54853)

## CVE-2022-2880: `net/http/httputil`: ReverseProxy should not forward unparseable query parameters

This fixes the issue in `net/http/httputil` package.

Requests forwarded by ReverseProxy included the raw query parameters from the inbound request, including unparseable parameters rejected by `net/http`. 

This could permit query parameter smuggling when a Go proxy forwards a parameter
with an unparseable value.

ReverseProxy will now sanitize the query parameters in the forwarded query when the outbound request's Form field is set after the ReverseProxy.

Director function returns, indicating that the proxy has parsed the query parameters.

Proxies which do not parse query parameters continue to forward the original query parameters unchanged.

The issue is reported by [Gal Goldstein](https://www.linkedin.com/in/gal-goldshtein) and [Daniel Abeles](https://twitter.com/Daniel_Abeles) both are security researchers at [Oxeye](https://twitter.com/OxeyeSecurity).

For more details visit following github issue.

[https://github.com/golang/go/issues/54663](https://github.com/golang/go/issues/54663)

## CVE-2022-41715:`regexp/syntax`: limit memory used by parsing regexps

The parsed regexp representation is linear in the size of the input,but in some cases the constant factor can be as high as 40,000, making relatively small regexps consume much larger amounts of memory.

Each regexp being parsed is now limited to a 256 MB memory footprint.

Regular expressions whose representation would use more space than that are now rejected. 

Normal use of regular expressions is unaffected.

The issue is reported by [Adam Korczynski](https://mobile.twitter.com/adamkorcz4).

For more details visit following github issue.

[https://github.com/golang/go/issues/55949](https://github.com/golang/go/issues/55949)

## Other fixes

Here is the list minor bugs fixed in this release.

[Go 1.19.2 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.19.2+label%3ACherryPickApproved)

[Go 1.18.7 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.7+label%3ACherryPickApproved)

## Update to Go 1.19.2 version

Use the below download link to update to Go 1.19.2 version

[https://golang.org/dl/#go1.19.2](https://golang.org/dl/#go1.19.2)


or through command prompt 

```
>go get golang.org/dl/go1.19.2
>go1.19.2 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.2\go1.19.2.windows-amd64.zip ...
Success. You may now run 'go1.19.2'
```

Now to check the version use the below command

```
>go1.19.2 version
go version go1.19.2 windows/amd64
```

## Update to Go 1.18.7 version

Use the below download link to update to Go 1.18.7 version

[https://golang.org/dl/#go1.18.7](https://golang.org/dl/#go1.18.7)

or through command prompt 

```
>go get golang.org/dl/go1.18.7
>go1.18.7 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.7\go1.18.7.windows-amd64.zip ...
Success. You may now run '1.18.7'
```

Now to check the version use the below command

```
>go1.18.7 version
go version go1.18.7 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-announce/c/xtuG5faxtaU/m/jEhlI_5WBgAJ](https://groups.google.com/g/golang-announce/c/xtuG5faxtaU/m/jEhlI_5WBgAJ)

