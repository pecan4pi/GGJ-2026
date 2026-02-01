controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(topdown)) {
        mySprite.vy += -250
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (topdown) {
        topdown = false
    } else {
        topdown = true
    }
})
let topdown = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
topdown = false
game.onUpdate(function () {
    if (topdown) {
        controller.moveSprite(mySprite, 100, 100)
        mySprite.ay = 0
        mySprite.setVelocity(0, 0)
    } else if (!(topdown)) {
        mySprite.ay = 500
        controller.moveSprite(mySprite, 100, 0)
    }
})
