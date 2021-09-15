package com.erik.gameintegration

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader
import com.erik.gameintegration.entity.EmbedGame
import com.erik.gameintegration.entity.Game
import com.erik.gameintegration.entity.WebGame

class WebViewActivity : AppCompatActivity() {

    private var webView: WebView? = null
    private var game: Game? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web_view)
        webView = findViewById(R.id.webview)
        game = intent.getParcelableExtra<Game>(GAME_EXTRA)
        applyWebViewSetting()
        loadWebView(getGameUrl())
    }

    private fun applyWebViewSetting() {
        webView?.let {
            WebView.setWebContentsDebuggingEnabled(true)

            val assetLoader = WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
                .build()

            if (game is EmbedGame) {
                it.webViewClient = LocalContentWebViewClient(assetLoader)
            } else if (game is WebGame) {
                it.webViewClient = WebViewClient()
            }

            val webSettings = it.settings
            webSettings.allowFileAccess = false
            webSettings.allowContentAccess = false
            webSettings.javaScriptEnabled = true
            webSettings.domStorageEnabled = true
            it.addJavascriptInterface(JSBridge(), "JSBridge")
            it.webChromeClient = WebChromeClient()
        }
    }

    private fun loadWebView(url: String) {
        webView?.loadUrl(url)
    }

    private fun getGameUrl(): String {
        game?.let {
            if (it is EmbedGame) {
                return getEmbedGameUrl(it.path, it.fileExtension)
            } else if (it is WebGame) {
                return it.url
            }
        }
        return ""
    }

    private fun getEmbedGameUrl(path: String, fileExtension: String): String {
        return "$ASSETS_PATH/$path/$ASSETS_GAME_INDEX.$fileExtension"
    }

    override fun onPause() {
        super.onPause()
        webView?.onPause()
    }

    override fun onResume() {
        super.onResume()
        webView?.onResume()
    }

    override fun onDestroy() {
        super.onDestroy()
        webView?.destroy()
    }

    companion object {
        const val GAME_EXTRA = "game"
        const val ASSETS_PATH = "https://appassets.androidplatform.net/assets"
        const val ASSETS_GAME_INDEX = "index"
    }
}