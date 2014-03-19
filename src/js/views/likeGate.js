/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/likeGate.hbs',
    'facebook'
    ], function(common, Backbone, $, Handlebars , template , FB ) {
    var view = Backbone.View.extend({
        el : $("#js-likeGate-page"),
        compiled : undefined,
        events: {
        },
        initialize: function(){
        },
        render: function(){
            if(!this.compiled) this.compiled = Handlebars.compile(template);
            this.$el.html(this.compiled( {pageId : common.pageId } ));
            FB.XFBML.parse(this.el);
            return this;
        }
    });
    return view;
});