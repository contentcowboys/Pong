define([
    'common',
    'backbone',
    'jquery',
    'facebook',
    'handlebars',
    'text!templates/partials/_languageSwitcher.hbs',
    ], function(common, Backbone, $, FB, Handlebars , template ) {
    var LanguageSwitcherView = Backbone.View.extend({
        compiledTemplate : Handlebars.compile(template),
        events: {
            "click .active" : "open",
            "click #js-switch-nl" : "switchNL",
            "click #js-switch-fr" : "switchFR"
        },
        initialize: function(options){
            this.page = options.page;
            this.$el = $("#js-language-"+options.page);
            return this;
        },
        render: function(){
            this.$el.html(this.compiledTemplate({language: common.lang }));
        },
        open : function(e){
            e.preventDefault();
        },
        switchNL: function(){
            this.switchLang("nl");
        },
        switchFR: function(){
            this.switchLang("fr");
        },
        switchLang: function(lang){
            if(common.lang == lang) return false;
            $('body').removeClass('nl').removeClass('fr').addClass(lang);
            common.lang = lang;
            this.render();
            Backbone.trigger("page:render", this.page);
        },
        remove: function() {
          this.stopListening();
          return this;
        },
    });
    return LanguageSwitcherView;
});