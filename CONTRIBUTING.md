# Contributing to https://golangtutorial.dev/

After successful submission you will get author profile in our website [https://golangtutorial.dev/]. 

Post credit will be given to you only.

## Clone golang tutorial 

```
git clone https://github.com/arungudelli/go.git
```

And navigate to the root folder then type the below command 

```
npm install

```
Then run the site using below command.

```
npm run start
```

The site should be running on 

```
http://localhost:1313/
```


## Find the issue 

Fork the repository and create pull request

**It's not simply writing the programs write the detailed explaination about the soultion, so that it will be helpful to others**

Have a look at the string anagram problem 

Structure : [https://github.com/arungudelli/go/blob/main/content/en/problems/string-anagram-go.md](https://github.com/arungudelli/go/blob/main/content/en/problems/string-anagram-go.md)

[https://golangtutorial.dev/problems/string-anagram-go/](https://golangtutorial.dev/problems/string-anagram-go/)

1. Add a new mark down file `(.md)` file with the issue name, For example `two-sum-problem.md` inside `content/en/problems/` folder.
2. Start the file with the below HUGO markup 
3. And starting with the problem statement explain the different ways to solve the problem in Go.
4. Starting with brute force method to optimal solution mention time complexity and space complexity if applicable.

Here is the template of the file

```
---
title: "Two Sum Problem in Go"
description: ""
lead: ""
date: 2022-01-25T14:40:56+01:00
lastmod: 2022-01-25T14:40:56+01:00
draft: false
images: []
type: docs
toc: true
---

## Problem Statment 

## Approach 1 : (like example Brute force)

Algorithm or approach explanation

Use simple english to explain the soultion.

Then write Go code 

Add Time Complexity and Space complexity (if applicable)

## Approach 2: 

Algorithm or approach explanation

Use simple english to explain the soultion.

Then write Go code 

Add Time Complexity and Space complexity (if applicable)

## Summary

Give summary of different approaches and optimal soultion

```

A problem may have multiple approaches try to add different approaches.  
 
