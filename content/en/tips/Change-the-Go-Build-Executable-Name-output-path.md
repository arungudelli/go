+++
title = "How to Change the Go Build Executable Binary Name and Output Path (My Learning Experience)"
date = "2025-03-22T00:00:00+00:00"
lastmod = "2025-03-22T00:00:00+09:00"
description = "How to Change the Go Build Executable Name and output path"
draft = "false"
images= ["images/go-build-executable-name-path.webp"]
author="arungudelli"

+++

When I first started using Go, I ran into a surprising question: **how does Go decide what to name the executable when you run `go build`?** 

I thought it was always the folder name, then someone said it's the module name, and others said it's the package name. 

Turns out, it's a bit nuanced — and I wanted to share what I learned through testing and examples.

If you're wondering how to change the name of the executable produced by `go build`, or just want to understand how Go decides it by default, this guide is for you.

{{< figure
  process="fill 2100x900"
  lqip="21x webp q20"
  loading="lazy"
  fetchpriority="auto" 
  sizes="auto"
  src="images/go-build-executable-name-path.webp"
  alt="How to Change the Go Build Executable Name and output path"
  caption="How to Change the Go Build Executable Name and output path"
>}}

## My Initial Confusion

I was working on a small tool and noticed that when I ran `go build`, the resulting executable wasn't always what I expected. 

Sometimes it matched the folder name, other times it was named after the module.

I even thought the `package main` name mattered — but that turned out to be false. 

So I decided to dig in and try multiple setups.

---

## Default Behavior of `go build`

When you run `go build` inside a directory containing a `main` package, Go will compile the code into an executable. 

The name of that executable depends on **where you're building from** and **what files are present**.

### What I Learned:

> If you run `go build` without the `-o` flag, the name of the output binary is:
>
> - The **module name** (from `go.mod`) if `main.go` and `go.mod` are in the same folder.
> - The **directory name** if you're in a subfolder or there's no module.

---

## Folder Name vs. Module Name vs. Package Name

### 1. **Package Name**

This was my first wrong assumption. 

I thought naming the package `main` or something else might affect the binary name.

Turns out, `package main` is just a signal that the file is an executable — it doesn’t influence the name at all.

```go
package main

func main() {
    println("Hello World")
}
```

✅ Required for executables, but ❌ doesn't affect the name.

---

### 2. **Folder Name**

If you're building from a subfolder (like `cmd/tool`), Go uses the **folder name** as the binary name.

#### Example:
```
myproject/
├── cmd/
│   └── tool/
│       └── main.go
```

```bash
$ cd cmd/tool
$ go build
```
Result:
```
tool
```

---

### 3. **Module Name**

Here’s the tricky part. 

If you're in the **root of the module** (where `go.mod` lives) and the folder also contains your `main.go`, Go uses the **module name** as the binary name.

#### Example:
```
$ tree
myproject/
├── go.mod
└── main.go
```

`go.mod`:
```go
module coolapp
```

```bash
$ go build
```
Produces:
```
coolapp
```
Even though the folder is named `myproject`, the executable is `coolapp`.

---

## Changing the Go Executable Name & output path

Eventually, I learned that you can **always change** the executable name using the `-o` flag. 

This is the most reliable way to control the binary name and **output path** — especially useful in **CI/CD pipelines**, build scripts, or any automated deployment workflows where you need consistent, predictable output locations and filenames.

```bash
go build -o mybinary
```

You can also specify a custom **output path** for the binary:

```bash
go build -o ./output/bin/custom-name
```

This flexibility is what I use now in all my build scripts to keep my builds organized and portable.

---

## Real Examples I Tried

### Example 1: Main and go.mod in Same Folder
```bash
$ mkdir app
$ cd app
$ go mod init myapp
```
`main.go`:
```go
package main
func main() { println("Hi") }
```
```bash
$ go build
```
Result: `myapp` ← (from module name)

---

### Example 2: Subdirectory with main.go
```bash
$ mkdir -p tools/logger
$ cd tools/logger
```
Add `main.go`:
```go
package main
func main() { println("Logging") }
```
```bash
$ go build
```
Result: `logger` ← (from folder name)

---

### Example 3: Override with `-o`
```bash
$ go build -o ./bin/logger-tool
```
Result: `bin/logger-tool` ← (custom name I chose)

---

### Example 4: Rename Folder, Module Name Stays
```bash
$ mv app renamed
$ cd renamed
$ go build
```
Result: Still `myapp` ← (from module name in go.mod)

---

## Final Thoughts

Here’s what I now keep in mind when working with `go build`:

| Concept                     | Affects Binary Name? | Example                                          |
|-----------------------------|-----------------------|--------------------------------------------------|
| Package name (`main`)       | ❌ No                | Always must be `main` for executables            |
| Module name (from `go.mod`) | ✅ Sometimes         | If `main.go` is in the same folder as `go.mod`   |
| Folder name                 | ✅ Yes (common case) | Used when building from subdirectories           |
| `-o` flag                   | ✅ Always            | You control it directly                          |

- 🔨 Use `-o` when you want control
- 🧠 `package main` just marks it as an executable
- ⚠️ Module name only affects name in module root folder

Hope this helps you avoid the same confusion I had when starting out. Happy building! 🚀

