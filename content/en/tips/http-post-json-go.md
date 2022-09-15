+++
title = "How to Make HTTP POST JSON request in Go"
date = "2021-01-23T14:09:21+09:00"
description = "Golang's net/http package is used to make HTTP requests in Go.The HTTP POST method used to send data to a server and in most of the cases the data will be in JSON format."
draft = "false"
link = "http post json"
enableToc = false
image= "images/featured/golangpostimage.png"
authorurl="https://www.arungudelli.com/"

+++

Golang's `net/http` package is used to make HTTP requests in Go.

The HTTP POST method used to send data to a server and in most of the cases the data will be in JSON format.

And this JSON data used to create or update the resources in server.

Follow the below steps to do **HTTP POST JSON DATA** request in Go.

1. Create a Http POST request using `http.NewRequest` method.
2. The first parameter indicates HTTP request type i.e., "POST"
3. Second parameter is URL of the post request.
4. And the third parameter in request data i.e., JSON data.
5. Set HTTP request header `Content-Type` as `application/json`.
6. Finally create a client and make the post request using `client.Do(request)` method.

I am using a third party REST API url `https://reqres.in/api/users` to fake the the HTTP POST request.

```
package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	httpposturl := "https://reqres.in/api/users"
	fmt.Println("HTTP JSON POST URL:", httpposturl)

	var jsonData = []byte(`{
		"name": "morpheus",
		"job": "leader"
	}`)
	request, error := http.NewRequest("POST", httpposturl, bytes.NewBuffer(jsonData))
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")

	client := &http.Client{}
	response, error := client.Do(request)
	if error != nil {
		panic(error)
	}
	defer response.Body.Close()

	fmt.Println("response Status:", response.Status)
	fmt.Println("response Headers:", response.Header)
	body, _ := ioutil.ReadAll(response.Body)
	fmt.Println("response Body:", string(body))

}

```

Output is 

```
HTTP JSON POST URL: https://reqres.in/api/users
response Status: 201 Created
response Headers: map[Access-Control-Allow-Origin:[*] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[6167ada2be02df63-BOM] Cf-Request-Id:[07d4aad9b60000df63df042000000001] Content-Length:[83] Content-Type:[application/json; charset=utf-8] Date:[Sun, 24 Jan 2021 06:25:37 GMT] Etag:[W/"53-AuXRBddlOJaeCFjFckDyLLrMRu0"] Expect-Ct:[max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"] Nel:[{"report_to":"cf-nel","max_age":604800}] Report-To:[{"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report?s=awWZk%2BZp9R6PLPo0wa0jjvGMltNXgC8XMuKFbnYHCLX4i2cmFj2mqPAzvLLAEvREprP92R1jMue3BhwHp%2FLwTFrcTwqJWiuRqaY%3D"}],"max_age":604800,"group":"cf-nel"}] Server:[cloudflare] Set-Cookie:[__cfduid=d064b0f3cca9f4857b616742822738eeb1611469537; expires=Tue, 23-Feb-21 06:25:37 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure] Via:[1.1 vegur] X-Powered-By:[Express]]
response Body: {"name":"morpheus","job":"leader","id":"80","createdAt":"2021-01-24T06:25:37.917Z"}
```