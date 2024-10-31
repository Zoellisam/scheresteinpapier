input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    punkte += 1
    if (punkte == 0) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
    if (punkte == 1) {
        basic.setLedColors(0x0000ff, 0xff0000, 0xff0000)
    }
    if (punkte == 2) {
        basic.setLedColors(0x0000ff, 0x0000ff, 0xff0000)
    }
    if (punkte == 3) {
        basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
        music.playMelody("C5 G B A G F A G ", 120)
        basic.showString("Gewonnen!")
        basic.showIcon(IconNames.Happy)
        punkte = 0
        basic.turnRgbLedOff()
        basic.pause(2000)
        basic.clearScreen()
    }
})
let zufall = 0
let punkte = 0
punkte = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.setLedColors(0x00ff00, 0xff0000, 0xff0000)
        basic.pause(1000)
        basic.setLedColors(0x00ff00, 0x00ff00, 0xff0000)
        basic.pause(1000)
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        basic.pause(1000)
        zufall = randint(1, 3)
        if (zufall == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.turnRgbLedOff()
            basic.pause(2000)
            basic.clearScreen()
        }
        if (zufall == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.turnRgbLedOff()
            basic.pause(2000)
            basic.clearScreen()
        }
        if (zufall == 3) {
            basic.showLeds(`
                # . . # #
                . # . # #
                . . # . .
                . # . # #
                # . . # #
                `)
            basic.turnRgbLedOff()
            basic.pause(2000)
            basic.clearScreen()
        }
        if (punkte == 0) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
        if (punkte == 1) {
            basic.setLedColors(0x0000ff, 0xff0000, 0xff0000)
        }
        if (punkte == 2) {
            basic.setLedColors(0x0000ff, 0x0000ff, 0xff0000)
        }
        if (punkte == 3) {
            basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
        }
    }
})
