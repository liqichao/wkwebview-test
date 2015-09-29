//
//  ViewController.swift
//  ios-test
//
//  Created by 其超 李 on 15/9/29.
//  Copyright © 2015年 其超 李. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKScriptMessageHandler {
    @IBOutlet var containerView: UIView! = nil
    var webView: WKWebView?
    //隐藏顶部的状态栏
    override func prefersStatusBarHidden() -> Bool {
        return true;
    }
    
    override func loadView() {
        super.loadView()
        let contentController = WKUserContentController();
        let userScript = WKUserScript(
            source: "redHeader()",
            injectionTime: WKUserScriptInjectionTime.AtDocumentEnd,
            forMainFrameOnly: true
        )
        contentController.addUserScript(userScript)
        contentController.addScriptMessageHandler(
            self,
            name: "callbackHandler"
        )
        
        let config = WKWebViewConfiguration()
        config.userContentController = contentController
        
        self.webView = WKWebView(
            frame: self.containerView.bounds,
            configuration: config
        )
        self.view = self.webView!
    }
    
    override func viewDidLoad() {
        super.viewDidLoad();
        let url = NSURL(string:"http://localhost:8888/index.html")
        let req = NSURLRequest(URL:url!)
        self.webView!.loadRequest(req)
    }
    
    func userContentController(userContentController: WKUserContentController, didReceiveScriptMessage message: WKScriptMessage) {
        if(message.name == "callbackHandler") {
            print("JavaScript is sending a message \(message.body)")
        }
    }
    
}
