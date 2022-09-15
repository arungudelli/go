---
title: "Write JSON to a file"
description: "Different methods by which we can write JSON dta to a file in Python"
date: "2022-08-02T04:15:05+09:00"
draft: false
link: "Write JSON to a file"
author: "dmohanty"
---

## Introduction

JSON stands for JavaScript Object Notation. It is a `file` (precisely a script file) that is written as text but in a programming language. It is one of the mostly used and popular formats for _data serialization_. It is a very lightweight and moreover, a very human friendly format. You would mostly encounter with this data format while working with REST APIs, config files setup etc.

## Overview of JSON

Since JSON is a very popular format for data transfer, there is barely a question of python not having a module to manage json file and data.

Python has an in-built package **“JSON”** which can be imported and used without reluctance to manage json data.
JSON data is quite similar to that of dictionaries in python.

Here also , we have to add text in _quoted-string_ like the key value mapping between {}.

Mentioning about data serialization, it is method that can be used transform data into a series of bytes to be transferred across networks.

Example of a JSON data:

```
{
	“details”: [
		{
			“name”: “John Doe”,
			“age”: 18,
			“phonenumber”: “123456789”
        },
		{
			“name”: “Lorem Ipsum”,
			“age”: 20,
			“phonenumber”: “789654123”
        }
    ],
}

```

## Using the json.dump() method

`dump()` is an inbuilt method of the JSON package that directly writes a dictionary to a file in the `json` format without actually converting it to a json format.
It generally takes _two params_:

- Dictionary: The first parameter is the name of the dictionary that we want to convert to a json
- File pointer: Pointer of the file that is to be written.
  Let’s have a look on the demo example:

```
import json

dicti = {
    "name": "John Doe",
    "roll": 25,
    "phonenumber": "123456789"
}

with open("test.json", "w") as outfile:
    json.dump(dicti, outfile)

```

Output:

Our test.json file is now loaded with the following data

```
{"name": "John Doe", "roll": 25, "phonenumber": "123456789"}
```

After the above program execution, we can clearly see that data is loaded onto our desired json file but the problem being the data doesn’t look _beautified_ and _easily readable_. So let’s see if we can fix this issue by using our next method.

## Using the json.dumps() method

Using the `dump()` method is quite easy because of its synchronous syntax, but what if we first convert the dictionary to json data manually and then write it to the file.

For that we can use the `dumps()` method that comes with the default **JSON** library and easily convert our data to a `json` object and then writing the converted data to a file.

```
import json

dicti = {
    "name": "John Doe",
    "rollno": 20,
    "phonenumber": "741258963"
}

obj = json.dumps(dicti, indent=4)

with open("test.json", "w") as outfile:
    outfile.write(obj)

```

Output:

Now our test.json file is loaded with data

```
{
    "name": "John Doe",
    "rollno": 20,
    "phonenumber": "741258963"
}

```

## Conclusion

Coming to the end of this short article, we first looked upon the basics of what JSON is and how we can access json data using Python.

Later on we discussed two methods of the inbuilt JSON library inside of Python and discussed about the usage , implementation and output of both the methods, and as a conclusion we can perceive that `dumps()` method provides us with a _more efficient_, easily readable format inside of the JSON file.
