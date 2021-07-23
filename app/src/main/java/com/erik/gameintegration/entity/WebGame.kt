package com.erik.gameintegration.entity

import kotlinx.parcelize.Parcelize

@Parcelize
data class WebGame(
    override var name: String,
    var url: String
): Game(name)
