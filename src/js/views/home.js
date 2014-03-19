/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/home.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-home-page"),
        compiled : undefined,
        events: {
        },
        initialize: function(){
        },
        render: function(){
            if(!this.compiled) this.compiled = Handlebars.compile(template);
            this.$el.html(this.compiled());
            return this;
        }
    });
    return view;
});