package com.erik.gameintegration

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebView
import androidx.webkit.WebViewAssetLoader
import com.erik.gameintegration.entity.EmbedGame
import com.erik.gameintegration.entity.Game
import com.erik.gameintegration.entity.WebGame

class WebViewActivity : AppCompatActivity() {

    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web_view)
        webView = findViewById(R.id.webview)
        applyWebViewSetting()
        loadWebView(getGameUrl())
    }

    private fun applyWebViewSetting() {
        webView?.let {
            WebView.setWebContentsDebuggingEnabled(true)

            val assetLoader = WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
                .build()
            it.webViewClient = LocalContentWebViewClient(assetLoader)

            val webSettings = it.settings
            webSettings.allowFileAccess = false
            webSettings.allowContentAccess = false
            webSettings.javaScriptEnabled = true
            webSettings.domStorageEnabled = true
            it.webChromeClient = WebChromeClient()
        }
    }

    private fun loadWebView(url: String) {
        webView?.loadUrl(url)
    }

    private fun getGameUrl(): String {
        val game = intent.getParcelableExtra<Game>(GAME_EXTRA)
        if (game is EmbedGame) {
            return getEmbedGameUrl(game.path, game.fileExtension)
        } else if (game is WebGame) {
            return game.url
        }
        return ""
    }

    private fun getEmbedGameUrl(path: String, fileExtension: String): String {
        return "https://appassets.androidplatform.net/assets/$path/index.$fileExtension"
    }

    companion object {
        const val GAME_EXTRA = "game"
        const val ASSETS_PATH = "https://appassets.androidplatform.net/assets/"
        const val ASSETS_GAME_INDEX = "/index."
    }
}