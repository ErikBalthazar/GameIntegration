package com.erik.gameintegration

import android.util.Log
import android.webkit.JavascriptInterface

class JSBridge {
    @JavascriptInterface
    fun showMessageInNative(message:String){
        Log.i("AAAAAAAAAAAAAAAA", message)
    }
}