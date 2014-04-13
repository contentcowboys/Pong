/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'views/partials/_languageSwitcher',
    'text!templates/pages/info.hbs',
    ], function(common, Backbone, $, Handlebars , LanguageSwitcher,  template ) {
    var view = Backbone.View.extend({
        el : $("#js-info-page"),
        compiledTemplate : Handlebars.compile(template),
        events: {
        },
        initialize: function(){
            this.name = "example";
             if(!this.compiled) this.compiled = Handlebars.compile(template);
        },
        render: function(){
            this.$el.html(this.compiledTemplate());
            this.childViews();
            return this;
        },
        removeChildViews : function () {
            if (this.languageSwitch) this.languageSwitch.remove();
        },
        childViews : function () {
            if(this.languageSwitcher) this.languageSwitcher.remove();
            if(common.multiLanguage) this.languageSwitcher = new LanguageSwitcher( { page: this.name } ).render();
        }
    });
    return view;
});