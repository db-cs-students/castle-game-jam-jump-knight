"""
Title: Jump Knight
Creators: Nick R. Jackson C.
Description: Game Jam: Castle, knight themed jump game with combat late game.
"""
#music
def on_forever():
    music.play_melody("D E D E C - - - ", 200)
    music.play_melody("D E D C D - - - ", 200)
    music.play_melody("C D - E - - E - ", 200)
    music.play_melody("D C - D - - - - ", 200)
    music.play_melody("D E D E C - - - ", 200)
    music.play_melody("- D E D C D - - ", 200)
    music.play_melody("- C D C D E - - ", 200)
    music.play_melody("- C D C D - - C ", 200)
    music.play_melody("- - - - - - - - ", 70)
forever(on_forever)
# game Description:
game.splash("Jump Knight", "Defeat Ghosts to upgrade your knight and escape the castle!")

# boss_fight
dark_knight = sprites.create(img("""
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
"""))
dark_knight.set_position(65, 90)
dark_knight.say("What are you doing here?!?!")

# sprite player

knight_right = img("""
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
""")
knight_left = img("""
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
""")
knight_right_jump = img("""
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
    .....ff..bb........
    .....bb............
""")
knight_left_jump = img("""
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
    ........bb..ff.....
    ............bb.....
""")
knight_still = img("""
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
""")
#upgraded player

upgraded_knight_right = img("""
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
""")
upgraded_knight_left = img("""
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
""")
upgraded_knight_right_jump = img("""
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
""")
upgraded_knight_left_jump = img("""
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
    ...............ff11f....
    ........................
    ........................
    ........................
""")
upgraded_knight_still = img("""
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
""")

knight = sprites.create(knight_still,SpriteKind.player)
controller.move_sprite(knight,110,0)
knight.set_position(60, 870)
knight.set_flag(SpriteFlag.SHOW_PHYSICS, True)

#setup
info.set_score(0)
info.set_life(1)
# jump and gravity
def on_jump():
    if knight.is_hitting_tile(CollisionDirection.BOTTOM):
        knight.set_velocity(0, -160)
        music.play_tone(Note.F3, 100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_jump)


knight.ay = 250
# background
if knight.y > 119:
    scene.camera_follow_sprite(knight)
#change background later
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
# Tilemap make larger later
scene.set_tile_map(img("""
    aaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaa
    3aaaaaaaaaaa5aa3
    3aaaaaaaaaaaaaa3
    3aaaaaaaaaaaaaa3
    3aaaaaaaaaaaaaa3
    eeeeeeeeeee...ee
    f..............f
    f..............f
    f.ee...2...eeeef
    f..............f
    f..............f
    f......eee.....f
    f..............f
    feee2......2...f
    f..............f
    f......ee......f
    f..............f
    f.ee.......eeeef
    f..............f
    f...2......2...f
    f......eee.....f
    f..............f
    feee...........f
    f..............f
    f......ee......f
    f...2......2...f
    f..........eeeef
    f.ee...........f
    f..............f
    f......eee.....f
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
    feee........ee.f
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
"""))
scene.set_tile(15, img("""
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
"""), True)
scene.set_tile(13, img("""
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
"""), True)
scene.set_tile(14, img("""
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e d d d d b d e d d b d d d d b d d d b d d d e d d b d d d d e
    e d d b b d d e d d d d d b b d d d d d b d d e d d d b b d d e
    e d d d d d d e d d d d d d d d d b d d d d d e d d d d d d d e
    e d b d d d d e d b d d d d d d d d d d d d d e d b d d d d d e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
"""), True)
scene.set_tile(2, img("""
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
"""))
scene.set_tile(1, img("""
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
"""))
scene.set_tile(3, img("""
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
"""))
scene.set_tile(9, img("""
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
"""))
scene.set_tile(5, img("""
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
"""))

#enemies

# Powerups
scene.set_tile(10, img("""
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
"""))

def on_update_interval():
    ghost1 = sprites.create_projectile_from_side(img("""
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
    """), 80, 20)
    ghost2 = sprites.create_projectile_from_side(img("""
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
    """), -80, 0)
    ghost1.set_flag(SpriteFlag.DESTROY_ON_WALL, False)
    ghost2.set_flag(SpriteFlag.DESTROY_ON_WALL, False)
game.on_update_interval(2000, on_update_interval)

def on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_score_by(1)
    otherSprite.start_effect(effects.fire)
    music.pew_pew.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_overlap)



#animation
def on_update():
    # knight.say(str(controller.x()))
    if controller.dx() > 0 and controller.A.is_pressed():
        knight.set_image(knight_right_jump)
    elif controller.dx() < 0 and controller.A.is_pressed():
        knight.set_image(knight_left_jump)
    elif controller.dx() > 0:
        knight.set_image(knight_right)
    elif controller.dx() < 0:
        knight.set_image(knight_left)
    else:
        knight.set_image(knight_still)

    if info.score() > 10 and controller.dx() > 0 and controller.A.is_pressed():
        knight.set_image(upgraded_knight_right_jump)
    elif controller.dx() < 0 and controller.A.is_pressed():
        knight.set_image(upgraded_knight_left_jump)
    elif controller.dx() > 0:
        knight.set_image(upgraded_knight_right)
    elif controller.dx() < 0:
        knight.set_image(upgraded_knight_left)
    else:
        knight.set_image(upgraded_knight_still)

    if lava.y > 125:
        lava.vy = -25
    else:
        lava.vy = 0
        # lava.set_position(128, lava.y - .5)
game.on_update(on_update)

lava = sprites.create(img("""
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444434455444444444444445544444444444444444554444444444444444554444444444444445544444444444344554444444444444455444444444444444445544444444444344554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    444422442222244e444422442222244e444422442222244e444444422442222244e44444422442222244e4444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444222.
    ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eeceeee44444424444eeceee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
    44555544444445444455554444444544445555444444454444544555544444445444444555544444445444445555444444454444555544444445444455554444444544445445555444444454444555544444445444455554444444544445555444444454444555544444445444455555.
    24444454445444442444445444544444244444544454444424424444454445444442444444454445444442444444544454444424444454445444442444445444544444244244444544454444424444454445444442444445444544444244444544454444424444454445444442444444.
    24444444444444442444444444444444244444444444444424424444444444444442444444444444444442444444444444444424444444444444442444444444444444244244444444444444424444444444444442444444444444444244444444444444424444444444444442444444.
    44444444444554444444444444455444444444444445544444444444444444554444444444444444554444444444444445544444444444444554444444444444455444444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444.
    44444224444455544444422444445554444442244444555444444444224444455544444444224444455544444442244444555444444224444455544444422444445554444444442244444555444444224444455544444422444445554444442244444555444444224444455544444442.
    44444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444444.
    44444444444424444444444444442444444444444444244444444444444444424444444444444444424444444444444444244444444444444424444444444444442444444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444.
    24222444442424442422244444242444242224444424244424224222444442424442444222444442424442442224444424244424222444442424442422244444242444242242224444424244424222444442424442422244444242444242224444424244424222444442424442422224.
    44444444444544444444444444454444444444444445444444444444444444544444444444444444544444444444444445444444444444444544444444444444454444444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444.
"""),SpriteKind.enemy)
lava.set_position(120, 1020)
lava.set_flag(SpriteFlag.SHOW_PHYSICS, True)
def on_overlap2(sprite, otherSprite):
    game.over()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap2)

# 174 119

