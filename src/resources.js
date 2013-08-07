game.resources = [
    /**
     * Graphics.
     */

    {name: "city_small",        type:"image",    src: "data/city_small.png"},
    {name: "city_medium",       type:"image",    src: "data/city_medium.png"},
    {name: "city_big",          type:"image",    src: "data/city_big.png"},

    // the main player spritesheet
    // game font
    {name: "font_white",          type:"image",    src: "data/img/font/font_white.gif"},
    {name: "font_white_small",     type:"image",    src: "data/img/font/font_white_small.png"},
    // title screen
    {name: "2_lados_title_screen",        type:"image",    src: "data/img/gui/2_lados_title.png"},

    // our tilesets
    {name: "streets",             type:"image",    src: "data/streets.png"},
    {name: "street_grass",        type:"image",    src: "data/street_grass.png"},
    {name: "pixel city",          type:"image",    src: "data/pixel city.png"},
    {name: "grass",               type:"image",    src: "data/grass.png"},
    {name: "grass2",              type:"image",    src: "data/grass2.png"},
    {name: "ui",                  type:"image",    src: "data/img/gui/ui3.png"},

    /*
     * Maps.
      */
    {name: "city", type: "tmx", src: "data/map/city.tmx"},

    /* 
     * Load the music.
     */
    {name: "city1", type: "audio", src: "data/bgm/", channel : 1},
    {name: "opening", type: "audio", src: "data/bgm/", channel : 1},

    /* 
     * Sound effects.
     */
    {name: "cling", type: "audio", src: "data/sfx/", channel : 2},
    {name: "stomp", type: "audio", src: "data/sfx/", channel : 1},
    {name: "jump",  type: "audio", src: "data/sfx/", channel : 1}
];
