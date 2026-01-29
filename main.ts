/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Oct 2025
 * This program 
*/

let distanceToObject: number = 0

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    // Measure distance from sonar
    // Attach TRIG to P0 and ECHO to P1
    distanceToObject = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
    )

    basic.clearScreen()
    basic.showNumber(distanceToObject) // display distance on LEDs

    if (distanceToObject < 10) {
        // Obstacle detected: back up
        robotbit.StpCarMove(-10, 48)
        basic.pause(500)

        // Turn to avoid obstacle
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        basic.pause(200)

        // Move forward again
        robotbit.StpCarMove(10, 48)
    } else {
        // Path is clear: move forward
        robotbit.StpCarMove(10, 48)
    }

    basic.pause(100) // small pause to stabilize loop
}
