/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/thankYou.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-thankYou-page"),
        compiled : undefined,
        events: {
        },
        initialize: function(){
             if(!this.compiled) this.compiled = Handlebars.compile(template);
        },
        render: function(){
            this.$el.html(this.compiled());
            return this;
        }
    });
    return view;
});