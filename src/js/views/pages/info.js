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
            "click li" : "optionClicked",
            "click #js-send" : "optionCheck"
        },
        initialize: function(){
            this.name = "example";
             if(!this.compiled) this.compiled = Handlebars.compile(template);
        },
        render: function(){
            common.selected = undefined;
            this.$el.html(this.compiledTemplate());
            return this;
        },
        optionClicked: function(e){
            var target = $(e.currentTarget);
            this.$el.find('li.active').removeClass("active");
            common.selected = target.attr("data-value");
            target.addClass("active");
        },
        optionCheck : function(){
            if(!common.selected){
                this.$el.find("ul").addClass("shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("shake");
                });
            }else{
                Backbone.trigger("page:show", "form");
            }

        }
    });
    return view;
});