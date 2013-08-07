/**
 * Player Entity
 */
game.CityEntity = me.ObjectEntity.extend(
{
    init:function (x, y, settings)
    {
        // call the constructor
        this.parent(x, y , settings);
    },

    update : function ()
    {
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    }

});

game.StatusObject = me.HUD_Item.extend(
{
    init: function(x, y)
    {
     // call the parent constructor
        this.parent(x, y);
        // create a font
        this.font = new me.BitmapFont(config.fonts.small, 8);
        this.font.set("left");

        this.money = 0;
        this.decision = 0;
        this.satisfaction = 0;
    },

    draw : function (context, x, y)
    {
        this.font.draw (context, "STATUS", this.pos.x +x, this.pos.y+y);
        this.font.draw (context, "DINHEIRO: " + this.money, this.pos.x +x, this.pos.y+y + 20 + 16);
        this.font.draw (context, "DECISAO: " + this.decision, this.pos.x +x, this.pos.y+y + 20*2 + 16);
        this.font.draw (context, "SATISFACAO: " + this.satisfaction, this.pos.x +x, this.pos.y+y + 20*3 + 16);
    }
});

game.CommandObject = me.HUD_Item.extend(
{
    init: function(x, y)
    {
     // call the parent constructor
        this.parent(x, y);
        // create a font
        this.font = new me.BitmapFont(config.fonts.medium, 16);
        this.font.set("left");
    },

    draw : function (context, x, y)
    {
        this.font.draw (context, "COMANDOS", this.pos.x +x, this.pos.y+y);
    }
});


game.NameObject = me.HUD_Item.extend(
{
    init: function(x, y)
    {
     // call the parent constructor
        this.parent(x, y);
        // create a font
        this.font = new me.BitmapFont(config.fonts.medium, 16);
        this.font.set("right");
    },

    draw : function (context, x, y)
    {
        this.font.draw (context, "2LADOS - DECIDA", this.pos.x +x, this.pos.y+y);
    }
});
