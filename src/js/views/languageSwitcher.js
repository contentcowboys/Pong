define([
    'common',
    'backbone',
    'jquery',
    'facebook',
    'handlebars',
    'text!templates/languageSwitcher.hbs',
    ], function(common, Backbone, $, FB, Handlebars , LanguageTemplate ) {
    var LanguageSwitcherView = Backbone.View.extend({
        compiled : undefined,
        events: {
            "click .active" : "open",
            "click #js-switch-nl" : "switchNL",
            "click #js-switch-fr" : "switchFR"
        },
        initialize: function(options){
            this.page = options.page;
            this.$el = $("#js-language-"+options.page);
            console.log(this.$el);
            return this;
        },
        render: function(){
            if(!this.compiled) this.compiled = Handlebars.compile(LanguageTemplate);
            this.$el.html(this.compiled({language: common.lang }));
        },
        open : function(e){
            e.preventDefault();
            //open
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