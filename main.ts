input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        music.playTone(880, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        music.playTone(880, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    music.stopAllSounds()
})
basic.clearScreen()
music.stopAllSounds()
basic.forever(function () {
	
})
