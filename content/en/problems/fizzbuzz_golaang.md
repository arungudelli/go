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

We are implementing the conditions according to the problem byusing if else ladder.


#include <iostream>                    //iostream is a header file which contains basic input/output functions.
using namespace std;

int main() {
    int N;                             //Declaring variables a and b as double.
    cin >> N;                          //Taking input of a and b.
    string answer[N+1];

    for (int i = 1; i <= N; i++)       //for loop to iterate from 1 to N
    {
        if(i%3 == 0 && i%5 == 0)       //if i is divisible by 3 and 5
            answer[i] = "FizzBuzz";  
        else if(i%3 == 0)              //if i is divisible by 3
            answer[i] = "Fizz";
        else if(i%5 == 0)              //if i is divisible by 5
            answer[i] = "Buzz";
        else                           //if none of the above conditions are true
            answer[i] = to_string(i);
    }

    for (int i = 1; i <=N; i++)        //printing the answer array
        cout << answer[i] << endl;
    
    
    return 0;                           //Return 0 to indicate that the program ended successfully.
    //End of program
}

Time Complexity : O(N)
Space complexity : O(1)


## Summary

This is the most optimal approach forthe problem.