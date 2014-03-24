/* views/howTo.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/form.hbs',
    'controllers/language'
    ], function(common, Backbone, $, Handlebars , template, language ) {
    var view = Backbone.View.extend({
        el : $("#js-form-page"),
        compiled : undefined,
        dom : {},
        events: {
            "click #submit" : "submit"
        },
        initialize: function () {
            this.compiled = Handlebars.compile(template);
        },
        render: function () {
            this.$el.html(this.compiled({ language : common.lang }));
            this.dom.$form = this.$el.find("#js-form");
            this.dom.$formError = this.$el.find("#js-form-error");
            this.setPlaceholder();
            this.setValidation();
            return this;
        },
        submit : function () {
            this.dom.$form.submit();
        },
        setError : function (error) {
            //#TODO : set correct error from language stuff;
            this.dom.$formError.html( language.get( "formError" , error ) );
            this.dom.$formError.fadeIn();
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
                        self.setError("form");
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
            var self = this;
            this.sending = true;
            $.ajax({
                url : common.apiUrl+"entry",
                type: "POST",
                data : this.dom.$form.serialize(),
                success: function () {
                    self.sending = false;
                    console.log(arguments);
                    //#TODO: show new page
                },
                error : function (xhr) {
                    self.sending = false;
                    console.log(arguments);
                    //#TODO: if error code is 409
                    // set same email error
                    if(xhr.status === 409){
                        self.setError("email");
                    }else{
                        self.setError("server");
                    }
                }
            });
        }
    });
    return view;
});