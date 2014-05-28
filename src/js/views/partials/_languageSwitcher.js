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
            "click li" : "switchLang"
        },
        initialize: function(){
            this.$el = $("#js-language-switcher");
            return this;
        },
        render: function(){
            this.$el.html(this.compiledTemplate({language: common.lang, languages: common.languages }));
        },
        switchLang: function(e){
            var lang = $(e.currentTarget).attr("data-lang");
            if(common.lang == lang) return false;

            _gaq.push(['_trackEvent', 'language switch', lang+" to "+common.lang]);

            $('body').removeClass(common.lang).addClass(lang);
            common.lang = lang;

            this.render();
            Backbone.trigger("page:render:current");
        },
        remove: function() {
          this.stopListening();
          return this;
        }
    });
    return LanguageSwitcherView;
});