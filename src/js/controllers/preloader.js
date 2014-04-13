define(
    [
    'common',
    'underscore'
    ], function(common, _) {
    	'use strict';
    var preloader = {
    	loaded : 0,
    	imageArray : [
    		"http://lorempixel.com/400/203/",
    		"http://lorempixel.com/400/204/"
    	],
    	preload : function(deferred){
    		this.deferred = deferred;
    		if(!this.deferred) this.deferred = $.Deferred();
    		if(this.imageArray.length === 0){
    			this.deferred.resolve();
    		}else{
    			var self = this;
    			this.imageArray.forEach(function(image){
    					var img = new Image();
    					img.onload = _.bind(self.imgLoaded, self);
    					img.onerror = _.bind(self.imgLoaded, self);
    					img.src = image;
    			});
    		}
    		return this.deferred.promise();
    	},
    	imgLoaded : function(){
    		this.loaded += 1;
    		if(this.loaded === this.imageArray.length) this.deferred.resolve();
    	}
    };
    return preloader;
});