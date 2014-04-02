/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/likeGate.hbs',
    'facebook',
    'controllers/facebook'
    ], function(common, Backbone, $, Handlebars , template , FB, facebook ) {
    var view = Backbone.View.extend({
        el : $("#js-likeGate-page"),
        compiled : undefined,
        events: {
            "click #js-fb-login" : "login"
        },
        initialize: function(){
            FB.Event.subscribe('edge.create', _.bind(this.pageLiked, this));
        },
        render: function(){
            if(!this.compiled) this.compiled = Handlebars.compile(template);
            this.$el.html(this.compiled( {pageId : common.pageId , onFacebook : common.onFacebook } ));
            FB.XFBML.parse(this.el);
            return this;
        },
        login: function(){
            $.when(facebook.login()).then(function(){
                Backbone.trigger("app:checkLiked");
            });
        },
        pageLiked : function () {
            common.liked = true;
            Backbone.trigger("app:checkLiked");
        }
    });
    return view;
});