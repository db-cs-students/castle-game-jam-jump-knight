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
//  game Description:
game.splash("Excalibur", "Defeat Ghosts to upgrade your knight and kill The Dark Knight !")
//  boss_fight
let dark_knight = sprites.create(img`
    ......................................................................
    .......................f..............f...............................
    ......................f................f......ff......................
    .....................ff................ff....f22ff....................
    ....................f2f................f2f..fccb2ff...................
    ....................f2f................f2f..fcbbb2ff..................
    .2..................f2ff...............f2f..fcbbbb2ff.........2.......
    .222222.............f22f...fffffff....f22f..fcbbbbb2f...2222222.......
    ...fccc22...........f22fffffcbbbbff...f22f..fcbbbbb2f..2ccccf.........
    ...fccfccf2.........f222fffffcbbbfff..f22f..fcbbbbb2ffffcccf..........
    ...fccffcccf........f222f2ffffffbfffff222f..fcbbbbb2ffccfccf..........
    ...2cccfcccc2.......f222f2f2ffffff2fff222f..fcbbbbbb2fcffccf..........
    ...fccccfcccffff....ff22f2ff22ff22ffff222f..fccbfbbb2fbcccf...........
    ....fcccffbcccccfffffffffffff2222fffff22f.ffffffcfb2fcccccf...........
    ....2cccccbbcccccccccf.fffbfff22fffbbfffffccfffcbbf2fccccc2...........
    .....fccccccbbccccccccffffbbff22ffbbbf.f2cccff2bbcf2fccfcc2...........
    .....2ccccccccbccccccccfffcbff22ffcbfffcccbbf22ccc2fcffccc2...........
    .....fccfccccccbbcccccffffffffffffffffcccbbcf2ccccfcbfcccff...........
    .....2fccfcccccccbbbcfbb2ffffbbbbbff2bffccccf2cccfcbbccccf............
    ......fccffcccccccccf2bb2fffbbbbbbbf2bb2fcccf2ccccbbcccccf............
    ......f2ccfbbccccccf2f222ffcbbbbbbbff2f22fccf2cbbbcccccc2.............
    .......fccccbbccccccffffffffccbbbbbffffffccfffcbcccccfccf.............
    .......fccccccbbccccff22ffcfffcbbffffb2f2ff2ffccccccbccf..............
    ........2cccccccbbbcffcccffccfffffbffffffbb2ffccccbbcc2...............
    ........fcccfccccccffcccfffffcbffbbf.fccccccffcccbbc2f................
    .........2cccbbbcccffcf2.ffffffbbfff..2fccccffcccccf..................
    ..........fccccbccc22f...ff2f2ffffff....f2fbffcf22f...................
    ...........2fcccccccff...f22f2cfffff.......b2fff......................
    .............ff222ff.....f22f2cc2fff.......b2.........................
    ........................ff2ff222f2ff.......f2.........................
    ........................f2f..fff2fff.......f2.........................
    ........................fff....fff2f.......f2.........................
    .......................f2f......ff2f.......f2.........................
    .......................fff2......ff222.....22.........................
    .......................f222......ff222.....2..........................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
`)
dark_knight.setPosition(65, 90)
let orb = sprites.create(img`
    . 1 1 1 1 . . . . . . . . . . .
    . . 2 c 2 1 1 1 . . . . . . . .
    . . . . b 2 2 2 1 . . . . . . .
    . . . 2 2 2 2 2 1 . . . . . . .
    . 2 2 . . 2 c b 2 1 1 . . . . .
    . . . . . . . b 2 2 1 1 . . . .
    . . . . . . . 2 2 2 2 1 . . . .
    . . . . . 2 2 . 2 2 2 1 . . . .
    . . . . . . . . . 2 2 1 . . . .
    . . . . . . 2 2 c 2 2 1 . . . .
    . . . . . . . . b 2 2 1 . . . .
    . . 2 2 . . . c 2 2 1 . . . . .
    . . . . 2 2 2 2 2 2 1 . . . . .
    . . . . . c 2 2 2 1 . . . . . .
    . . 2 2 b b 2 1 1 . . . . . . .
    . 1 1 1 1 1 1 . . . . . . . . .
`)
orb.setPosition(100, 90)
//  sprite player
let knight_right = img`
    ..................
    ..................
    ..88...........1..
    .8888fffffff..111.
    .8.ff181818f..1b1.
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
let knight_left = img`
    ..................
    ..................
    ..1...........88..
    .111..fffffff8888.
    .1b1..f818181ff.8.
    .1b1.ff1111118f...
    .1b1..ffffff11f...
    .1b1..fddddd18f...
    .1b1..fd1d1d11f...
    .1c1..fdfdfd1f....
    .1c1..fdddddf.....
    fffff.ff111ff.....
    ..eddf111551f.....
    ..eddff1f111f.....
    .f5f..8f1ffff.....
    ..f...f1bbb1f.....
    ......f8ff88f.....
    .....f11ff11f.....
`
let knight_right_jump = img`
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
    ....f11ff..............
    .......................
    .......................
    .......................
`
let knight_left_jump = img`
    11.....................
    1b1.................88.
    .1b1........fffffff8888
    ..1b1.......f818181ff.8
    ...1b1.....ff1111118f..
    ....1c1..f..ffffff11f..
    .....1c1f...fddddd18f..
    ......1ee...fd1d1d11f..
    ......feee..fdfdfd1f...
    .....f..e5f.fdddddf....
    .........ff.ff111ff....
    ..........df111551f....
    ...........ff1f111f....
    ............8f1ffff....
    ............f11111f....
    ............f8ff88f....
    ...........f11ff88f....
    ..............ff11f....
    .......................
    .......................
    .......................
`
let knight_still = img`
    ..................
    .........88.......
    ........88.8...1..
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
// upgraded player
let upgraded_knight_right = img`
    ..................
    ..................
    ..2222............
    .2222fffffff...2..
    .22ff515151ff.555.
    .22f1555555ff51dd5
    .2.f55fffffff.515.
    ...f15f5555f...5..
    ...f5f5fffff...5..
    ....fff55f5f...5..
    ....5f55555f...5..
    ...25ff555ff...5..
    ...22f522555f1f5..
    ...22f555f5ff1f5..
    ...22ffff5f1...5..
    ..222f52225f...5..
    ..22.f11ff1f...5..
    .222.f55ff55f..f..
`
let upgraded_knight_left = img`
    ..................
    ..................
    ............2222..
    ..2...fffffff2222.
    .555.ff151515ff22.
    5dd15ff5555551f22.
    .515.fffffff55f.2.
    ..5...f5555f51f...
    ..5...fffff5f5f...
    ..5...f5f55fff....
    ..5...f55555f5....
    ..5...ff555ff52...
    ..5f1f555225f22...
    ..5f1ff5f555f22...
    ..5...1f5ffff22...
    ..5...f52225f222..
    ..5...f1ff11f.22..
    ..f..f55ff55f.222.
`
let upgraded_knight_right_jump = img`
    .......................
    ..2222.................
    .2222fffffff...........
    .22ff515151f...........
    .22f1555555ff...5552...
    .2.f55ffffff....5155...
    ...f15f5555f....51d5...
    ...f5f5fffff....5555...
    ....fff55f5f...5.......
    ....5f55555f.f5........
    ....5ff555ff.ff........
    ....2f522555f1.........
    ....2f555f5ff..........
    ..222ffff5f1...........
    ..222f52225f...........
    .222.f11ff1f...........
    .222.f51ff55f..........
    .22.5f55ff.............
    .2.5...................
    2.f....................
    .......................
`
let upgraded_knight_left_jump = img`
    .......................
    .................2222..
    ...........fffffff2222.
    ...........f151515ff22.
    ...2555...ff5555551f22.
    ...5515....ffffff55f.2.
    ...5d15....f5555f51f...
    ...5555....fffff5f5f...
    .......5...f5f55fff....
    ........5f.f55555f5....
    ........ff.ff555ff5....
    .........1f555225f2....
    ..........ff5f555f2....
    ...........1f5ffff222..
    ...........f52225f222..
    ...........f1ff11f.222.
    ..........f55ff15f.222.
    .............ff55f5.22.
    ...................5.2.
    ....................f.2
    .......................
`
let upgraded_knight_still = img`
    ..................
    ........222.......
    .......22222......
    .....fffffff2.....
    ....ff15151ff..2..
    ....f5555555f.555.
    ....f5fffff5f5d1d5
    ....f5555555f.515.
    ....f55fff55f..5..
    .....f55f55f...5..
    .....f55555f...5..
    ....2ff555ff2..5..
    ....f5552255f1f5..
    ...1ff5fff5ff1f5..
    ...f12f222f12..5..
    ....2f11211f2..5..
    ....2f51f15f2..5..
    ....2f55f55f...f..
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
    4444443333444444
    4444333333334555
    4433444555553355
    4341555555551535
    35555a5555555553
    3555aaaa55aaaaa3
    35aaaaaaaaaaaaa3
    3aaaaaaaaaaaaaa3
    eeeeeeeeeee...ee
    f..............f
    f.7.2.....2....f
    feee...b.b.eeeef
    f......8.8.....f
    f......8.8.....f
    f......eee.....f
    f..............f
    feee2..bb..2.6.f
    f......88......f
    f......ee......f
    f..............f
    feee...b.b.eeeef
    f......8.8.....f
    f...2..8.8.2...f
    f......eee...c.f
    f.9..........eef
    feee...b.b.....f
    f......8.8.....f
    f......eee.....f
    f...2......2...f
    f......b.b.....f
    feee...8.8..eeef
    f......8.8.....f
    f......eee.....f
    f.....b.b......f
    feee2.8.8..2.6.f
    f.....8.8......f
    f.....eee......f
    f..............f
    f..........eeeef
    f......bb......f
    f...2..88..2...f
    f......ee......f
    f.c..........7.f
    feee...bb...eeef
    f......88......f
    f......ee......f
    f...2......2...f
    f.....b.b..eeeef
    f.....8.8......f
    f.....8.8......f
    f.....eee......f
    f..9...........f
    feee2......2...f
    f..............f
    f.............6f
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
    c c 4 4 c 4 4 4 5 5 4 c c 4 4 4
    4 4 4 4 4 4 2 4 4 4 4 4 4 5 4 2
    4 2 5 5 4 4 4 4 2 4 4 4 4 4 5 4
    2 4 4 5 4 4 4 2 2 4 4 4 4 4 4 4
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
    . d c b b b d d d 1 b b b c d .
    . d c b b b d d 1 d b b b c d .
    . d c c b d d d d d d b c c d .
    b d d d d d d d d d d d d d d b
    c d d d c c d d d d c c d d d c
    d b d d b c c d d c c b d d b d
    d d d d b b c d d c b b d d d d
    d d d d c b d d d d b c d d d d
    d d d d c d 1 d d d d c d d d d
    d d d d d d d 1 d d d d d d d d
    d b d d b c d d d d c b d d b d
    c d d b c d d d d d d c b d d c
    b d c b c d d d d d d c b c d b
    . d b c d d d d d d d d c b d .
    . d d d b c d d d d c b d d d .
    . d d b b c c d d c c b b d d .
`)
scene.setTile(10, img`
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
scene.setTile(6, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 2 2 . . . . . . . . . . . .
    . 2 c c 2 2 2 2 2 2 2 2 2 . . .
    2 c f f b b b b b b b b b 2 . .
    2 c f f b b b b b b b b b b 2 .
    . 2 b b 2 f 2 b 2 f 2 b 2 2 . .
    . . 2 2 . 2 2 f 2 2 2 f 2 . . .
    . . . . . . . 2 . . . 2 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
scene.setTile(1, img`
    5 5 5 5 5 b c d d c b 5 5 5 5 5
    5 5 5 5 5 d 1 d d d d 5 5 5 5 5
    5 5 5 5 5 1 d b b d d 5 5 5 5 5
    5 5 5 5 5 d c d f f d 5 5 5 5 5
    5 5 5 5 5 5 d f f d 5 5 5 5 5 5
    5 5 5 5 5 f f . . f f 5 5 5 5 5
    5 5 5 5 5 f . 5 . . f 5 5 5 5 5
    5 5 5 5 f f 5 5 5 . f f 5 5 5 5
    5 5 5 5 f f 5 4 2 5 f f 5 5 5 5
    5 5 5 5 f . 4 2 2 5 . f 5 5 5 5
    5 5 5 5 f 5 5 4 4 5 . f 5 5 5 5
    5 5 5 5 f . 5 4 4 4 5 f 5 5 5 5
    5 5 5 5 f . 5 5 5 5 . f 5 5 5 5
    5 5 5 5 f d e e e e d f 5 5 5 5
    5 5 5 5 5 f f e e f f 5 5 5 5 5
    5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5
`)
scene.setTile(11, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f 1 f f f 1 f f f f f
    f f f f f 1 f f f f f 1 f f f f
    f f f f f 1 1 f f f 1 1 f f f f
    f f f f 1 1 f 1 1 1 f 1 1 f f f
    f f f f f f 1 1 f 1 1 f f f f f
    f f f f f f f 1 1 1 f f f f f f
    f f f f f f f f 1 f 1 f f f f f
    f f f f f f f f 1 1 1 f f f f f
    f f f f f f f 1 f 1 f f f f f f
    f f f f f f f 1 1 1 f f f f f f
    f f f f f f f 1 f 1 f f f f f f
    f f f f f f f 1 1 1 f f f f f f
    f f f f f f 1 f 1 f f f f f f f
    f f f f f f 1 1 1 f f f f f f f
`)
scene.setTile(8, img`
    . . . . . . 1 . 1 . . . . . . .
    . . . . . . . 1 1 . . . . . . .
    . . . . . 1 1 1 . . . . . . . .
    . . . . . 1 . 1 . . . . . . . .
    . . . . . 1 1 1 . . . . . . . .
    . . . . . 1 . 1 . . . . . . . .
    . . . . . 1 1 1 . . . . . . . .
    . . . . . . 1 . 1 . . . . . . .
    . . . . . . 1 1 1 . . . . . . .
    . . . . . . . 1 . 1 . . . . . .
    . . . . . . . 1 1 1 . . . . . .
    . . . . . . 1 . 1 . . . . . . .
    . . . . . . 1 1 1 . . . . . . .
    . . . . . . . 1 . 1 . . . . . .
    . . . . . . . 1 1 1 . . . . . .
    . . . . . . 1 . 1 . . . . . . .
`)
// enemies
//  Powerups
scene.setTile(7, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f 1 1 f f f 1 1 f f f f f
    f f f 1 2 2 1 f 1 2 2 1 f f f f
    f f 1 2 2 2 2 1 2 2 2 2 1 f f f
    f f 1 2 2 2 2 2 2 1 2 2 1 f f f
    f f 1 2 2 2 2 2 1 2 2 2 1 f f f
    f f 1 2 2 2 2 2 2 2 2 2 1 f f f
    f f f 1 2 2 2 2 2 2 2 1 f f f f
    f f f f 1 2 2 2 2 2 1 f f f f f
    f f f f f 1 2 2 2 1 f f f f f f
    f f f f f f 1 2 1 f f f f f f f
    f f f f f f f 1 f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`)
scene.setTile(12, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    1 1 1 f f f f f f f f f f 1 1 1
    f 1 1 1 f f f f f f f f 1 1 1 f
    f 1 1 d 1 1 1 f f 1 1 1 d 1 1 f
    f 1 1 d d 1 1 d d 1 1 d d 1 1 f
    f 1 d 1 b d 1 d d 1 d b 1 d 1 f
    f d 1 1 1 b 1 d d 1 b 1 1 1 d f
    f f 1 1 1 b 1 d d 1 b 1 1 1 f f
    f f f 1 1 1 1 d d 1 1 1 1 f f f
    f f f f 1 1 1 d 1 1 1 1 f f f f
    f f f f f f f 1 1 f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`)
scene.setTile(9, img`
    ffffffffffffffffffff
    ffffffffffffffffffff
    ffffffffffffffffffff
    fffffffffff444ffffff
    ffffffffff45554fffff
    44fffff444554554ffff
    454fff454f44f454ffff
    f454f454fffff454ffff
    ff45454ffffff454ffff
    fff454ffffff454fffff
    ff45454ffff4554fffff
    f454f454ff455444ffff
    454fff45445555554fff
    44fffff44f444444ffff
    ffffffffffffffffffff
    ffffffffffffffffffff
`)
game.onUpdateInterval(2000, function on_update_interval() {
    let ghost1 = sprites.createProjectileFromSide(img`
        ........................
        ........................
        ........................
        ..........1111..........
        ........11555511........
        .......1255555521.......
        ......12455555551.......
        ......144555555541......
        ......144455555541......
        ......144444455541......
        ......144444455541......
        ......124444444541......
        ......112244214541......
        .......1b224b14421......
        .......111244bb1111.....
        .......1111b122252b1....
        ......11111111b45251....
        ...1111111111..14141....
        .....111111.....1.1.....
        ........................
        ........................
        ........................
        ........................
        ........................
    `, 80, 20)
    let ghost2 = sprites.createProjectileFromSide(img`
        ........................
        ........................
        ........................
        ..........1111..........
        ........11555511........
        .......1255555521.......
        .......15555555421......
        ......145555555441......
        ......145555554441......
        ......145554444441......
        ......145554444441......
        ......145444444421......
        ......145412442211......
        ......12441b422b1.......
        .....1111bb442111.......
        ....1b252221b1111.......
        ....15254b11111111......
        ....14141..1111111111...
        .....1.1.....111111.....
        ........................
        ........................
        ........................
        ........................
        ........................
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
let lava = sprites.create(img`
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444444445544444444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222
    ee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee4444442444
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
    44555544444445444445555444444454444555544444445444455554444444544445445555444444454444445555444444454444455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444
    24444454445444442244444544454444424444454445444442444445444544444244244444544454444424444444544454444424444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454
    24444444444444442244444444444444424444444444444442444444444444444244244444444444444424444444444444444424444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444
    44444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444445544444444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445
    44444224444455544444442244444555444444224444455544444422444445554444444442244444555444444442244444555444444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444
    44444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444
    44444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444444244444444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444
    24222444442424442242224444424244424222444442424442422244444242444242242224444424244424442224444424244424422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424
    44444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444445444444444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445
`, SpriteKind.Enemy)
lava.setPosition(120, 1020)
lava.setFlag(SpriteFlag.ShowPhysics, true)
// animation
//  lava.set_position(128, lava.y - .5)
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
    
    if (info.score() > 10 && controller.dx() > 0 && controller.A.isPressed()) {
        knight.setImage(upgraded_knight_right_jump)
    } else if (controller.dx() < 0 && controller.A.isPressed()) {
        knight.setImage(upgraded_knight_left_jump)
    } else if (controller.dx() > 0) {
        knight.setImage(upgraded_knight_right)
    } else if (controller.dx() < 0) {
        knight.setImage(upgraded_knight_left)
    } else {
        knight.setImage(upgraded_knight_still)
    }
    
    if (lava.y > 125) {
        lava.setVelocity(0, -20)
    } else {
        lava.setVelocity(0, 0)
        lava.setPosition(174, 125)
        scene.cameraShake()
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})
