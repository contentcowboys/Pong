/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/end.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-end-page"),
        compiled : undefined,
        events: {
        },
        initialize: function(){
            console.log(this.$el);
        },
        render: function(){
            if(!this.compiled) this.compiled = Handlebars.compile(template);
            this.$el.html(this.compiled());
            return this;
        }
    });
    return view;
});