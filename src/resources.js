game.resources = [
    /**
     * Graphics.
     */

    // the main player spritesheet
    // {name: "gripe_run_right",     type:"image",    src: "data/img/sprite/gripe_run_right.png"},
    // // the spinning coin spritesheet
    // {name: "spinning_coin_gold",  type:"image",    src: "data/img/sprite/spinning_coin_gold.png"},
    // // our enemty entity
    // {name: "wheelie_right",       type:"image",    src: "data/img/sprite/wheelie_right.png"},
    // game font
    {name: "font_white",          type:"image",    src: "data/img/font/font_white.gif"},
    // title screen
    {name: "2_lados_title_screen",        type:"image",    src: "data/img/gui/2_lados_title.png"},

    // our tilesets
    {name: "streets",             type:"image",    src: "data/streets.png"},
    {name: "street_grass",        type:"image",    src: "data/street_grass.png"},
    {name: "pixel city",          type:"image",    src: "data/pixel city.png"},
    {name: "grass",               type:"image",    src: "data/grass.png"},
    {name: "grass2",               type:"image",    src: "data/grass2.png"},

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
