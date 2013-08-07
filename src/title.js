
game.TitleScreen = me.ScreenObject.extend({
    // redefine the constructor
    init : function() {
        this.parent(true);

        // title screen image
        this.title         = null;
        this.font          = null;
        this.scrollerfont  = null;
        this.scrollertween = null;

        this.scroller = "// (RE)CONHECIMENTO ";
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
            this.font = new me.BitmapFont("font_white", 16);
            
            // set the scroller
            this.scrollerfont = new me.BitmapFont("font_white", 16);                    
        }
        // reset to default value
        this.scrollerpos = 200;

        // a tween to animate the arrow
        this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10).onComplete(this.scrollover.bind(this)).start();

        me.input.bindKey(config.keys.confirm, "confirm", true);

        // play something
        me.audio.play("cling");
    },

    // some callback for the tween objects
    scrollover : function() {
        // reset to default value
        this.scrollerpos = 640;
        this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
    },

    // update function
    update : function() {
        if (me.input.isKeyPressed("confirm"))
        {
            me.state.change(me.state.PLAY);
        }
        return true;
    },

    // the main drawing function
    draw : function(context) {
        context.drawImage(this.title, 0,0);

        this.font.draw (context, "APERTE ENTER PARA JOGAR",     20, 300);
        this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        //just in case
        this.scrollertween.stop();
   }
});
