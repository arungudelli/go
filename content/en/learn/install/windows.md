---
title: "How to Download & install Go Language in Windows OS"
description: "Learn How to setup go programming language in Windows OS Environment"
date: 2020-09-05T14:09:21+09:00
draft: false
type: docs
link: "Windows"
weight: -300
---

To download and install Go language in Windows OS follow the below steps.

## Download Go language MSI

Download Go language `.MSI` file from official [golang website](https://golang.org/dl/go1.15.1.windows-amd64.msi)

Open the MSI and it will Open Go programming language installation setup wizard, click on Next Button

![Go installation Wizard](/images/install/goInstall1.PNG)

And then it will open end user license agreement, I know most of them won't read them click on accept and proceed with the next steps.

![Go end user license agreement](/images/install/goInstall2.PNG)

In the next step it will ask for Go programming language installation folder.

## Select Go language Installation Location

The default installation location of Go programming Language in Windows is "C:\Go".

![Go Language Location](/images/install/goinstalllocation.PNG)

If you are beginner and don't know much above environment variables etc.. do not change the installation folder keep it as is. As our goal is to learn the go language not the setup.

## Go language Installation Process

Click on Next button it will start the installation process 

![Go Installation Process](/images/install/golanginstallprocess.PNG)

If everything is Ok you should see "Completed the go programming language setup wizard" popup. 

![Go Installation Completed](/images/install/golanginstallFinish.PNG).

## Verify Go language Installation

After the successful installation, verify the go programming language installation.

Open the command prompt and run `go version` command.

```
> go version
go version go1.15.1 windows/amd64
```

If command prompt is already opened, close it and restart the command prompt.

![Go Installation Verification](/images/install/goVerify.PNG).
