/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'views/partials/_languageSwitcher',
    'text!templates/pages/thankYou.hbs',

    ], function(common, Backbone, $, Handlebars , LanguageSwitcher,  template ) {
    var view = Backbone.View.extend({
        el : $("#js-thankYou-page"),
        compiledTemplate : Handlebars.compile(template),
        events: {
        },
        initialize: function(){
            this.name = "thankYou";
             if(!this.compiled) this.compiled = Handlebars.compile(template);
        },
        render: function(){
            this.$el.html(this.compiledTemplate());
            return this;
        }
    });
    return view;
});