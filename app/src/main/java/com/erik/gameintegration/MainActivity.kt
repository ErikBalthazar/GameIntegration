 package com.erik.gameintegration

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.DividerItemDecoration
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
        gameList.add(EmbedGame("Multitouch", "multitouch"))                                     // Phaser
        gameList.add(EmbedGame("Save Humans", "save_humans"))                                   // Phaser
        gameList.add(EmbedGame("Num Pop", "num_pop"))                                           // Phaser
        gameList.add(EmbedGame("Simon Says", "simon"))                                          // Phaser
        gameList.add(EmbedGame("Gooms", "gooms"))                                               // Construct
        gameList.add(EmbedGame("Combinado", "combined", "php"))                      // Phaser
        gameList.add(WebGame("Galaxies: Combat", "https://playcanv.as/p/Ikq6Uk6A/"))             // Playcanvas
        gameList.add(WebGame("Droplets", "http://gametest.mobi/droplets/"))              // Phaser - photonstorm
        gameList.add(EmbedGame("Memoria", "memory"))                                    // cocos2d
        gameList.add(EmbedGame("7 Erros", "seven"))                                     // cocos2d
        gameList.add(WebGame("Amazing Beaver", "https://amazing-beaver-20a700.netlify.app/"))
        gameList.add(WebGame("Optimistic Gates", "https://optimistic-gates-67ad12.netlify.app/"))
        gameList.add(EmbedGame("Amazing Beaver", "amazing"))   // construct
        gameList.add(EmbedGame("Optimistic Gates", "gates")) // phaser
        gameList.add(WebGame("Cloth ThreeJs", "https://threejs.org/examples/#webgl_animation_cloth"))
        gameList.add(WebGame("Keyframes ThreeJs", "https://threejs.org/examples/#webgl_animation_keyframes"))
        gameList.add(EmbedGame("Memoria lib teste", "jogos_cocos/memory")) // cocos2d
        gameList.add(EmbedGame("7 Erros lib teste", "jogos_cocos/7")) // cocos2d
        gameList.add(EmbedGame("Batalha", "batalha")) // phaser
        gameList.add(EmbedGame("Influencers", "influencers")) // phaser
        gameList.add(EmbedGame("Construct lib teste", "construct")) // construct

        val recyclerView = findViewById<RecyclerView>(R.id.recycler_view)
        recyclerView.apply {
            layoutManager = LinearLayoutManager(
                context,
                LinearLayoutManager.VERTICAL,
                false
            )
            adapter = GameAdapter(context, gameList, this@MainActivity)
            addItemDecoration(DividerItemDecoration(context, DividerItemDecoration.VERTICAL))
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