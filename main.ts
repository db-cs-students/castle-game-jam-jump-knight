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
    music.playMelody("- - - - - - - - ", 90)
})
//  game Description:
game.splash("Jump Knight", "Defeat Ghosts to upgrade your knight and escape the castle! But Don't get caught by the lava!")
//  boss_fight
let dark_knight = sprites.create(img`
    ....f..............f...............
    ...f................f......ff......
    ..ff................ff....f22ff....
    .f2f................f2f..fccb2ff...
    .f2f................f2f..fcbbb2ff..
    .f2ff...............f2f..fcbbbb2ff.
    .f22f...fffffff....f22f..fcbbbbb2f.
    .f22fffffffffbff...f22f..fcbbbbb2f.
    .f222fffffffffbff..f22f..fcbbbbb2f.
    .f222f2ffffffffffff222f..fcbbbbb2ff
    .f222f2f2ffffff2fff222f..fcbbbbbb2f
    .ff22f2ff22ff22ffff222f..fccbfbbb2f
    ..ffffffff2222fffff22f...ffff.fb2f.
    ....fffffff22fffffffff...fff...f2f.
    .....ffffff22ffffff......ff2...f2f.
    ....fffbfff22fffbf.......f22...2f..
    ...fffffcffffffbfff......f2....f...
    ..fbb2ffffbbbbbff2bff....f2...f....
    .f2bb2fffbbbbbbbf2bb2f...f2........
    f2f222ffcbbbbbbbff2f22f..f2........
    .ffffffffccbbbbbffffff..fff........
    .ff22ffcfffcbbffffb2f2ff2ff........
    bff...ffccfffffbffffffbb2ff........
    bf....ffffcbffbbf........ff........
    bf....ffffffbbfff........ff........
    22f...ff2f2ffffff.......bff........
    .ff...f22f2cfffff.......b2.........
    ......f22f2cc2fff.......b2.........
    .....ff2ff222f2ff.......f2.........
    .....f2f..fff2fff.......f2.........
    .....fff....fff2f.......f2.........
    ....f2f......ff2f.......f2.........
    ....fff2......ff222.....22.........
    ....f222......ff222.....2..........
`, SpriteKind.Food)
dark_knight.setPosition(40, 109)
// status bar
let statusbar = statusbars.create(20, 4, 0)
statusbar.setLabel("HP")
statusbar.attachToSprite(dark_knight)
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
// upgraded player
let upgraded_knight_right = img`
    ..................
    ..................
    ..bb...........1..
    .bbbbfffffff..111.
    .b.ff181818f..1b1.
    ...f8111111ff.1b1.
    ...f11ffffff..1b1.
    ...f81dddddf..1b1.
    ...f11d1d1df..1b1.
    ....f1dfdfdf..1c1.
    .....fdddddf..1c1.
    .....ff111ff.fffff
    .....f155111fdde..
    .....f111f1ffdde..
    .....ffff1f8..f5f.
    .....f1bbb1f...f..
    .....f88ff8f......
    .....f11ff11f.....
`
let upgraded_knight_left = img`
    ..................
    ..................
    ..1...........bb..
    .111..fffffffbbbb.
    .1b1..f818181ff.b.
    .1b1.ff1111118f...
    .1b1..ffffff11f...
    .1b1..fddddd18f...
    .1b1..fd1d1d11f...
    .1c1..fdfdfd1f....
    .1c1..fdddddf.....
    ffff..ff111ff.....
    ..eddf111551f.....
    ..eddff1f111f.....
    .f5f..8f1ffff.....
    ..f...f1bbb1f.....
    ......f8ff88f.....
    .....f11ff11f.....
`
let upgraded_knight_right_jump = img`
    .....................11
    .88.................1b1
    8888fffffff........1b1.
    8.ff181818f.......1b1..
    ..f8111111ff.....1b1...
    ..f11ffffff..f..1c1....
    ..f81dddddf...f1c1.....
    ..f11d1d1df...ee1......
    ...f1dfdfdf..eeef......
    ....fdddddf.f5e..f.....
    ....ff111ff.ff.........
    ....f155111fd..........
    ....f111f1ff...........
    ....ffff1fc............
    ....f1bbb1f............
    ....f88ff8f............
    ....f88ff11f...........
    ....f11ff22............
    ....42244554...........
    ....4554.44............
    .....44................
`
let upgraded_knight_left_jump = img`
    .11.....................
    .1b1.................bb.
    ..1b1........fffffffbbbb
    ...1b1.......f818181ff.b
    ....1b1.....ff1111118f..
    .....1c1..f..ffffff11f..
    ......1c1f...fddddd18f..
    .......1ee...fd1d1d11f..
    .......feee..fdfdfd1f...
    ......f..e5f.fdddddf....
    ..........ff.ff111ff....
    ...........df111551f....
    ............ff1f111f....
    .............8f1ffff....
    .............f11111f....
    .............f8ff88f....
    ............f11ff88f....
    .............22ff11f....
    ............45544224....
    .............44.4554....
    .................44.....
`
let upgraded_knight_still = img`
    ..................
    .........bb.......
    ........bb.b...1..
    .....fffffff..111.
    ....ff81818ff.1b1.
    ....f1111111f.1b1.
    ....f1fffff1f.1b1.
    ....f1ddddd1f.1b1.
    ....f1d1d1d1f.1b1.
    .....fdfdfdf..1c1.
    .....fdddddf..1c1.
    .....ff111ff.fffff
    ....f1115511fdde..
    ...dff1fff1ffdde..
    ...dd8f111f8..f5f.
    .....f88188f...f..
    .....f88f88f......
    .....f11f11f......
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
    9999999999999999
    9999999999999999
    9999999999999959
    9999999999999999
    3999999999999993
    3999999999999993
    3999999999999993
    3999999999999993
    eeeeeeeeeee...ee
    f..............f
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
    a a a c c d d d d d d c c a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a c d d d d d d c a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a c d d d d d d c a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a a a a d d d d a a a a a a
    a a a c c d d d d d d c c a a a
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
    a a a a d d d d d d d a a a a a
    a a d d d d 1 1 1 d d d d a a a
    a d d d d d d d d d d d d d a a
    a d d d d d d d d d d d d d a a
    d d d 1 1 d d d d d 1 1 d d d a
    d d d 1 1 d d d d d 1 1 d d d a
    d d d d d d d d d d d d d d 1 a
    d d d d d d 1 d d d d d d 1 1 a
    d 1 d d d d 1 1 d d d d d d d a
    d 1 d d d d d d d d d d d d d a
    d 1 d d d d 1 1 d d d d d d d a
    a d d d d d 1 1 d d d d d d a a
    a d d 1 d d d d d d 1 1 d d a a
    a a d d d d d d d d d d d a a a
    a a a a d d d d d d d a a a a a
    a a a a a a a a a a a a a a a a
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
game.onUpdate(function on_update2() {
    if (info.score() > 7 && controller.dx() > 0 && controller.A.isPressed()) {
        knight.setImage(upgraded_knight_right_jump)
    } else if (info.score() > 7 && controller.dx() < 0 && controller.A.isPressed()) {
        knight.setImage(upgraded_knight_left_jump)
    } else if (info.score() > 7 && controller.dx() > 0) {
        knight.setImage(upgraded_knight_right)
    } else if (info.score() > 7 && controller.dx() < 0) {
        knight.setImage(upgraded_knight_left)
    } else if (info.score() > 7) {
        knight.setImage(upgraded_knight_still)
    }
    
})
let lava = sprites.create(img`
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444434455444444444444445544444444444444444554444444444434455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e44442244222444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee444444244ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee4444442
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
    4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444555544444445444455554444444544445555444444454444544555544444445444455554444444544445555444
    2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444524444454445444442444445444544444244444544454444424424444454445444442444445444544444244444544
    2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444424424444444444444442444444444444444244444444
    4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444444444444444554444444444444455444444444444445544444444444444444554444444444444455444444444444
    4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444444444224444455544444422444445554444442244444555444444444224444455544444422444445554444442244
    4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444444244
    4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444444444444424444444444444442444444444444444244444444444444444424444444444444442444444444444
    2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444224222444442424442422244444242444242224444424244424224222444442424442422244444242444242224444
    4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444444444444444544444444444444454444444444444445444444444444444444544444444444444454444444444444
`, SpriteKind.Enemy)
lava.setPosition(80, 1010)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})
game.onUpdateInterval(30, function on_update_interval2() {
    if (knight.y > 120) {
        lava.setPosition(100, lava.y - .5)
    }
    
})
// boss fight
let boss_projectile = SpriteKind.create()
game.onUpdateInterval(600, function on_update_interval3() {
    let axe = sprites.createProjectileFromSprite(img`
        1 . . f 2 .
        . . 1 . f 2
        . . 1 . f 2
        1 . . f 2 .
    `, dark_knight, 40, 1)
})
sprites.onOverlap(SpriteKind.Player, boss_projectile, function on_overlap4(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    dark_knight.destroy()
    game.over(true)
})
if (knight.y < 120) {
    controller.moveSprite(knight, 30, 0)
}

