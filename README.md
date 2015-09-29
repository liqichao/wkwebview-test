# wkwebview-test
update kinderas's blog to swift 2.0

#Hi
This is a demo of wkwebview in iOS(from 8.0). I read Kinderas's blog, and tried what he says. But it won't work in Swift 2.0.
So I update the source code. If you want to check the original blog, please go to:

http://www.kinderas.com/technology/2014/6/7/getting-started-with-wkwebview-using-swift-in-ios-8
http://www.kinderas.com/technology/2014/6/15/wkwebview-and-javascript-in-ios-8-using-swift

Big THANKS To Kinderås!!

#How to use
#Step1
Start a sever to run the page(index.html) in wkdemo folder.(I think you could also just load the page without a server. But you need to get a local file path by yourself,cheers)

#Step2
Change the url in iOS project - > ViewController.swift. By default it is http://localhost:8888/index.html , I use MAMP as a server. It is pretty neat.<br/>
<code>let url = NSURL(string:<strong>"http://localhost:8888/index.html"</strong>)</code>

#Step3
It works!


