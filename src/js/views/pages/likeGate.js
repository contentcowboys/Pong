/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'facebook',
    'controllers/facebook',
    'views/partials/_languageSwitcher',
    'text!templates/pages/likeGate.hbs',
    ], function(common, Backbone, $, Handlebars , FB, facebook, LanguageSwitcher , template  ) {
    var view = Backbone.View.extend({
        el : $("#js-likeGate-page"),
        compiledTemplate : Handlebars.compile(template),
        events: {
            "click #js-fb-login" : "login"
        },
        initialize: function(){
            this.name = "likeGate";
            FB.Event.subscribe('edge.create', _.bind(this.pageLiked, this));
        },
        render: function(){
            this.$el.html(this.compiledTemplate( {pageId : common.pageId , onFacebook : common.onFacebook } ));
            this.childViews();
            FB.XFBML.parse(this.el);
            return this;
        },
        login: function(){
            $.when( facebook.login() ).then(function(){
                Backbone.trigger("app:checkLiked");
            });
        },
        pageLiked : function () {
            common.liked = true;
            Backbone.trigger("app:checkLiked");
        },
        childViews : function () {
            if(this.languageSwitcher) this.languageSwitcher.remove();
            if(common.multiLanguage) this.languageSwitcher = new LanguageSwitcher( { page: this.name } );
        }
    });
    return view;
});