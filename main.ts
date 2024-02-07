info.onCountdownEnd(function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
	
})
let PUT_2 = 0
let PUT = 0
game.showLongText("玩法：如果你坐在椅子上按A你可以看到摄像头，如果你坐在椅子上按B你可以看到你的电源。如果你不在椅子上或外面按A你可以关门A ；按 B，您可以关闭门 B。如果您看到小鸡小鸡，请按 A 关闭门 A；如果您看到兔子邦妮，请按 B 关闭门 B。最后，如果您看到狐狸，请按 A快点关门，快点！！！", DialogLayout.Bottom)
let MIKE = sprites.create(img`
    f f f f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 5 5 8 8 8 8 f 
    f 8 8 8 8 8 8 8 8 8 8 f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 4 4 4 4 4 4 4 e f 
    . f e 4 4 b b 4 4 e f . 
    . f f e 4 4 4 4 e f f . 
    8 8 f 8 8 1 1 8 8 f 8 8 
    8 8 f 8 8 1 1 8 8 f 8 8 
    4 4 f 8 8 1 1 8 8 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(MIKE)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(MIKE)
tiles.placeOnRandomTile(MIKE, assets.tile`myTile3`)
let HP = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    . . c c c c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(HP, assets.tile`myTile2`)
let HP1 = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    . . c c c c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(HP1, assets.tile`myTile4`)
let HP2 = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(HP2, assets.tile`myTile7`)
let FREDDY = sprites.create(img`
    . . . . . f f . . . . . 
    e e e . . f f . . e e e 
    e 4 e . f f f f . e 4 e 
    e e b e e e e e e b e e 
    f f e e e e e e e e f f 
    f e e e e e e e e e e f 
    f e e e e e e e e e e f 
    f e e f f e e f f e e f 
    f e 4 4 4 f f 4 4 4 e f 
    f e 4 4 4 4 4 4 4 4 e f 
    . f e e f f f f e e f . 
    f e f e f 4 4 f e f e f 
    f e f e 4 4 4 4 e f e f 
    f e f e 4 4 4 4 e f e f 
    . f f e e e e e e f f . 
    . . f e e f f e e f . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(FREDDY, assets.tile`myTile10`)
let CCTV_CHANGE = 0
let CCTV = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(CCTV, assets.tile`myTile14`)
let LINE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(LINE, assets.tile`myTile16`)
let CHICA = sprites.create(img`
    . . . f f . . f f . . . 
    . . f 5 5 f f 5 5 f . . 
    . . . f 5 5 5 5 f . . . 
    . . f 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 f . 
    f 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 f f 5 5 f f 5 5 f 
    f 5 5 5 5 4 4 5 5 5 5 f 
    f 5 5 5 4 4 4 4 5 5 5 f 
    . f 1 5 5 5 5 5 5 1 f . 
    f 5 f 1 1 1 1 1 1 f 5 f 
    f 3 f 5 1 1 1 1 5 f 5 f 
    f 4 f 5 1 1 1 1 5 f 5 f 
    . f f 5 5 5 5 5 5 f f . 
    . . f 5 5 f f 5 5 f . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(CHICA, assets.tile`myTile17`)
let DOOR = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
let DOOR_1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
let DOOR_2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
let DOOR_3 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
let LINE_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(LINE_1, assets.tile`myTile18`)
let BONNIE = sprites.create(img`
    a a a . . . . . . a a a 
    a c a . . . . . . a c a 
    a c a . . . . . . a c a 
    a a b a a a a a a b a a 
    f f a a a a a a a a f f 
    f a a a a a a a a a a f 
    f a a a a a a a a a a f 
    f a a f f a a f f a a f 
    f a c c c f f c c c a f 
    f a c c c c c c c c a f 
    . b a a 2 2 2 2 a a f . 
    f 2 f a 2 c c 2 a f a f 
    f 2 f a c c c c a f a f 
    f 2 f a c c c c a f a f 
    2 2 2 a a a a a a f f . 
    2 2 2 a a f f a a f . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(BONNIE, assets.tile`myTile19`)
let FOXY = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(FOXY, assets.tile`myTile8`)
let POWER = 100
info.startCountdown(200)
forever(function () {
    if (MIKE.tileKindAt(TileDirection.Top, assets.tile`myTile0`)) {
        MIKE.y += 10
    }
    if (MIKE.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        MIKE.y += -10
    }
    if (MIKE.tileKindAt(TileDirection.Left, assets.tile`myTile0`)) {
        MIKE.x += 10
    }
    if (MIKE.tileKindAt(TileDirection.Right, assets.tile`myTile0`)) {
        MIKE.x += -10
    }
    if (MIKE.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        MIKE.y += 10
    }
    if (MIKE.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
        MIKE.y += -10
    }
    if (MIKE.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
        MIKE.x += 10
    }
    if (MIKE.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        MIKE.x += -10
    }
    if (BONNIE.overlapsWith(LINE_1)) {
        tiles.placeOnRandomTile(LINE_1, assets.tile`myTile3`)
        BONNIE.follow(LINE_1, 0)
        BONNIE.follow(MIKE, 50)
    }
    if (CHICA.overlapsWith(LINE)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile3`)
        CHICA.follow(LINE, 0)
        CHICA.follow(MIKE, 50)
    }
    if (FOXY.overlapsWith(LINE)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile3`)
        FOXY.follow(LINE, 0)
        FOXY.follow(MIKE, 120)
    }
    if (CHICA.overlapsWith(MIKE)) {
        game.reset()
    }
    if (FREDDY.overlapsWith(MIKE)) {
        game.reset()
    }
    if (BONNIE.overlapsWith(MIKE)) {
        game.reset()
    }
    if (FOXY.overlapsWith(MIKE)) {
        game.reset()
    }
    if (POWER == 0) {
        CHICA.follow(LINE, 0)
        BONNIE.follow(LINE_1, 0)
        tiles.placeOnRandomTile(FREDDY, assets.tile`myTile5`)
        FREDDY.follow(MIKE, 500)
    }
})
forever(function () {
    pause(10000)
    pause(5000)
    CHICA.follow(LINE, 100)
    pause(7000)
    BONNIE.follow(LINE_1, 100)
})
forever(function () {
    pause(10000)
    pause(10000)
    pause(10000)
    pause(10000)
    animation.runImageAnimation(
    FOXY,
    [img`
        2 2 2 2 . . . . . . 2 2 2 2 
        2 e e 2 . 2 . 2 . . 2 f f 2 
        2 e 2 . 2 2 2 2 2 2 . 2 f 2 
        2 2 . b 2 2 2 2 2 2 b . 2 2 
        . . . f f f f 4 4 2 2 . . . 
        . . . 2 f f 2 5 1 2 2 . . . 
        . . . 2 4 4 f f 4 4 2 . . . 
        . . 2 2 4 4 4 4 4 4 2 2 2 . 
        . 2 2 2 f 1 5 1 f 1 2 2 2 2 
        . . . . 2 2 2 2 2 2 . . . . 
        . . f 2 2 4 4 f f 2 2 2 . . 
        . f 2 f 2 4 f f 4 2 f 2 f . 
        . 2 f f 2 4 4 4 4 2 f 2 2 . 
        . b b f 2 f f 4 4 2 f f 2 . 
        . b . . e e e e e e . . . . 
        . b b . b b . . b b . . . . 
        `],
    500,
    false
    )
    tiles.placeOnRandomTile(FOXY, assets.tile`myTile24`)
    FOXY.follow(LINE, 80)
})
forever(function () {
    scene.cameraFollowSprite(MIKE)
    controller.moveSprite(MIKE)
})
forever(function () {
    if (FOXY.overlapsWith(DOOR_1)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile16`)
        FOXY.follow(LINE, 0)
        FOXY.follow(MIKE, 0)
        tiles.placeOnRandomTile(FOXY, assets.tile`myTile24`)
    }
    if (FOXY.overlapsWith(DOOR)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile16`)
        FOXY.follow(LINE, 0)
        FOXY.follow(MIKE, 0)
        tiles.placeOnRandomTile(FOXY, assets.tile`myTile24`)
    }
    if (CHICA.overlapsWith(DOOR_1)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile16`)
        CHICA.follow(LINE, 0)
        CHICA.follow(MIKE, 0)
        tiles.placeOnRandomTile(CHICA, assets.tile`myTile17`)
    }
    if (CHICA.overlapsWith(DOOR)) {
        tiles.placeOnRandomTile(LINE, assets.tile`myTile16`)
        CHICA.follow(LINE, 0)
        CHICA.follow(MIKE, 0)
        tiles.placeOnRandomTile(CHICA, assets.tile`myTile17`)
    }
    if (BONNIE.overlapsWith(DOOR_2)) {
        tiles.placeOnRandomTile(LINE_1, assets.tile`myTile18`)
        BONNIE.follow(LINE_1, 0)
        BONNIE.follow(MIKE, 0)
        tiles.placeOnRandomTile(BONNIE, assets.tile`myTile19`)
    }
    if (BONNIE.overlapsWith(DOOR_3)) {
        tiles.placeOnRandomTile(LINE_1, assets.tile`myTile18`)
        BONNIE.follow(LINE_1, 0)
        BONNIE.follow(MIKE, 0)
        tiles.placeOnRandomTile(BONNIE, assets.tile`myTile19`)
    }
})
forever(function () {
    if (MIKE.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        if (controller.B.isPressed()) {
            POWER += -1
            game.showLongText(POWER, DialogLayout.Bottom)
            pause(500)
        }
        if (controller.A.isPressed()) {
            POWER += -5
            CCTV_CHANGE += 1
            if (CCTV_CHANGE == 1) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile14`)
                scene.cameraFollowSprite(CCTV)
                controller.moveSprite(MIKE, 0, 0)
                pause(500)
            }
            if (CCTV_CHANGE == 2) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile12`)
                scene.cameraFollowSprite(CCTV)
                controller.moveSprite(MIKE, 0, 0)
                pause(500)
            }
            if (CCTV_CHANGE == 3) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile12`)
                scene.cameraFollowSprite(CCTV)
                controller.moveSprite(MIKE, 0, 0)
                pause(500)
            }
            if (CCTV_CHANGE == 4) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile13`)
                scene.cameraFollowSprite(CCTV)
                controller.moveSprite(MIKE, 0, 0)
                pause(500)
            }
            if (CCTV_CHANGE == 4) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile12`)
                scene.cameraFollowSprite(CCTV)
                controller.moveSprite(MIKE, 0, 0)
                pause(500)
            }
            if (CCTV_CHANGE == 5) {
                tiles.placeOnRandomTile(CCTV, assets.tile`myTile14`)
                scene.cameraFollowSprite(MIKE)
                CCTV_CHANGE = 0
                controller.moveSprite(MIKE, 100, 100)
                pause(500)
            }
        }
    }
    if (MIKE.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        if (controller.A.isPressed()) {
            POWER += -1
            if (PUT == 0) {
                tiles.placeOnRandomTile(DOOR, assets.tile`myTile5`)
                tiles.placeOnRandomTile(DOOR, assets.tile`myTile5`)
                tiles.placeOnRandomTile(DOOR_1, assets.tile`myTile11`)
                tiles.placeOnRandomTile(DOOR_1, assets.tile`myTile11`)
                PUT += 1
                pause(500)
            }
            if (PUT == 1) {
                PUT += 1
                DOOR.setPosition(0, 0)
                DOOR.setPosition(0, 0)
                DOOR_1.setPosition(0, 0)
                DOOR_1.setPosition(0, 0)
                pause(500)
            }
            if (PUT == 2) {
                PUT = 0
            }
        }
        if (controller.B.isPressed()) {
            POWER += -1
            if (PUT_2 == 0) {
                tiles.placeOnRandomTile(DOOR_3, assets.tile`myTile6`)
                tiles.placeOnRandomTile(DOOR_3, assets.tile`myTile6`)
                tiles.placeOnRandomTile(DOOR_2, assets.tile`myTile6`)
                tiles.placeOnRandomTile(DOOR_2, assets.tile`myTile6`)
                PUT_2 += 1
                pause(500)
            }
            if (PUT_2 == 1) {
                PUT_2 += 1
                DOOR_2.setPosition(0, 0)
                DOOR_3.setPosition(0, 0)
            }
            if (PUT_2 == 2) {
                PUT_2 = 0
            }
        }
    }
})
