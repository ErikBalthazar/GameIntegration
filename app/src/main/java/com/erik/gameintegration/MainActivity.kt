package com.erik.gameintegration

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.erik.gameintegration.WebViewActivity.Companion.GAME_EXTRA
import com.erik.gameintegration.entity.EmbedGame
import com.erik.gameintegration.entity.Game
import com.erik.gameintegration.entity.WebGame

class MainActivity : AppCompatActivity(), GameAdapter.GameViewHolder.Callback.Click  {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val gameList = ArrayList<Game>()
        gameList.add(EmbedGame("Multitouch", "multitouch"))
        gameList.add(EmbedGame("Save Humans", "save_humans"))
        gameList.add(EmbedGame("Num Pop", "num_pop"))
        gameList.add(EmbedGame("Simon Says", "simon"))
        gameList.add(EmbedGame("Gooms", "gooms"))
        gameList.add(EmbedGame("Combinado", "combined", "php"))
        gameList.add(WebGame("Num_pop firebase", "https://kids-7028b.web.app/num_pop"))

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

    override fun onItemClick(game: Game?) {
        val intent = Intent(this, WebViewActivity::class.java)
        game?.let {
            intent.putExtra(GAME_EXTRA, it)
        }
        startActivity(intent)
    }
}