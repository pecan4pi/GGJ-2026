enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (InGame) {
        TimeHeldA = game.runtime()
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
let TimeHeldA = 0
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
    if (controller.A.isPressed()) {
        platformer.moveSprite(mySprite, false)
        if (game.runtime() - TimeHeldA > 300) {
            if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                mySprite.setImage(assets.image`Charge_Shot_Right_1`)
            }
        } else if (game.runtime() - TimeHeldA > 1200) {
            mySprite.setImage(assets.image`Charge_Shot_Right_2`)
        } else if (game.runtime() - TimeHeldA > 1500) {
            mySprite.setImage(assets.image`Charge_Shot_Right_3`)
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createCustomSpreadEffectData(
            [
            8,
            7,
            9
            ],
            false,
            extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Cloud),
            extraEffects.createPercentageRange(50, 100),
            extraEffects.createPercentageRange(50, 100),
            extraEffects.createTimeRange(200, 400)
            ), -1, 48, 20)
        } else {
        	
        }
    }
})
