/*!
 *   Main Game file
 *   This code was kindly based off in the melonJS tutorial code
 *   Thank you guys at http://www.melonjs.org
 *
 **/

var game = {
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init("screen", 640, 480, true, "auto")) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
             window.onReady(function () {
                  me.plugin.register.defer(debugPanel, "debug");
             });
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },

    // Simple image resize function using "nearest neighbor"
    // Only works for scaling up
    // Code taken from https://github.com/blipjoy/alienauts
    "resize" : function resize(image, scale) {
        var iw = image.width,
            ih = image.height,
            ipitch = iw * 4,
            ow = iw * scale,
            oh = ih * scale,
            opitch = ow * 4,
            context = me.video.createCanvasSurface(ow, oh);

        // Get original pixels
        context.drawImage(image, 0, 0);
        var ipixels = context.getImageData(0, 0, iw, ih);
        try {
            var opixels = context.createImageData(ow, oh);
        }
        catch(e) {
            var opixels = context.getImageData(0, 0, ow, oh);
        }

        var ix = 0,
            iy = 0;

        for (var oy = 0; oy < oh; oy++) {
            iy = Math.floor(oy / scale);
            for (var x = 0, ox = 0; x < ow; x++, ox += 4) {
                ix = Math.floor(x / scale) * 4;
                opixels.data[ox + 0 + oy * opitch] = ipixels.data[ix + 0 + iy * ipitch]; // R
                opixels.data[ox + 1 + oy * opitch] = ipixels.data[ix + 1 + iy * ipitch]; // G
                opixels.data[ox + 2 + oy * opitch] = ipixels.data[ix + 2 + iy * ipitch]; // B
                opixels.data[ox + 3 + oy * opitch] = ipixels.data[ix + 3 + iy * ipitch]; // A
            }
        }

        context.putImageData(opixels, 0, 0);

        return context.canvas;
    },

    // Run on game resources loaded.
    "loaded" : function () {
       // set the "Play/Ingame" Screen Object
       me.state.set(me.state.MENU, new game.TitleScreen());

       // set the "Play/Ingame" Screen Object
       me.state.set(me.state.PLAY, new game.PlayScreen());

       // set a global fading transition for the screen
       me.state.transition("fade", "#FFFFFF", 250);

       // add our player entity in the entity pool
       me.entityPool.add("mainPlayer", game.PlayerEntity);
       me.entityPool.add("CoinEntity", game.CoinEntity);
       me.entityPool.add("EnemyEntity", game.EnemyEntity);

       // enable the keyboard
//       me.input.bindKey(me.input.KEY.LEFT,      "left");
//       me.input.bindKey(me.input.KEY.RIGHT, "right");
//       me.input.bindKey(me.input.KEY.X,      "jump", true);
		for (k in config.keys)
		{
			me.input.bindKey(config.keys[k],k);
		}
		me.input.bindMouse(me.input.mouse.LEFT, config.keys.confirm);

       // start the game
       me.state.change(me.state.MENU);
    }
};
