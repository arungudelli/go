---
title: "FizzBuzz Golang #34"
description: "Given an integer n, return a string array answer (1-indexed) where:
                answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
                answer[i] == "Fizz" if i is divisible by 3.
                answer[i] == "Buzz" if i is divisible by 5.
                answer[i] == i (as a string) if none of the above conditions are true."
lead: ""
date: 2022-10-08T11:40:56+01:00
lastmod: 2022-01-25T11:40:56+01:00
draft: false
images: []
type: docs
toc: true
---

## Problem Statment 
     "Given an integer n, return a string array answer (1-indexed) where:
                answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
                answer[i] == "Fizz" if i is divisible by 3.
                answer[i] == "Buzz" if i is divisible by 5.
                answer[i] == i (as a string) if none of the above conditions are true."



## Approach  :

We are implementing the conditions according to the problem by using if else ladder.

    func fizzBuzz(n int) []string {
    
      var ans = make([]string, n)                 //Declaring variables ans as array of string of size n.

      for i := 1; i <= n; i ++ {                  //for loop to iterate from 1 to N
          if i % 15 == 0 {                        //if i is divisible by 3 and 5 i.e. by 15
              ans[i - 1] = "FizzBuzz"
          } 
          else if i % 3 == 0 {                  //if i is divisible by 3 
              ans[i - 1] = "Fizz"
          } 
          else if i % 5 == 0 {                  //if i is divisible by 5
              ans[i - 1] = "Buzz"
          } 
          else {                                //if none of the above conditions are true      
              ans[i - 1] = strconv.FormatInt(int64(i), 10)
          }
      }
      return ans
    }


Time Complexity : O(N)

Space complexity : O(1)


## Summary

This is the most optimal approach for the problem.
