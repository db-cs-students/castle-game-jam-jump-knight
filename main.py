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

# def boss_fight():
#     if knight.y <

# def dark_knight_destroyed():
#     pass
# dark_knight.on_destroyed(dark_knight_destroyed)

# if dark_knight_destroyed:
#     game.win_effect
#     game.over()