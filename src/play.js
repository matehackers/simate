game.PlayScreen = me.ScreenObject.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // load a level
        me.levelDirector.loadLevel("city");

        // add a default HUD to the game mngr
        // me.game.addHUD(0, 430, 640, 60);

        // add a new HUD item
        // me.game.HUD.addItem("score", new game.ScoreObject(620,10));

        // make sure everyhting is in the right order
        me.game.sort();

        // play the audio track
        me.audio.playTrack("city1");
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD
        // me.game.disableHUD();

        // stop the current audio track
        me.audio.stopTrack();
    }
});