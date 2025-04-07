+++
title = "🚀 Go 1.24.2 & 1.23.8 Released – Patch Alert for `net/http`"
date = "2025-04-07T00:00:00+00:00"
lastmod = "2025-04-07T00:00:00+00:00"
description = "Go just dropped 1.24.2 and 1.23.8 — both are minor point releases"
draft = "false"
link = "Go 1.24.2 and Go 1.23.8"
image= "images/featured/golangpostimage.png"
enableToc= true

+++

Go just dropped **1.24.2** and **1.23.8** — both are minor point releases, but they come with an important **security fix in the `net/http` package**. If your Go apps deal with HTTP (which... let’s be honest, most of them do), you’ll want to update.

---

## 🩹 What’s Fixed?

### 🔐 Request Smuggling via Invalid Chunked Data

In some cases, Go's `net/http` package accepted **malformed chunked transfer-encoded data**, specifically chunk-size lines that end with a bare `\n` instead of the proper `\r\n`.

This behavior could open the door for **request smuggling** attacks when used with certain proxies or servers that misinterpret chunk extensions.

#### ✅ Fixed Behavior:
Go now properly **rejects** chunk-size lines with a bare `LF`.

- **CVE:** [CVE-2025-22871](https://go.dev/issue/71988)
- **Reported by:** Jeppe Bonde Weikop (huge thanks!)

---

## 📦 Go 1.24.2

### 🔧 How to update:
If you're on the latest stable track:

- **Download binaries/source:**  
  👉 [https://go.dev/dl/#go1.24.2](https://go.dev/dl/#go1.24.2)

- **Using Git clone:**
  ```bash
  git checkout go1.24.2
  ./make.bash
  ```

- **Release Notes:**  
  [go1.24.2 changelog](https://go.dev/doc/devel/release#go1.24.2)

---

## 📦 Go 1.23.8

Still on the 1.23 branch? No worries — the fix is backported there too.

### 🔧 How to update:
- **Download binaries/source:**  
  👉 [https://go.dev/dl/#go1.23.8](https://go.dev/dl/#go1.23.8)

- **Using Git clone:**
  ```bash
  git checkout go1.23.8
  ./make.bash
  ```

- **Release Notes:**  
  [go1.23.8 changelog](https://go.dev/doc/devel/release#go1.23.8)

---

## ⚠️ Should You Update?

**Yes — absolutely.** If your app accepts HTTP requests and you're using the built-in `net/http` package, it's time to patch up.

Even if you *think* your setup isn’t affected, defense-in-depth matters. Always better to fix a known issue than leave the door cracked open.

---

## 🙌 Final Notes

Shoutout to the Go team and contributors for keeping the language rock-solid and secure 💙

Happy patching, and keep coding safely out there!  
— A fellow Gopher 🐹