+++
title = "3 ways to Check if a map contains a key in Go"
date = "2022-07-13T00:09:21+09:00"
description = "Steps to check if a map contains a key in Go or Golang,1. Index the map with the given key. 2. When we index a map in Go, we will get two return values.3. First return value contains the value and the second return value is a boolean that indicates if the key exists or not"
draft = "false"
link = "Check if a map contains a key"
image= "images/featured/golangpostimage.png"
enableToc = true
authorurl="https://www.arungudelli.com/"

+++

There are three ways to check if a key exists in a Go map or check if a map contains a key in Go language.

1. Using `Go` `map` index notation 
2. Using `if` statement 
3. Using `if` statement and `blank` identifier 

## Using `Go` `map` index notation

Here are the Steps to check if a map contains a key in `Golang` using index notation

1. Index the map with the given key.
2. When we index a `map` in `Go`, we will get two return values.
3. First return value contains the value and the second return value is a boolean that indicates if the key exists or not.

We will go through an example to understand it further.

```
package main

import (
	"fmt"
)

func main() {

	//creating a map
	goMap := map[string]int{"key1": 100, "key2": 200, "key3": 300}

	//Indexing the map with the key.
	value, isMapContainsKey := goMap["key2"]
	//isMapContainsKey will be true if the key contains in goMap
	if isMapContainsKey {
		//key exist
		fmt.Println("Map contains the key and the value is =  ", value)
	} else {
		//key does not exist
		fmt.Println("Map does not contains the key")
	}
}

```

Now we will run the program.

```
go run check-if-map-contains-key.go

//OUTPUT
Map contains the key and the value is 200
```

The above code snippet is more readable and easy to understand.

There are two other ways where we can verify if a key exists in a `Golang map` as mentioned above.

## Using `if` statement

The `if` statement in `Go` can contain both condition and an initialization statement. 

We can rewrite the the above code into one single `if` statement as shown below.

```
if value, isMapContainsKey := goMap["key"]; isMapContainsKey {
		//key exist
		fmt.Println("Map contains the key and the value is =  ", value)
	} else {
		//key does not exist
		fmt.Println("Map does not contains the key")
}

//OUTPUT
Map does not contains the key.
```

## Using `if` statement and `blank` identifier

If your purpose is to check only **if the `map` contains key** and if you don't care about the value, you can use the `blank` identifier (_"underscore variable") in place of first return value (i.e., value variable).

```
if _ , isMapContainsKey := goMap["key2"]; isMapContainsKey {
		//key exist
		fmt.Println("Map contains the key")
	} else {
		//key does not exist
		fmt.Println("Map does not contains the key")
}

//OUTPUT
Map contains the key
```

## Recommended solution by `Go` Language Team

`Go` language team suggested to use single line `if` statement to check if a key exists in a `map` as described in second solution.  

```
if value, isMapContainsKey := goMap["key"]; isMapContainsKey {
		//key exist
		fmt.Println("Map contains the key and the value is =  ", value)
	} else {
		//key does not exist
		fmt.Println("Map does not contains the key")
}
```
