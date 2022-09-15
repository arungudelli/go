+++
title = "Go 1.18.2 and Go 1.17.10 versions released"
date = "2022-05-10T00:00:00+09:00"
description = "Golang team at Google released Go 1.18.2 and Go 1.17.10 versions"
draft = "false"
link = "Go 1.18.2 and Go 1.17.10"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Golang team at Google released Go 1.18.2 and Go 1.17.10 versions.

As part of this minor release, Golang team addressed following security issue. 

1. CVE-2022-29526: `syscall.Faccessat()` function fix on Linux

Apart from the above security issue. This minor release includes bug fixes to the `compiler, runtime, the go command, and the crypto/x509, go/types, net/http/httptest, reflect, and sync/atomic` packages.

## CVE-2022-29526: `syscall.Faccessat()` function fix on Linux

This fix addressed a security issue CVE-2022-29526. 

The `syscall.Faccessat` function checks whether the calling process can access a file.

`Faccessat` contains a bug where it checks a file's group permission bits if the process's user is a member of the process's group rather than a member of the file's group.

```
 if uint32(gid) == st.Gid || isGroupMember(gid) { 
 }
```

Since a process's user is usually a member of the process's group, this causes `Faccessat` to usually check a file's group permissions even if the process's user is not a member of the file's group.

This issue is reported by Joël Gähwiler(@256dpi). [twitter](https://twitter.com/256dpi), [github](https://github.com/256dpi).

The following commit fixes this issue.

[https://go-review.googlesource.com/c/go/+/401079/2/src/syscall/syscall_linux.go](https://go-review.googlesource.com/c/go/+/401079/2/src/syscall/syscall_linux.go).

Corresponding github issue.

[https://github.com/golang/go/issues/52313](https://github.com/golang/go/issues/52313)


## Other bug fixes 

Here is the list minor bugs fixed in this release.

[ Go 1.18.2 milestone](https://github.com/golang/go/issues?q=milestone%3AGo1.18.2+label%3ACherryPickApproved)

## Update to Go 1.18.2 version

Use the below download link to update to Go 1.18.2 version

[https://golang.org/dl/#go1.18.2](https://golang.org/dl/#go1.18.2)

or through command prompt 

```
>go get golang.org/dl/go1.18.2
>go1.18.2 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.18.2\go1.18.2.windows-amd64.zip ...
Success. You may now run '1.18.2'
```

Now to check the version use the below command

```
>go1.18.2 version
go version go1.18.2 windows/amd64
```

## Update to Go 1.17.10 version

Use the below download link to update to Go 1.17.10 version

[https://golang.org/dl/#go1.17.10](https://golang.org/dl/#go1.17.10)


or through command prompt 

```
>go get golang.org/dl/go1.17.10
>go1.17.10 download
Downloaded   0.0% (     3275 / 150380150 bytes) ...
Downloaded   0.0% (    32768 / 150380150 bytes) ...
Downloaded   1.6% (  2342896 / 150380150 bytes) ...
Downloaded 100.0% (150380150 / 150380150 bytes)
Unpacking C:\Users\arunkumarg\sdk\go1.17.10\go1.17.10.windows-amd64.zip ...
Success. You may now run 'go1.17.10'
```

Now to check the version use the below command

```
>go1.17.10 version
go version go1.17.10 windows/amd64
```

The official announcement

[https://groups.google.com/g/golang-dev/c/CPU3TB6d4oY/m/vicL6tVoBAAJ?utm_medium=email&utm_source=footer&pli=1](https://groups.google.com/g/golang-dev/c/CPU3TB6d4oY/m/vicL6tVoBAAJ?utm_medium=email&utm_source=footer&pli=1)

