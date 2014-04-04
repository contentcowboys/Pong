/* views/form.js */
define([
    'common',
    'backbone',
    'jquery',
    'handlebars',
    'text!templates/form.hbs',
    'controllers/language',
    'views/languageSwitcher'
    ], function(common, Backbone, $, Handlebars , template, language , LanguageSwitcher ) {
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
            if(common.multiLanguage){
                if(this.languageSwitcher) this.languageSwitcher.remove();
                this.languageSwitcher = new LanguageSwitcher({page: "form"});
                this.languageSwitcher.render();
            } 
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
                        if($("#voorwaarden:unchecked").length){
                            self.setError("voorwaarden");
                        }else{
                            //this looks hacky hacky, please fix
                            self.setError("form");
                        }
                    }else{
                        self.dom.$formError.fadeOut();
                    }
                },
                errorPlacement: function(error, element) {
                    //
                }
            });
        },
        setError : function (error) {
            //#TODO : set correct error from language stuff;
            this.dom.$formError.html( language.get( "formError" , error ) );
            this.dom.$formError.fadeIn();
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
                    Backbone.trigger("page:show:thankYou");
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