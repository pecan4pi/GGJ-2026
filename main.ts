enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (InGame) {
        timer.background(function () {
            platformer.moveSprite(mySprite, false)
            platformer.setCharacterAnimationsEnabled(mySprite, false)
            for (let index = 0; index <= 1500; index++) {
                if (controller.A.isPressed()) {
                    if (index == 300) {
                        if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                            mySprite.setImage(assets.image`Charge_Shot_Right_1`)
                        }
                    } else if (index == 1200) {
                        mySprite.setImage(assets.image`Charge_Shot_Right_2`)
                    } else if (index == 1500) {
                        mySprite.setImage(assets.image`Charge_Shot_Right_3`)
                        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createCustomSpreadEffectData(
                        [
                        8,
                        7,
                        9
                        ],
                        true,
                        [
                        4,
                        5,
                        6,
                        7
                        ],
                        extraEffects.createPercentageRange(50, 100),
                        extraEffects.createPercentageRange(0, 50),
                        extraEffects.createTimeRange(300, 500),
                        0,
                        -100,
                        extraEffects.createPercentageRange(75, 100),
                        -100,
                        0,
                        200
                        ), 150, 30, 30)
                    } else {
                    	
                    }
                    pause(1)
                } else {
                    break;
                }
            }
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (InGame) {
        platformer.moveSprite(mySprite, true)
    }
})
function Animations () {
    platformer.loopFrames(
    mySprite,
    assets.animation`Idle_Left`,
    500,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.OnGround)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Idle_Right`,
    500,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.OnGround)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Walk_Left`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.Moving, platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.OnGround)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Walk_Right`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.Moving, platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.OnGround)
    )
    platformer.runFrames(
    mySprite,
    assets.animation`Start_Jump_Right`,
    50,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.JumpingUp)
    )
    platformer.runFrames(
    mySprite,
    assets.animation`Start_Jump_Left`,
    50,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.JumpingUp)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Falling_Left`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Falling)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Falling_Right`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Falling)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Falling_Left`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.AfterJumpApex)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Falling_Left`,
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.AfterJumpApex)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Wall_Slide_Right`,
    200,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.WallSliding)
    )
    platformer.loopFrames(
    mySprite,
    assets.animation`Wall_Slide_Left`,
    200,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.WallSliding)
    )
}
let InGame = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = platformer.create(assets.image`Main_Character_Base_Hitbox`, SpriteKind.Player)
platformer.moveSprite(mySprite, true, 125)
scene.cameraFollowSprite(mySprite)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, false)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.MovementMomentum, true)
platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, true)
platformer.setConstant(mySprite, platformer.PlatformerConstant.MaxJumpHeight, 48)
platformer.setConstant(mySprite, platformer.PlatformerConstant.InAirJumps, 1)
platformer.setConstant(mySprite, platformer.PlatformerConstant.InAirJumpHeight, 32)
platformer.setConstant(mySprite, platformer.PlatformerConstant.GroundFriction, 300)
platformer.setConstant(mySprite, platformer.PlatformerConstant.MovementAcceleration, 256)
platformer.setConstant(mySprite, platformer.PlatformerConstant.WallJumpKickoffVelocity, 25)
platformer.setConstant(mySprite, platformer.PlatformerConstant.WallJumpHeight, 16)
Animations()
InGame = true
forever(function () {
	
})
