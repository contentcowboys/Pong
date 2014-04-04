/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/pages/end.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-end-page"),
        compiledTemplate : Handlebars.compile(template),
        events: {
        },
        initialize: function(){
        },
        render: function(){
            this.$el.html(this.compiledTemplate());
            return this;
        }
    });
    return view;
});