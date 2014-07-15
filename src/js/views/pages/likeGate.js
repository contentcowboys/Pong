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
            "click #js-fb-login" : "login",
            "click .js-next" : "next"
        },
        initialize: function(){
            //tracking stuff
            if(common.onFacebook){
                _gaq.push(['_trackEvent', 'likeGate-facebook', "show"]);
            }else{
                _gaq.push(['_trackEvent', 'likeGate-mobile', "show"]);
            }
            this.name = "likeGate";
            FB.Event.subscribe('edge.create', _.bind(this.pageLiked, this));
        },
        render: function(){
            this.$el.html(this.compiledTemplate( {pageId : common.pageId , onFacebook : common.onFacebook } ));
            FB.XFBML.parse(this.el);
            return this;
        },
        pageLiked : function () {
            common.pageLiked = true;
            Backbone.trigger("app:checkLiked");
            if(common.onFacebook){
                _gaq.push(['_trackEvent', 'likeGate-facebook', "liked"]);
            }else{
                _gaq.push(['_trackEvent', 'likeGate-mobile', "liked"]);
            }
        },
        next : function(){
            Backbone.trigger("page:show" , common.landingPage);
        }
    });
    return view;
});