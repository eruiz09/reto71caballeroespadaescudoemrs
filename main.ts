radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(0, 2))
    if (randint(0, 2) == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
    } else if (randint(0, 2) == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            `)
    } else if (randint(0, 2) == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
radio.setGroup(15)
