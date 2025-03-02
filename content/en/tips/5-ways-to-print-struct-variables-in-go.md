+++
title = "5 Ways to Print Struct Variables in Go"
date = "2025-02-28T00:00:00+00:00"
description = "In this blog post, we'll explore 5 different ways to print struct variables in Go with examples"
draft = "false"
link = "Print Struct Variables"
authorurl="https://www.arungudelli.com/"
images=["images/PrintingStructVariables.webp"]

+++

In the Go programming language, structs are a powerful way to group related data together. 

Often, you may need to print struct variables for debugging or logging purposes. 

In this blog post, we'll explore 5 different ways to print struct variables in Go with examples.

{{< figure
  process="fill 2100x900"
  lqip="21x webp q20"
  loading="lazy"
  fetchpriority="auto" 
  sizes="auto"
  src="images/PrintingStructVariables.webp"
  alt="Print Struct Variables"
  caption="Print Struct Variables"
>}}


## 1.Using `fmt.Println`

One of the simplest ways to print a struct in Go is by using the `fmt` package. 

The `fmt.Println` function prints the struct with its default formatting.

```go
package main

import (
	"fmt"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	p := Person{Name: "Arun", Age: 25}
	fmt.Println(p) // Default formatting
}

```

**Output** 

```
{Arun 25}
```

## 2.Using `fmt.Printf`

If you want better formatting, and want more control over the output format while printing struct variables, we can use `fmt.Printf` with format verbs.

Go provides several format verbs that can be used to print structs in different ways.

1. `%v` - Prints the struct in its default format.
2. `%+v` - Prints the struct with field names.
3. `%#v` - Prints the struct in Go syntax representation.
4. `%T` - Prints the type of the struct.

### `%v` - Prints the struct in its default format 

The `%v` verb prints the struct using its default format without field names.

**Example:**

```go
fmt.Printf("Default format: %v\n", p)
```

**Output:**
```
Default format: {Arun 25}
```

### `%+v` - Prints the struct with field names.

The `%+v` verb prints the struct with field names included.

**Example:**

```go
fmt.Printf("With field names: %+v\n", p)
```

**Output:**
```
With field names: {Name:Arun Age:25}
```

### `%#v` - Prints the struct in Go syntax representation.

The `%#v` verb prints the struct in a Go syntax-like representation.

**Example:**

```go
fmt.Printf("Go syntax representation: %#v\n", p)
```
**Output:**
```
Go syntax representation: main.Person{Name:"Arun", Age:25}
```

### `%T` - Prints the type of the struct

The `%T` verb prints the type of the struct.

**Example:**

```go
fmt.Printf("Type of struct: %T\n", p)
```
**Output:**
```
Type of struct: main.Person
```

## 3.Using `json.Marshal` for JSON Representation

If you want to print the struct in JSON format, you can use the `encoding/json` package.

**Example:**

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	p := Person{Name: "Arun", Age: 25}
	jsonData, _ := json.Marshal(p)
	fmt.Println(string(jsonData))
}
```
**Output:**
```
{"name":"Arun","age":25}
```

For pretty-printed JSON:

```go
jsonData, _ := json.MarshalIndent(p, "", "  ")
fmt.Println(string(jsonData))
```
**Output:**
```
{
  "name": "Arun",
  "age": 25
}
```

## 4.Using `reflect` Package for Field-Level Details

If you need to print struct field names dynamically, the `reflect` package is useful.

**Example:**

```go
package main

import (
	"fmt"
	"reflect"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	p := Person{Name: "Arun", Age: 25}
	val := reflect.ValueOf(p)
	typeOfStruct := val.Type()

	for i := 0; i < val.NumField(); i++ {
		fmt.Printf("%s: %v\n", typeOfStruct.Field(i).Name, val.Field(i).Interface())
	}
}
```

**Output:**

```
Name: Arun
Age: 25
```

## 5.Implementing a Custom `String()` Method

Another approach is implementing the `String()` method for a struct. This lets you control the output format when the struct is printed.

**Example:**

```go
package main

import (
	"fmt"
)

type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("Person{Name: %s, Age: %d}", p.Name, p.Age)
}

func main() {
	p := Person{Name: "Arun", Age: 25}
	fmt.Println(p) // Calls the String() method
}
```

**Output:**
```
Person{Name: Arun, Age: 25}
```

## Conclusion

Printing struct variables in Go can be done in multiple ways, depending on your needs. 

The `fmt` package provides simple printing, while `json.Marshal` is useful for structured output. 

The `reflect` package allows dynamic introspection, and a custom `String()` method provides full control over formatting. 

Use these techniques based on your requirements to debug and log data effectively in Go!