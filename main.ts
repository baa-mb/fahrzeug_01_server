input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("A")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN
        )
    }
    if (receivedString.includes("B")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN
        )
    }
    if (receivedString.includes("AB")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN
        )
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(54)
