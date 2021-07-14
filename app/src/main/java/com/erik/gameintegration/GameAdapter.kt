package com.erik.gameintegration

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class GameAdapter(
    private val context: Context,
    private var dataSet: List<Game>,
    private val onItemClickedListener: GameViewHolder.Callback.Click
): RecyclerView.Adapter<GameAdapter.GameViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): GameViewHolder {
        val view =
            LayoutInflater.from(context).inflate(R.layout.view_holder_game_item, parent, false)
        return GameViewHolder(view, onItemClickedListener)
    }

    override fun onBindViewHolder(holder: GameViewHolder, position: Int) {
        val currentResult = dataSet[position]
        holder.bindView(currentResult)
    }

    override fun getItemCount() = dataSet.size

    class GameViewHolder(
        itemView: View,
        private val onItemClickedListener: Callback.Click?
    ): RecyclerView.ViewHolder(itemView), View.OnClickListener{

        private var gamePath: String? = null

        fun bindView(game: Game) {
            val gameNameText = itemView.findViewById<TextView>(R.id.game_name_text)
            gameNameText.text = game.name
            gamePath = game.path
            itemView.setOnClickListener(this)
        }

        override fun onClick(v: View?) {
            onItemClickedListener?.onItemClick(gamePath)
        }

        interface Callback {
            interface Click {
                fun onItemClick(gamePath: String?)
            }
        }
    }
}