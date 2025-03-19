---
title: "Fixing Command 'gopls.tidy' failed: go.mod file indicates go 1.17, but maximum supported version is 1.16 in Golang"
description: "Fixing Command 'gopls.tidy' failed: go.mod file indicates go 1.17, but maximum supported version is 1.16 in Golang"
date: 2025-03-04T00:00:00+00:00
lastmod: 2025-03-04T00:00:00+00:01
draft: false
images: ["images/Command-gopls-tidyfailed-go-mod-file-indicates-go-1-17-but-maximum-supported-version-is-1-16.webp"]
toc: true
---

## **Introduction**

If you’re working with **Go modules** and **gopls** (the Go language server) in an older Go development environment, you may encounter the following error when running `go mod tidy` or using a code editor like VS Code with Go plugins:

```
Command 'gopls.tidy' failed: Error: err: exit status 1: stderr: go mod tidy: go.mod file indicates go 1.17, but maximum supported version is 1.16.
```

{{< figure
  process="fill 2100x900"
  lqip="21x webp q20"
  loading="lazy"
  fetchpriority="auto" 
  sizes="auto"
  src="images/Command-gopls-tidyfailed-go-mod-file-indicates-go-1-17-but-maximum-supported-version-is-1-16.webp"
  alt="Fixing Command 'gopls.tidy' failed: go.mod file indicates go 1.17, but maximum supported version is 1.16 in Golang"
  caption="Fixing Command 'gopls.tidy' failed: go.mod file indicates go 1.17, but maximum supported version is 1.16 in Golang"
>}}

This error occurs because your Go toolchain does not support the version specified in `go.mod`. This typically happens when:

1. You're using an **older version of Go** that does not recognize the Go version specified in `go.mod`.
2. `gopls`, the Go language server, is not updated and is incompatible with the Go version in your project.
3. Your **environment variables** may be forcing an older Go version.

In this article, I’ll walk you through **reproducing the issue with a sample Go project**, understanding why it happens, and how to **fix** it.

---

## **Reproducing the Error**
To simulate this error, follow these steps:

### **Step 1: Install an Older Go Version**
To trigger this issue, install **Go 1.16** manually instead of the latest version:

```sh
wget https://go.dev/dl/go1.16.15.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.16.15.linux-amd64.tar.gz
export PATH=/usr/local/go/bin:$PATH
```

Verify the installed version:

```sh
go version
```

You should see:

```
go version go1.16.15 linux/amd64
```

### **Step 2: Create a Sample Go Project**
Now, let's create a Go project that uses **Go 1.17** in `go.mod`.

```sh
mkdir go-mod-error
cd go-mod-error
go mod init example.com/moderror
```

Edit the `go.mod` file to specify Go 1.17:

```go
module example.com/moderror

go 1.17
```

Create a simple `main.go` file:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

### **Step 3: Run `go mod tidy`**
Now, run:

```sh
go mod tidy
```

You'll get the error:

```
go: go.mod file indicates go 1.17, but maximum supported version is 1.16
```

If you're using VS Code with Go tools, you might see this error in the **Output** panel:

```
Command 'gopls.tidy' failed: Error: err: exit status 1: stderr: go mod tidy: go.mod file indicates go 1.17, but maximum supported version is 1.16.
```

---

## **Fixing the Error**

### ✅ **Solution 1: Upgrade Your Go Version**
The most straightforward fix is to update your Go installation to **1.17 or later**.

#### **For Linux/macOS:**
Download and install the latest Go version:

```sh
wget https://go.dev/dl/go1.17.13.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.17.13.linux-amd64.tar.gz
export PATH=/usr/local/go/bin:$PATH
```

#### **For Windows:**
1. Download the latest Go version from [Go's official website](https://go.dev/dl/).
2. Install it using the MSI installer.
3. Restart your terminal and verify using:

   ```sh
   go version
   ```

Once updated, re-run:

```sh
go mod tidy
```

### ✅ **Solution 2: Downgrade `go.mod` to Match Installed Go**
If upgrading Go isn't an option (e.g., due to compatibility issues), modify the `go.mod` file to match your installed Go version.

Change:

```go
go 1.17
```

To:

```go
go 1.16
```

Then, run:

```sh
go mod tidy
```

This ensures compatibility with your installed Go version.

### ✅ **Solution 3: Update `gopls` (Go Language Server)**
If you're using VS Code or another editor, an outdated `gopls` version might be causing issues.

Update `gopls`:

```sh
go install golang.org/x/tools/gopls@latest
```

Then, restart your editor and check if the error persists.

### ✅ **Solution 4: Set the Correct Go Version in Your Environment**
If you're using **multiple Go versions** (e.g., with `gvm` or `goenv`), ensure you're using the correct version.

List installed versions:

```sh
go env | grep GOROOT
```

If it's pointing to an old version, update it:

```sh
export GOROOT=/usr/local/go
export PATH=$GOROOT/bin:$PATH
```

For **Go Version Manager (`gvm`)**:

```sh
gvm list
gvm use go1.17
```

Verify:

```sh
go version
```

---

## **Conclusion**
This error occurs because your **installed Go version does not support the version specified in `go.mod`**. The best fix is to **update Go** to match or exceed the required version. If upgrading isn't feasible, you can **downgrade your project’s Go version** or **update the Go language server (`gopls`)**.

By following the steps above, you can quickly resolve the issue and continue developing without interruptions.

---

Let me know if you need further clarification! 🚀