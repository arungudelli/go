+++
title = "4 methods to check or find type of an Object or Variable in Go"
date = "2020-09-05T14:09:21+09:00"
description = "To check or find the type of variable or object in Go language, we can use %T string format flag, reflect.TypeOf, reflect.ValueOf.Kind functions.And another method is to use type assertions with switch case"
draft = "false"
link = "Find Type of a varibale or object"
authorurl="https://www.arungudelli.com/"

+++

To check or find the type of variable or object in Go language, we can use %T string format flag, reflect.TypeOf, reflect.ValueOf.Kind functions. 

And another method is to use type assertions with switch case.

We will go through all four methods to check or find the type of variable and understand advantages and disadvantages of each and every method.

## Using %T string formatting flag

We can use %T string formatting flag to get type of variable in Go.

This is the simplest way to check of find the type of variable in Go language.

'%T' flag is part of "fmt" package, we can use it along with fmt.Printf to display the type of variable.

```
package main

import (
	"fmt"
)

func main() {

	var count int = 42
	var message string = "go find type"
	var isCheck bool = true
	var amount float32 = 10.2

	fmt.Printf("variable count=%v is of type %T \n", count, count)
	fmt.Printf("variable message='%v' is of type %T \n", message, message)
	fmt.Printf("variable isCheck='%v' is of type %T \n", isCheck, isCheck)
	fmt.Printf("variable amount=%v is of type %T \n", amount, amount)
}

//OutPut

variable count=42 is of type int
variable message='go find type' is of type string
variable isCheck='true' is of type bool
variable amount=10.2 is of type float32

```

## Using reflect package's functions

If the above method is not useful, or If you want to get more information about variable type, we can use Go's reflect package functions TypeOf and ValueOf().Kind() functions.

### reflect.TypeOf() method 

If we pass variable value to relect.TypeOf() method it will returns the type of the variable.

Even we can pass direct values intead of variables to the TypeOf() method as shown below.

```
fmt.Printf("%v", reflect.TypeOf(10))
//int
fmt.Printf("%v", reflect.TypeOf("Go Language"))
//string

```

Here is the complete example with different types of variables like int, string, float and boolean using relect.TypeOf()method.

```
package main

import (
	"fmt"
	"reflect"
)

func main() {

	var days int = 42
	var typemessage string = "go find type"
	var isFound bool = false
	var objectValue float32 = 10.2

	fmt.Printf("variable days=%v is of type %v \n", days, reflect.TypeOf(days))
	fmt.Printf("variable typemessage='%v' is of type %v \n", typemessage, reflect.TypeOf(typemessage))
	fmt.Printf("variable isFound='%v' is of type %v \n", isFound, reflect.TypeOf(isFound))
	fmt.Printf("variable objectValue=%v is of type %v \n", objectValue, reflect.TypeOf(objectValue))
}

//OUTPUT 

variable days=42 is of type int
variable typemessage='go find type' is of type string
variable isCheck='false' is of type bool
variable amount=10.2 is of type float32
variable acounts=Savings is of type string

```

### reflect.ValueOf().Kind() method 

In the same way we can use reflect package ValueOf method to get the type of variable.

In Go language, reflect.ValueOf() returns a new value initialized to the passed variable and further by accessing Kind() we can get the variable type.

```
package main

import (
	"fmt"
	"reflect"
)

func main() {

	var days int = 42
	var typemessage string = "go find type"
	var isFound bool = false
	var objectValue float32 = 10.2

	fmt.Printf("variable days=%v is of type %v \n", days, reflect.ValueOf(days).Kind())
	fmt.Printf("variable typemessage='%v' is of type %v \n", typemessage, reflect.ValueOf(typemessage).Kind())
	fmt.Printf("variable isFound='%v' is of type %v \n", isFound, reflect.ValueOf(isFound).Kind())
	fmt.Printf("variable objectValue=%v is of type %v \n", objectValue, reflect.ValueOf(objectValue).Kind())
}

//OUTPUT 

variable days=42 is of type int
variable typemessage='go find type' is of type string
variable isCheck='false' is of type bool
variable objectValue=10.2 is of type float32

```

The disadvantage of this approach is we need to export reflect package which might increase the memory footprint.

## Using Type assertions

Other method to find type of an object is to use Type assertions in Go language.

We will write a method called `typeofObject` in go program as shown below.

```
func typeofObject(variable interface{}) string {
	switch variable.(type) {
	case int:
		return "int"
	case float32:
		return "float32"
	case bool:
		return "boolean"
	case string:
		return "string"
	default:
		return "unknown"
	}
}

fmt.Println("Using type assertions")
fmt.Println(typeofObject(count))
fmt.Println(typeofObject(message))
fmt.Println(typeofObject(isCheck))
fmt.Println(typeofObject(amount))

//OUTPUT
Using type assertions
int
string
boolean
float64	
```

The advantage of this approach is we can group the types, for example we can identify all int32, int64, uint32, uint64 types as "int". 

## Writing our own function to check the type of an object or variable

By using Type assertions we can write our own re-usable function to check the type an object or variable as shown below.

```
// Using %T 
func typeofObject(variable interface{}) string {
   return fmt.Sprintf("%T", variable)
}

// Using reflect.TypeOf()
func typeofObject(variable interface{}) string {
    return reflect.TypeOf(variable).String()
}

// Using reflect.ValueOf().Kind()
func typeofObject(variable interface{}) string {
	return reflect.ValueOf(variable).Kind().String()
}
```

Now we can use above re-usable functions to find out the type of a variable as shown below

```
fmt.Println(typeofObject(count))
fmt.Println(typeofObject(message))
fmt.Println(typeofObject(isCheck))
fmt.Println(typeofObject(amount))

//OUTPUT
Using type assertions
int
string
boolean
float64	
```