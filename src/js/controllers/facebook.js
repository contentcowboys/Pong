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
        },
    };
    return facebook;
});