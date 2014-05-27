/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/pages/example.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-example-page"),
        compiledTemplate : Handlebars.compile(template),
        events: {
        },
        initialize: function(){
            this.name = "example";
             if(!this.compiled) this.compiled = Handlebars.compile(template);
        },
        render: function(){
            this.$el.html(this.compiledTemplate());
            return this;
        }
    });
    return view;
});