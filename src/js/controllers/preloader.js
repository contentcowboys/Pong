define(
    [
    'common',
    'underscore'
    ], function(common, _) {
    	'use strict';
    var preloader = {
    	loaded : 0,
        reponsive : true,
        breakPoints : [
            //FROM LARGE TO SMALL
            320 , 800 , 1024
        ],
    	imageArray : [
            // PATH , FILENAME, RESPONSIVE
    		["images/form/","background.png" , true]
    	],
    	preload : function(deferred){
            var self = this;
    		this.deferred = deferred;

    		if(!this.deferred) this.deferred = $.Deferred();

    		if(this.imageArray.length === 0){
    			this.deferred.resolve();
    		}else{
                this.setBreakPoint();
    			this.imageArray.forEach(self.preloadImage.bind(self));
    		}
    		return this.deferred.promise();
    	},
        preloadImage : function (image) {
            var img = new Image();
            img.onload = this.imgLoaded();
            img.onerror = this.imgLoaded();
            if(!image[2]) {
                img.src = image[0]+image[1];
            }else{
                img.src = image[0]+this.breakPoint+"-"+image[1];
            }
            
        },
    	imgLoaded : function(){
    		this.loaded += 1;
    		if(this.loaded === this.imageArray.length) this.deferred.resolve();
    	},
        setBreakPoint : function () {
            var self = this,
                width = $(window).width();
            var found = this.breakPoints.some(function(breakPoint){
                if(breakPoint >= width){
                    self.breakPoint = breakPoint;
                    found = true;
                }
                return (breakPoint >= width);

            });
            if(!found) this.breakPoint = this.breakPoints[this.breakPoints.length-1];
        }
    };
    return preloader;
});