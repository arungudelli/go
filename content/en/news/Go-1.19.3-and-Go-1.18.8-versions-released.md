+++
title = "Go 1.19.3 and Go 1.18.8 versions are released"
date = "2022-11-02T00:00:00+00:00"
description = "Go language team at Google released two minor versions Go 1.19.3 and Go 1.18.8 on 04-10-2022."
draft = "false"
link = "Go 1.19.3 and Go 1.18.8"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

`Go` language team at Google released two minor versions `Go 1.19.3` and `Go 1.18.8` on 01-11-2022.

As part of these release, `Go` language team fixed following security issue.

1. **CVE-2022-41716**: `syscall`, `os/exec`: unsanitized NUL in environment variables


## CVE-2022-41716: `syscall`, `os/exec`: unsanitized NUL in environment variables

This includes security fixes to the `os/exec` and `syscall` packages.

On Windows, `syscall.StartProcess` and `os/exec.Cmd` did not properly check for invalid environment variable values. 

A malicious environment variable value could exploit this behavior to set a value for a different environment variable. 

For example, the environment variable string `"A=B\x00C=D"` set the variables `"A=B" and "C=D"`.

The issue is reported by [RyotaK](https://twitter.com/ryotkak).

For more details visit following github issue.

[https://github.com/golang/go/issues/56284](https://github.com/golang/go/issues/56284)
## Other fixes

Here is the list minor bugs fixed in this release.

[Go 1.19.3 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.19.3+label%3ACherryPickApproved)

[Go 1.18.8 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.8+label%3ACherryPickApproved)

## Update to Go 1.19.3 version

Use the below download link to update to Go 1.19.3 version

[https://golang.org/dl/#go1.19.3](https://golang.org/dl/#go1.19.3)


or through command prompt 

```
>go get golang.org/dl/go1.19.3
>go1.19.3 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.19.3\go1.19.3.windows-amd64.zip ...
Success. You may now run 'go1.19.3'
```

Now to check the version use the below command

```
>go1.19.3 version
go version go1.19.3 windows/amd64
```

## Update to Go 1.18.8 version

Use the below download link to update to Go 1.18.8 version

[https://golang.org/dl/#go1.18.8](https://golang.org/dl/#go1.18.8)

or through command prompt 

```
>go get golang.org/dl/go1.18.8
>go1.18.8 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.8\go1.18.8.windows-amd64.zip ...
Success. You may now run '1.18.8'
```

Now to check the version use the below command

```
>go1.18.8 version
go version go1.18.8 windows/amd64
```

## Official Announcement

The official announcement

[https://groups.google.com/g/golang-nuts/c/_LWRvyo8-Ak/m/xNRjr2iRCQAJ](https://groups.google.com/g/golang-nuts/c/_LWRvyo8-Ak/m/xNRjr2iRCQAJ)

