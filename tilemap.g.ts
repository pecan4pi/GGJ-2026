// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010100000100000000000100000001000001010101000000000001000000010000000000000000000000010000000100000101010100000000000100000001010101000001010100010101000000010000000000000001000100000000010100000000000000010001000000000001000000000000000100010000000000010000000000000000000101010100000100000000000000000000000000000001000001010100000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 . . 2 . . . . . 2 . . . 2 
. . 2 2 2 2 . . . . . 2 . . . 2 
. . . . . . . . . . . 2 . . . 2 
. . 2 2 2 2 . . . . . 2 . . . 2 
2 2 2 . . 2 2 2 . 2 2 2 . . . 2 
. . . . . . . 2 . 2 . . . . 2 2 
. . . . . . . 2 . 2 . . . . . 2 
. . . . . . . 2 . 2 . . . . . 2 
. . . . . . . . . 2 2 2 2 . . 2 
. . . . . . . . . . . . . . . 2 
. . 2 2 2 . . . . . . . . . 2 . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
