---
title: " 3 ways to Check if two strings are anagrams in Go"
description: "Different ways to check if two strings are anagrams or not in Go language"
lead: ""
date: 2022-01-25T14:40:56+01:00
lastmod: 2022-01-25T14:40:56+01:00
draft: false
images: []
type: docs
---

In this Tutorial we will write a `Go` program to check if two string are anagrams are not. 

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

## Problem Statement 

Given two strings `source` and `target`, write a `Go` function to check whether the given strings are anagrams of each other or not. 

If both are anagrams return `true` else `false`.

Examples of Anagrams are 

```
//Example 1

Input: source = "anagram", target = "nagaram"
Output: true

// Example 2

Input: source = "below", target = "elbow"
Output: true

// Example 3

Input: source = "study", target = "dusty"
Output: true

// Example 4

Input: source = "night", target = "thing"
Output: true

// Example 5

Input: source = "act", target = "cat"
Output: true

```

## Approach 1: Using Sorting

To check if strings are anagram of each other in `Go`, we can sort the both strings then check they are equal or not.

### Algorithm 

1. Check if both string lengths are equal or not, if they are not then return `false`.
2. Sort both strings. 
3. Then check if two strings are equal or not. If both are equal then the strings are anagrams,return `true`. 

There is no built in function to sort the string in `Go`. 

So we need to convert string to `[]rune` or `[]byte` and then use `sort.Slice()` function to sort the array. 

Finally loop through both arrays using `for`, check if each character is equal are not. 

If all characters are equal return `true` else return `false`.

```go

func CheckIfStringsAreAnagram(source string, target string) bool {
    
    // Basic use case check both strings length
    if len(source)!=len(target) {
        return false
    }
    
    // sort source & target arrays
	sourceArray := []rune(source)
	sort.Slice(sourceArray, func(i, j int) bool {
		return sourceArray[i] < sourceArray[j]
	})
	targetArray := []rune(target)
	sort.Slice(targetArray, func(i, j int) bool {
		return targetArray[i] < targetArray[j]
	})

    // Loop through the arrays and check character by character 
    for i := 0; i < len(sourceArray); i++ {
		if sourceArray[i] != targetArray[i] {
			return false
		}
	}
	return true
}
```

If you convert to `[]byte` array, we can use `bytes.Equal()` function in `Go` to check if both arrays are equal or not.

```go
func CheckIfStringsAreAnagram(s string, t string) bool {
    
    //Example
    if len(s)!=len(t) {
        return false
    }
    
	// sort source & target arrays
	sourceArray := []byte(s)
	sort.Slice(sourceArray, func(i, j int) bool {
		return sourceArray[i] < sourceArray[j]
	})
	targetArray := []byte(t)
	sort.Slice(targetArray, func(i, j int) bool {
		return targetArray[i] < targetArray[j]
	})

    return bytes.Equal(sourceArray,targetArray)    
    
}
```

### Complexity

**Time Complexity:**

The Time complexity of the above solution is `O(n)`. 

Where `n` is the length of the string.

**Space Complexity:**

The space complexity is `O(1)`.

## Approach 2: Using Alphabets Frequency Counter 

As both strings contains only alphabets, we can count the occurrences of each character in two strings and then compare the count.

### Algorithm 

1. Check if both strings length equal or not.
2. Create two counter arrays for both strings, as they contain only alphabets we can create arrays with size `26`.
3. Then count the occurrences of each letter and store them in corresponding arrays.
4. Finally compare both arrays count. If both arrays counts are equal then strings are anagram return `true` else return `false`.

```go

func CheckIfStringsAreAnagram(source string, target string) bool {
    
    //Example
    if len(source)!=len(target) {
        return false
    }
    
    var sourceAlphabetCounter [26]int
    var targetAlphabetCounter [26]int 

    for i := 0; i < len(source); i++ {
		sourceAlphabetCounter[source[i]-'a']++
        targetAlphabetCounter[target[i]-'a']++
	}
    
    for j := 0; j < len(sourceAlphabetCounter); j++{
        if(sourceAlphabetCounter[j]!=targetAlphabetCounter[j]){
            return false;
        }
    }

    return true; 
}

```

To understand further print both `sourceAlphabetCounter` and `targetAlphabetCounter` arrays is using `Golang`'s `fmt.Println()` function.

```go

// CheckIfStringsAreAnagram("anagram", "nagaram")
fmt.Println(sourceAlphabetCounter)
fmt.Println(targetAlphabetCounter)

/**
[3 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0]
[3 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0]
**/
```

Do we really need two counter arrays? **No**

Instead we can create only one counter array, then increase the count of each character in one string i.e, `source` and decrease the count of character in other string i.e.,`target`.

And if all values in the counter array are zero, then **both strings are anagrams**.

```go

func CheckIfStringsAreAnagram(source string, target string) bool {
    
    if len(source)!=len(target) {
        return false
    }
    
    var alphabetCounter [26]int; 
    
    for i := 0; i < len(source); i++ {
		alphabetCounter[source[i]-'a']++;
        alphabetCounter[target[i]-'a']--;
	}
        
    for j := 0; j < len(alphabetCounter); j++{
        if(alphabetCounter[j]!=0){
            return false;
        }
    }
    
    return true;
    
}

```

### Complexity

**Time Complexity is `O(n)`**

Where `n` is the length of the string.

**Space Complexity is `O(1)`**

## Approach 3: Using Hash Table

If strings contains unicode characters, we cannot use fixed size integer array. 

Instead of that we should Hash table for the counters.  

`Go` has a built-in `map` type that implements a hash table.

So we will create two `map` variables to store the counters of both strings, then compare the both counts.

```go
func CheckIfStringsAreAnagram(s string, t string) bool {
    
    if len(s) != len(t) {
        return false
    }
    
    sourceMap := make(map[rune]int)
	targetMap := make(map[rune]int)
    
	for _, letter := range s {
		sourceMap[letter]++
	}

	for _, letter := range t {
		targetMap[letter]++
	}

    for letter, sourceCount := range sourceMap {
       
		if targetCount, ok := targetMap[letter]; !ok || sourceCount != targetCount {
			return false
		}
	}

    return true
}
```

## Summary

We learnt different ways to check if two strings are anagrams or not in `Go` language. 

1. Use frequency counter approach as it's simple and easy to understand.
2. Use Hash table approach if the strings contains unicode characters. 

