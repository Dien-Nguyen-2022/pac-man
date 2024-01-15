basic.showString("Pac-Man")
let food = game.createSprite(0, 0)
let pacman = game.createSprite(2, 2)
let ghost = game.createSprite(4, 4)
food.set(LedSpriteProperty.Brightness, 10)
ghost.set(LedSpriteProperty.Blink, 10)
while (true) {
    basic.pause(500)
    if (ghost.get(LedSpriteProperty.X) < pacman.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, 1)
    } else if (ghost.get(LedSpriteProperty.X) > pacman.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, -1)
    } else if (ghost.get(LedSpriteProperty.Y) < pacman.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, 1)
    } else if (ghost.get(LedSpriteProperty.Y) > pacman.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, -1)
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        pacman.change(LedSpriteProperty.Y, -1)
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        pacman.change(LedSpriteProperty.Y, 1)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        pacman.change(LedSpriteProperty.X, -1)
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        pacman.change(LedSpriteProperty.X, 1)
    }
    if (pacman.isTouching(food)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 5))
        food.set(LedSpriteProperty.Y, randint(0, 5))
        if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) >= 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) >= 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 0)
        } else if (food.get(LedSpriteProperty.X) >= 2 && food.get(LedSpriteProperty.Y) >= 2) {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 0)
        }
    }
    if (ghost.isTouching(pacman)) {
        game.gameOver()
    }
}
