define([], function() {
    var common = {
    	apiUrl : bootstrap.url+"api/",
    	appId : bootstrap.appId,
    	onFacebook : bootstrap.onFacebook,
    	pageId : bootstrap.pageId,
    	loggedIn : false,
    	pageLiked: bootstrap.pageLiked,
    	pages: bootstrap.pages
    };
    return common;
});