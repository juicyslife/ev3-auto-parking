brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    pause(1000)
    motors.largeBC.steer(0, -50, 3, MoveUnit.Rotations)
    brick.setStatusLight(StatusLight.OrangeFlash)
    motors.largeBC.steer(50, 50, 1.5, MoveUnit.Rotations)
    pause(1000)
    motors.largeC.run(-18, 300, MoveUnit.MilliSeconds)
    pause(1000)
    motors.largeBC.tank(-50, -50, 1, MoveUnit.Seconds)
    brick.setStatusLight(StatusLight.Off)
});

forever(function () {
    if (sensors.ultrasonic2.distance() <= 5) {
        motors.stopAll()
    }
})
