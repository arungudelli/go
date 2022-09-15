+++
title = "Vulnerability in golang.org/x/crypto/ssh package has been fixed"
date = "2020-12-13T14:09:21+09:00"
description = "Vulnerability in golang.org/x/crypto/ssh package has been fixed"
draft = "false"
link = "fix in crypto/ssh package"
image= "images/featured/golangpostimage.png"
enableToc= false

+++

Recently Joern Schneeweisz of GitLab Security Research Team discovered a bug in Go language crypto/ssh package.

The ability to trigger the `gssapi-with-mic` authentication method is not properly guarded when `GSSAPIWithMICConfig` field of the ServerConfig type is nil. 

If this field is not set and a client sends a `gssapi-with-mic` request, regardless of if the server advertises it, the server will panic.

The Version v0.0.0-20201216223049-8b5274cf687f of [golang.org/x/crypto](https://golang.org/x/crypto) fixes this vulnerability in the golang.org/x/crypto/ssh package.

Here is the complete details regarding the fix.

[https://github.com/golang/crypto/commit/8b5274cf687fd9316b4108863654cc57385531e8](https://github.com/golang/crypto/commit/8b5274cf687fd9316b4108863654cc57385531e8)

```
if config.GSSAPIWithMICConfig == nil {
				authErr = errors.New("ssh: gssapi-with-mic auth not configured")
				break;
}
```

With the above fix, the package will dissallow the request to call `gssapi-with-mic` if `GSSAPIWithMICConfig` is not set.
