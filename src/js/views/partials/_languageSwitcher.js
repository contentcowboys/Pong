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
        },
        initialize: function(){
            this.$el = $("#js-language-switcher");
            return this;
        },
        render: function(){
            this.$el.html(this.compiledTemplate({language: common.lang, languages: common.languages }));
        },
        open : function(e){
            e.preventDefault();
        },
        switchLang: function(lang){
            if(common.lang == lang) return false;
            _gaq.push(['_trackEvent', 'language switch', lang+" to "+common.lang]);
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