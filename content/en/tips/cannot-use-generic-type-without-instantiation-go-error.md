+++
title = "Cannot use generic type without instantiation error in Go"
date = "2023-02-15T00:00:21+09:00"
description = "If you forgot to instantiate a generic type you will get `cannot use generic type without instantiation` error in 'Go' language."
draft = "false"
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

Generics are introduced in `Go` 1.18 version.

If the type definition includes type parameters, the type name called as a generic type. 

If you forgot to instantiate a generic type you will get `cannot use generic type without instantiation` error in `Go` language.

```go
type GenericSlice[T any] []T
```

In the above example I have created a genetic type called `GenericSlice` in `Go`. 

We must instantiate Generic types before they used.

A generic type is instantiated by **substituting type arguments** for the type parameters.

```go
g := GenericSlice[any]{} // Instantiation of Generic type
g = append(g, 1)
g = append(g, "golang")

for _, v := range g {
		fmt.Println(v)
}
```

But if you forgot to substitute the type arguments you will get `cannot use generic type without instantiation` error.

```go
g := GenericSlice{} // No substitution of type arguments

//cannot use generic type GenericSlice[T any] without instantiation
```

The proper way to instantiate a generic type is to substituting the type arguments.

```go
//Integer type
gInt := GenericSlice[int]{}

//Float Type
gFloat := GenericSlice[float64]{}
```

To instantiate the `Go` language generic type you can make use of `make()` function as well.

```go
g := make(GenericSlice[any], 0)
```

Again if you miss substituting the type arguments you will get the same error in your `Go` program.

```go
g := make(GenericSlice, 0)
```

Let's go through the summary of the article.

1. In `Go` language, We must instantiate Generic types before they used.
2. A `Go` generic type is instantiated by **substituting type arguments** for the type parameters.
3. If you miss the instantiation you will get `cannot use generic type without instantiation` error in `Go` language.
