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
                if(data.id == 0) common.end = true;
                common.lang_set_id = data.id;
            }).error(function(){
                console.log("language error");
                console.log(arguments);
            });
        },
        get : function (a , b) {
            if (typeof b == "string") a = a + ":" + b;
            if(this.lang[a] && this.lang[a][common.lang]) return this.lang[a][common.lang];
            console.log("Can not found language particle " , a , common.lang);
        }
    };
});