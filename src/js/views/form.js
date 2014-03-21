/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/form.hbs',
    ], function(common, Backbone, $, Handlebars , template ) {
    var view = Backbone.View.extend({
        el : $("#js-form-page"),
        compiled : undefined,
        dom : {},
        events: {
            "click #submit" : "submit"
        },
        initialize: function () {
            
        },
        render: function () {
            if(!this.compiled) this.compiled = Handlebars.compile(template);
            this.$el.html(this.compiled());
            this.dom.$form = this.$el.find("#js-form");
            this.dom.$formError = this.$el.find("#js-form-error");
            this.setPlaceholder();
            this.setValidation();
            return this;
        },
        submit : function () {
            this.dom.$form.submit();
        },
        setPlaceholder : function () {
            this.$el.find('input, textarea').placeholder();
        },
        setValidation : function () { //set validation for form
            var self = this;
            this.dom.$form.validate({
                debug : true,
                submitHandler: function(form) {
                    _.bind(self.sendAjax, self)();
                },
                invalidHandler: function(event, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        self.dom.$formError.fadeIn();
                    }else{
                        self.dom.$formError.fadeOut();
                    }
                },
                errorPlacement: function(error, element) {
                    //
                }
            });
        },
        sendAjax : function () { //when validation is done
            if(this.sending) return false;
            this.sending = true;
            $.ajax({
                url : common.apiUrl+"entry",
                type: "POST",
                data : this.dom.$form.serialize(),
                success: function () {
                    this.sending = false;
                    console.log(arguments);
                },
                error : function () {
                    this.sending = false;
                    alert("error");
                }
            });
        }
    });
    return view;
});