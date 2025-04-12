+++
title = "Multiline Strings in Golang: A Learning Experience"
date = "2021-01-23T14:09:21+09:00"
lastmod = "2025-04-12T00:00:00+00:00"
description = "Go provides two ways to handle multiline strings 1. Backticks 2.Double Quotes"
draft = "false"
link = "multiline strings"
enableToc = false
image= "images/featured/golangpostimage.png"
author="arungudelli"
+++

Recently, while learning Golang, I encountered a situation where I needed to store a large block of text within my code. 

Initially, I started with a normal string but quickly realized that managing newlines and formatting was becoming cumbersome. 

This led me to explore how multiline strings work in Go, and I decided to write a detailed article about it for others who might run into the same problem.

## Multiline Strings in Go

As I started exploring, I found that Go provides two ways to handle multiline strings:

1. **Backticks (`) – Raw String Literals**
2. **Double Quotes ("") – Interpreted String Literals**

### Started with the Simple Backtick Approach (`)

Initially, I tried using backticks, as they seemed the most straightforward way to write a multiline string in golang. 

This method preserves the original formatting, including newlines and spaces, which made my text blocks much easier to read.

```go
package main

import "fmt"

func main() {
    message := `This is a
multiline string
in Golang.`
    fmt.Println(message)
}
```

**Output:**
```
This is a
multiline string
in Golang.
```

Backticks turned out to be incredibly useful when dealing with:

- **Multiline text** that must maintain its format
- **SQL queries**
- **HTML or JSON templates**
- **Code snippets or scripts**

### Learning About Double Quotes ("") for Escape Sequences

While backticks worked great for most use cases, I soon realized that sometimes I needed escape sequences like `\n` for line breaks or `\t` for tab spacing. 

This led me to explore using double quotes instead.

```go
package main

import "fmt"

func main() {
    message := "This is a \nmultiline string \nin Golang."
    fmt.Println(message)
}
```

**Output:**
```
This is a 
multiline string 
in Golang.
```

I found that:

- **Backticks (`) are best for preserving formatting.**
- **Double quotes (") are useful when you need escape sequences** like `\n`, `\t`, or `\"`.

## Real-World Use Cases of multiline string in Go

### 1. Storing SQL Queries

One of the first practical usage of multiline strings in golang is embedding SQL queries in my Go code. 

Using backticks made them much more readable and maintainable.

```go
query := `SELECT id, name
FROM users
WHERE active = true
ORDER BY name ASC;`
fmt.Println(query)
```

### 2. Embedding JSON/XML

Sometimes in our daily projects we need to work with JSON data. 

Instead of escaping every newline and quote, we can use backticks, which kepts data well-formatted.

```go
jsonData := `{
    "name": "Arun",
    "age": 25,
    "city": "Hyderabad"
}`
fmt.Println(jsonData)
```

### 3. Creating HTML Templates

When I started generating HTML dynamically, I realized that backticks were a game-changer.

They kept my templates intact and easy to modify.

```go
htmlContent := `<html>
<head><title>Welcome</title></head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`
fmt.Println(htmlContent)
```

### 4. Storing Configuration Data

As I built out more functionality, I needed to store configuration settings inside my code. 

Using multiline strings made them much easier to read.

```go
config := `{
    "server": "localhost",
    "port": 8080
}`
fmt.Println(config)
```

### 5. Writing Documentation or Markdown

Eventually, I needed to store documentation text within my code, and using backticks made writing and formatting Markdown much simpler.

```go
doc := `# Golang Multiline Strings
- Use backticks for raw strings.
- Use double quotes for escape sequences.`
fmt.Println(doc)
```

## Conclusion

What started as a small exploration turned into a valuable lesson in handling strings in Go. 

I initially relied on backticks, but soon realized that double quotes also had their place when escape sequences were needed. 

This learning experience simplified my code, especially when dealing with structured text like SQL queries, JSON data, and HTML templates.

If you're working with large text blocks in Go, I highly recommend experimenting with both approaches. 

Have you found an interesting use case for multiline strings? Let me know—I’d love to hear about it!