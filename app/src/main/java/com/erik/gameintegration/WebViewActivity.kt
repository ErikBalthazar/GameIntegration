package com.erik.gameintegration

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader

class WebViewActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web_view)

        val gamePath = intent.getStringExtra("game")

        val webView = findViewById<WebView>(R.id.webview)
        WebView.setWebContentsDebuggingEnabled(true)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()
        webView.webViewClient = LocalContentWebViewClient(assetLoader)

        val webSettings = webView.settings
        webSettings.allowFileAccess = false
        webSettings.allowContentAccess = false
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webView.webChromeClient = WebChromeClient()

        webView.loadUrl("https://appassets.androidplatform.net/assets/$gamePath/index.html")
    }
}