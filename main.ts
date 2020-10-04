/** 
Title: Jump Knight
Creators: Nick R. Jackson C.
Description: Game Jam: Castle, knight themed jump game with combat late game.

 */
// music
forever(function on_forever() {
    music.playMelody("D E D E C - - - ", 200)
    music.playMelody("D E D C D - - - ", 200)
    music.playMelody("C D - E - - E - ", 200)
    music.playMelody("D C - D - - - - ", 200)
    music.playMelody("D E D E C - - - ", 200)
    music.playMelody("- D E D C D - - ", 200)
    music.playMelody("- C D C D E - - ", 200)
    music.playMelody("- C D C D - - C ", 200)
    music.playMelody("- - - - - - - - ", 70)
})
//  boss_fight
let dark_knight = sprites.create(img`
    ................................
    ......f...................f.....
    .....f2f.................f2f....
    .....f2ff................f2f....
    .....f22f....fffffff....f22f....
    .....f22ff.ffffffffbf...f22f....
    .....f222f.fffffbbbbff..f22f....
    .....f222f.2fffffbbbffff222f....
    .....f222f.2f2ffffff2fff222f....
    .....ff22ff2ff22ff22ffff222f....
    ......ffff2ffff2222fbbff22f.....
    .........ffbbfff22fbbbfffff.....
    ..........fbbbff22bbbbff........
    .........ffbbbff22bbbff.........
    ........fffffbffffffffff......1.
    .......fbb2ffffbbbbbff2bff...11.
    ......f2bb2fffbbbbbbbf2bbff..1..
    .....f2f222ffbbbbbbbbff222..11..
    ......ffffffffbbbbbbbffff..11...
    ......ff22ffbfffbbbffff..f.1....
    .....bff...ffbbfffffbf.f.f1.....
    .....bf....ffffbbffbbf....1.....
    .....bf....ffffffbbfff...11.....
    .....22f...ff2f2ffffff...1......
    ......ff...f22f2bfffff..........
    ...........f22f2bb2fff..........
    ..........ff2ff222f2ff..........
    ..........f2f..fff2fff..........
    ..........fff....fff2f..........
    .........f2f......ff2f..........
    .........fff2......ff222........
    .........f222......ff222........
`)
dark_knight.setPosition(65, 100)
//  sprite player
let knight_right = img`
    ..................
    ..................
    ..88..............
    .8888fffffff......
    .8.ffbcbcbcf......
    ...fcbbbbbbff..e..
    ...fbbffffff...be.
    ...fcbdddddf...bb.
    ...fbbd1d1df..bbe.
    ....fbdfdfdf..bbb.
    .....fdddddf..ebb.
    .....ffbbbff.ccccc
    .....fbbbbbbfdde..
    .....fbbbfbffdde..
    .....ffffdfc...f..
    .....fbddddf......
    .....fccffcf......
    .....fbbffbbf.....
`
let knight_left = img`
    ..................
    ..................
    .............88...
    .....fffffff8888..
    .....fcbcbcbff.8..
    .e..ffbbbbbbcf....
    eb...ffffffbbf....
    bb...fdddddbcf....
    ebb..fd1d1dbbf....
    bbb..fdfdfdbf.....
    bbe..fdddddf......
    cccc.ffbbbff......
    deddfbbbbbbf......
    deddffbfbbbf......
    .f...cfdffff......
    .....fddddbf......
    .....fcffccf......
    ....fbbffbbf......
`
let knight_right_jump = img`
    .88...............e
    8888fffffff.....ebe
    8.ffbcbcbcf....bbb.
    ..fcbbbbbbff..bbbe.
    ..fbbffffff.cebbb..
    ..fcbdddddf..cccb..
    ..fbbd1d1df...e.c..
    ...fbdfdfdf...e....
    ....fdddddf..e.....
    ....ffbbbff.de.....
    ....fbbbbbbfdf.....
    ....fbbbfbff.......
    ....ffffdfc........
    ....fbddddf........
    ....fccffcf........
    ....fccffbbf.......
    ....fbbffff........
    .....ff............
`
let knight_left_jump = img`
    ...................
    e...............88.
    ebe.....fffffff8888
    .bbb....fcbcbcbff.8
    .ebbb..ffbbbbbbcf..
    ..bbbec.ffffffbbf..
    ..bccc..fdddddbcf..
    ..c.e...fd1d1dbbf..
    ....e...fdfdfdbf...
    .....e..fdddddf....
    .....ed.ffbbbff....
    .....fdfbbbbbbf....
    .......ffbfbbbf....
    ........cfdffff....
    ........fddddbf....
    ........fcffccf....
    .......fbbffccf....
    ........ffffbbf....
    ............ff.....
`
let knight_still = img`
    ..................
    .........88.......
    ........88.8......
    .....fffffff......
    ....ffcbcbcff.....
    ....fbbbbbbbf..e..
    ....fbfffffbf..be.
    ....fbdddddbf..bb.
    ....fbd1d1dbf.bbe.
    .....fdfdfdf..bbb.
    .....fdddddf..ebb.
    .....ffbbbff.ccccc
    ....fbbbbbbbfdde..
    ...dffbfffbffdde..
    ...ddcfbbbfc...f..
    .....fccbccf......
    .....fccfccf......
    .....fbbfbbf......
`
let knight = sprites.create(knight_still, SpriteKind.Player)
controller.moveSprite(knight, 110, 0)
knight.setPosition(60, 870)
knight.setFlag(SpriteFlag.ShowPhysics, true)
// setup
info.setScore(0)
info.setLife(1)
//  jump and gravity
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_jump() {
    if (knight.isHittingTile(CollisionDirection.Bottom)) {
        knight.setVelocity(0, -160)
        music.playTone(Note.F3, 100)
    }
    
})
knight.ay = 250
//  background
if (knight.y > 119) {
    scene.cameraFollowSprite(knight)
}

// change background later
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`)
//  Tilemap make larger later
scene.setTileMap(img`
    9999999699999999
    9969999999999999
    9999999999999959
    9999999999699999
    9999999999999999
    9399999999999939
    3339999999999333
    3339999999999333
    eeeeeeeeeee333ee
    3333333333333333
    f..............f
    f......2...eeeef
    f..............f
    f..............f
    f.....eee......f
    f..............f
    feee2......2...f
    f..............f
    f.....eee......f
    f..............f
    f..........eeeef
    f..............f
    f...2......2...f
    f.....eee......f
    f..............f
    feee...........f
    f..............f
    f.....eee......f
    f...2......2...f
    f..........eeeef
    f..............f
    f..............f
    f.....eee......f
    f..............f
    feee2......2...f
    f..............f
    f.....eee......f
    f..............f
    f..........eeeef
    f..............f
    f...2......2...f
    f.....eee......f
    f..............f
    feee...........f
    f..............f
    f.....eee......f
    f...2......2...f
    f..........eeeef
    f..............f
    f..............f
    f.....eee......f
    f..............f
    feee2......2...f
    f..............f
    f..............f
    fddddddddddddddf
`)
scene.setTile(15, img`
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
`, true)
scene.setTile(13, img`
    f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(14, img`
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e d d d d b d e d d b d d d d b d d d b d d d e d d b d d d d e
    e d d b b d d e d d d d d b b d d d d d b d d e d d d b b d d e
    e d d d d d d e d d d d d d d d d b d d d d d e d d d d d d d e
    e d b d d d d e d b d d d d d d d d d d d d d e d b d d d d d e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
`, true)
scene.setTile(2, img`
    f f f f f f f f f
    f f f f 2 f f f f
    f b f 2 2 2 f b f
    f b 2 2 4 2 2 b f
    f b 2 4 4 4 2 b f
    f f b 4 5 4 b f f
    f f f c c c f f f
    f f f c c c f f f
    f f f c c c f f f
    f f f f c f f f f
`)
scene.setTile(1, img`
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
`)
scene.setTile(3, img`
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b f f f f f f d d f f f f f f b
    b c c c c c d d d d c c c c c b
`)
scene.setTile(9, img`
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a
`)
scene.setTile(5, img`
    . . . . d d d d d d d . . . . .
    . . d d d d 1 1 1 d d d d . . .
    . d d d d d d d d d d d d d . .
    . d d d d d d d d d d d d d . .
    d d d 1 1 d d d d d 1 1 d d d .
    d d d 1 1 d d d d d 1 1 d d d .
    d d d d d d d d d d d d d d 1 .
    d d d d d d 1 d d d d d d 1 1 .
    d 1 d d d d 1 1 d d d d d d d .
    d 1 d d d d d d d d d d d d d .
    d 1 d d d d 1 1 d d d d d d d .
    . d d d d d 1 1 d d d d d d . .
    . d d 1 d d d d d d 1 1 d d . .
    . . d d d d d d d d d d d . . .
    . . . . d d d d d d d . . . . .
    . . . . . . . . . . . . . . . .
`)
// enemies
game.onUpdateInterval(2000, function on_update_interval() {
    let ghost1 = sprites.createProjectileFromSide(img`
        ........111111.....
        .......11cffff1....
        ......11fffffff1...
        ......1cfffffff1...
        ......1cffff1ff1...
        ......1fffffd2f1...
        ......1ffffffff1...
        .......1ffff2221...
        ......1ffff2ffff11.
        ......1ffffffffff1.
        ...111fffffffff111.
        ..1ffffffffffc11...
        .1ffcffffffc11.....
        ..1b1cfffc11.......
        .....111111........
        ...................
    `, 80, 20)
    let ghost2 = sprites.createProjectileFromSide(img`
        ......111111.......
        .....1fffffc1......
        ....1ffffffff1.....
        ....1ffffffffc1....
        ....1ff1fffffc1....
        ....1f2dffffff1....
        ....1fffffffff1....
        ...11222fffff1.....
        ..11ffff2fffff1....
        ..1fffffffffff1....
        ..111ffffffffff11..
        .....1cffffffffff1.
        ......11cffffffcff1
        ........11cfffc1b1.
        ..........11111....
        ...................
    `, -80, 0)
    ghost1.setFlag(SpriteFlag.DestroyOnWall, false)
    ghost2.setFlag(SpriteFlag.DestroyOnWall, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    otherSprite.startEffect(effects.fire)
    music.pewPew.play()
})
// animation
game.onUpdate(function on_update() {
    //  knight.say(str(controller.x()))
    if (controller.dx() > 0 && controller.A.isPressed()) {
        knight.setImage(knight_right_jump)
    } else if (controller.dx() < 0 && controller.A.isPressed()) {
        knight.setImage(knight_left_jump)
    } else if (controller.dx() > 0) {
        knight.setImage(knight_right)
    } else if (controller.dx() < 0) {
        knight.setImage(knight_left)
    } else {
        knight.setImage(knight_still)
    }
    
})
