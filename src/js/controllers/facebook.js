define(
    [
    'common',
    'facebook',
    ], function(common, FB) {
    var facebook = {
        init: function(){
            FB.init({
                appId : common.appId,
                cookie     : true,
                status     : true,
                xfbml      : true
            });
            FB.Canvas.setAutoGrow();
        },
        checkLogin : function(deferred){
            if(!deferred) deferred = $.Deferred();
            var that = this;
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    common.loggedIn = true;
                    if( ! common.pageLiked ){
                        that.checkLiked(deferred);
                    }else{
                        deferred.resolve();
                    } 
                    
                } else {
                    deferred.resolve();
                }
             });
            return deferred.promise();
        },
        checkLiked: function(deferred){
            if(!deferred) deferred = $.Deferred();
            FB.api({
                method: 'fql.query',
                query: 'SELECT uid FROM page_fan WHERE page_id = '+common.pageId+' and uid=me()',
                }, function(response){
                    if(response.length > 0){
                        common.pageLiked = true;
                        deferred.resolve();
                    }else{
                        deferred.resolve();
                    }
            });
            return deferred.promise();
        },
        login : function(deferred){
            if(!deferred) deferred = $.Deferred();
            var that = this;
             FB.login(function(response){
                if(!response.authResponse){
                    deferred.resolve();
                }else{
                    common.loggedIn = true;
                    that.checkLiked(deferred);
                }
            }, {scope : "email , user_likes" });
            return deferred.promise();
        }
    };
    return facebook;
});