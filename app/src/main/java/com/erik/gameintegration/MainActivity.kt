package com.erik.gameintegration

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.webkit.WebViewAssetLoader

class MainActivity : AppCompatActivity(), GameAdapter.GameViewHolder.Callback.Click  {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val gameList = ArrayList<Game>()
        gameList.add(Game("Multitouch", "multitouch"))
        gameList.add(Game("Save Humans", "save_humans"))
        gameList.add(Game("Num Pop", "num_pop"))
        gameList.add(Game("Simon Says", "simon"))
        gameList.add(Game("Gooms", "gooms"))

        val recyclerView = findViewById<RecyclerView>(R.id.recycler_view)
        recyclerView.apply {
            layoutManager = LinearLayoutManager(
                context,
                LinearLayoutManager.VERTICAL,
                false
            )
            adapter = GameAdapter(context, gameList, this@MainActivity)
            setHasFixedSize(true)
        }
    }

    override fun onItemClick(gamePath: String?) {
        gamePath?.let {
            val intent = Intent(this, WebViewActivity::class.java)
            intent.putExtra("game", it)
            startActivity(intent)
        }
    }
}