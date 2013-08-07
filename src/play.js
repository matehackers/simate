game.PlayScreen = me.ScreenObject.extend({

    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // load a level
        me.levelDirector.loadLevel("city");

        // add a default HUD to the game mngr
        me.game.addHUD(0, 0, 640, 480);

        // add a new HUD item
        me.game.HUD.addItem("name", new game.NameObject(300,30));

        me.game.HUD.addItem("command", new game.CommandObject(70, 330));
        me.game.HUD.addItem("status", new game.StatusObject(466,24));


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
        me.game.disableHUD();

        // stop the current audio track
        me.audio.stopTrack();
    }
});