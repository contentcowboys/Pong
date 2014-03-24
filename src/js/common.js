define([], function() {
    var common = {
    	apiUrl : bootstrap.url+"public/api/",
    	appId : bootstrap.appId,
    	onFacebook : bootstrap.onFacebook,
    	pageId : bootstrap.pageId,
    	loggedIn : false,
    	pageLiked: bootstrap.pageLiked,
    	pages: bootstrap.pages,
        lang : bootstrap.lang
    };
    return common;
});