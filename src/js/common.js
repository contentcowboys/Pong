define([], function() {
    var common = {
        apiUrl : bootstrap.url+"api/",
        url : bootstrap.url,
        end : bootstrap.end,
    	mobileEnabled : bootstrap.mobileEnabled,
    	appId : bootstrap.appId,
    	onFacebook : bootstrap.onFacebook,
    	pageId : bootstrap.pageId,
    	loggedIn : false,
    	pageLiked: bootstrap.pageLiked,
    	pages: bootstrap.pages,
        lang : bootstrap.lang,
        languages : JSON.parse(bootstrap.languages),
        multiLanguage : bootstrap.multiLanguage,
        showLikeGate : bootstrap.showLikeGate,
        landingPage : bootstrap.landingPage,
        showLoading : bootstrap.showLoading,
        preloadImages : bootstrap.preloadImages
    };
    return common;
});