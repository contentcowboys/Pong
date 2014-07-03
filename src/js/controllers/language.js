define(['common', 'jquery'], function(common , $) {
    return {
        lang : {},
        init : function(){
            var self = this;
            return $.ajax({
                url : common.languageFile,
                type : "GET"
            }).success(function(data){
                self.lang = data;
            }).error(function(){
                console.log(arguments);
            });
        },
        get : function (b) {
            return this.lang[b][common.lang];
        }
    };
});