package com.erik.gameintegration.entity

import kotlinx.parcelize.Parcelize

@Parcelize
data class EmbedGame(
    override var name: String,
    var path: String,
    var fileExtension: String = "html"
): Game(name)
