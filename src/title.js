
game.TitleScreen = me.ScreenObject.extend({
    // redefine the constructor
    init : function() {
        this.parent(true);

        // title screen image
        this.title         = null;
        this.font          = null;
        this.scrollerfont  = null;
        this.scrollertween = null;

        this.scroller = "// BUSQUE (RE)CONHECIMENTO //";
        this.scrollerpos = 600;
    },

    /**
     *  action to perform on state change
     */
    onResetEvent : function() {
        if (this.title == null) {
            // init stuff if not yet done
            this.title = me.loader.getImage("2_lados_title_screen");
            // font to display the menu items
            this.font = new me.BitmapFont(config.fonts.medium, 16);

            // set the scroller
            this.scrollerfont = new me.BitmapFont(config.fonts.medium, 16);
        }
        // reset to default value
        this.scrollerpos = 200;

        // a tween to animate the arrow
        this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10).onComplete(this.scrollover.bind(this)).start();

        me.input.bindKey(config.keys.confirm, "confirm", true);

        // play something
        me.audio.playTrack("opening");
    },

    // some callback for the tween objects
    scrollover : function() {
        // reset to default value
        this.scrollerpos = 640;
        this.scrollertween.to({scrollerpos: -400 }, 10000).onComplete(this.scrollover.bind(this)).start();
    },

    // update function
    update : function() {
        if (me.input.isKeyPressed("confirm"))
        {
            me.audio.play("cling");
            me.state.change(me.state.PLAY);
        }
        return true;
    },

    // the main drawing function
    draw : function(context) {
        context.drawImage(this.title, 0,0);

        this.font.draw (context, "CLIQUE/TOQUE/APERTE ENTER PARA JOGAR",     20, 320);
        this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        //just in case
        this.scrollertween.stop();
        me.audio.stopTrack();
   }
});
