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
"""))
dark_knight.set_position(65, 100)
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
    .....ff............
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
    ............ff.....
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
    ....f11ff22............
    ....42244554...........
    ....4554.44............
    .....44................
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
    .............22ff11f....
    ............45544224....
    .............44.4554....
    .................44.....
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
game.on_update(on_update)

def on_update2():
    if info.score() > 10 and controller.dx() > 0 and controller.A.is_pressed():
        knight.set_image(upgraded_knight_right_jump)
    elif info.score() > 10 and controller.dx() < 0 and controller.A.is_pressed():
        knight.set_image(upgraded_knight_left_jump)
    elif info.score() > 10 and controller.dx() > 0:
        knight.set_image(upgraded_knight_right)
    elif info.score() > 10 and controller.dx() < 0:
        knight.set_image(upgraded_knight_left)
    # else:
    #     knight.set_image(upgraded_knight_still)
game.on_update(on_update2)

lava = sprites.create(img("""
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444443445544444444444444554444444444444444455444444444443445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   444422442222244e444422442222244e444422442222244e444444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e444422442222244e4444224422222
   ee44444424444eecee44444424444eecee44444424444eecee4ee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444eecee44444424444
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
   4455554444444544445555444444454444555544444445444454455554444444544445555444444454444555544444445444455554444444544445555444444454444555544444445444455554444444
   2444445444544444244444544454444424444454445444442442444445444544444244444544454444424444454445444442444445444544444244444544454444424444454445444442444445444544
   2444444444444444244444444444444424444444444444442442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444444444
   4444444444455444444444444445544444444444444554444444444444444455444444444444445544444444444444554444444444444455444444444444445544444444444444554444444444444455
   4444422444445554444442244444555444444224444455544444444422444445554444442244444555444444224444455544444422444445554444442244444555444444224444455544444422444445
   4444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442444444
   4444444444442444444444444444244444444444444424444444444444444442444444444444444244444444444444424444444444444442444444444444444244444444444444424444444444444442
   2422244444242444242224444424244424222444442424442422422244444242444242224444424244424222444442424442422244444242444242224444424244424222444442424442422244444242
   4444444444454444444444444445444444444444444544444444444444444454444444444444445444444444444444544444444444444454444444444444445444444444444444544444444444444454
"""))
lava.set_position(80, 1010)

def on_overlap2(sprite, otherSprite):
    game.over()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap2)
def on_update_interval2():
    if knight.y > 120:
        lava.set_position(100, lava.y - .5)
game.on_update_interval(30, on_update_interval2)
def on_overlap3(sprite, otherSprite):
    game.over()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap3)
