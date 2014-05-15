define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'controllers/preloader',
		'views/pages/end',
		'views/pages/likeGate',
		'views/pages/form',
		'views/pages/thankYou',
		'views/pages/info',
		'views/pages/notMobile'
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		preloader,
		End,
		LikeGate,
		Form,
		ThankYou,
		Info,
		NotMobile
	){
		var app = {
			pages: {},
			currentPage: undefined,
			prevPage: undefined,
			init: function(){
				// Track AJAX errors (jQuery API)
		        $(document).ajaxError(function(e, request, settings) {
		            _gaq.push([ '_trackEvent' , 'Ajax error' , settings.url , e.result , true ]);
		        });
		        $("body").on("click", ".js-conditions", this.conditions.bind(this));
				//set listeners
				Backbone.on("page:show", this.switchPage, this);
				// if action is done
				if(common.end){ 
					this.switchPage("end");
					return false;
				}
				//check if mobile is enabled
				if(!common.mobileEnabled && !common.onFacebook){
					this.switchPage("notMobile");
					return false;
				}
				//initalise facebook
				facebook.init();
				//check if old version of IE is running
				this.checkOldIE();
				
				$.when( facebook.checkLogin() , this.loaded() ).then(_.bind(this.checkLiked, this));
			},
			checkLiked: function(){
				if( common.pageLiked || !common.showLikeGate ) {
					this.switchPage(common.landingPage);
				} else {
					this.switchPage("likeGate");
				}
			},
			loaded : function () {
				var deferred = $.Deferred();
				if(common.showLoading) this.prevPage = {$el : $("#js-loading-page")};
				if(!common.preloadImages){
					deferred.resolve();
				}else{
					preloader.preload(deferred);
				}
				return deferred.promise();
			},
			conditions : function(e){
				gaq.push(['_trackEvent', 'conditions', 'condition link clicked']);
			},
			switchPage : function (page) {
				//if page doesn't exist yet, create it
				if(!this.pages[page]) this.pages[page] = eval("new "+page[0].toUpperCase() + page.slice(1));
				//render correct page
				this.pages[page].render();
				//animate to the top of the page
				$("html, body").animate({ scrollTop: 0 });
				FB.Canvas.scrollTo(0,0);
				//if current page is being rendered return false
				if(this.currentPage == this.pages[page]) return false;
				//make page currentPage
				this.currentPage = this.pages[page];
				//track which page is visited
				_gaq.push(['_trackEvent', 'page', page]);
				//if animations are not supported don't do effects
				if(this.oldIE){
					this.noEffectPageSwitch(page);
				}else{
					this.withEffectPageSwitch(page);
				}
				//make current page previous page for next page switch
				this.prevPage = this.currentPage;
			},
			noEffectPageSwitch : function() {
				if(this.prevPage){
					this.prevPage.$el.removeClass("active");
				}
				this.currentPage.$el.addClass("active");
			},
			withEffectPageSwitch : function () {
				if(this.prevPage){
					$("body").css("overflowY", "hidden");
					this.prevPage.$el.addClass(common.pages.effectOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$("body").css("overflowY", "auto");
						$(this).removeClass(common.pages.effectOut);
						$(this).removeClass("active");
					});
				}
				this.currentPage.$el.addClass("active");
				this.currentPage.$el.addClass(common.pages.effectIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					FB.Canvas.setAutoGrow();
					$(this).removeClass(common.pages.effectIn);
				});
			},
			//check user agent for IE 7-8-9
			checkOldIE : function () {
			   if (navigator.appName == "Microsoft Internet Explorer") {
				    var ua = navigator.userAgent;
				    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
				    if (re.exec(ua) != null) {
				        if(parseInt(RegExp.$1) == 7) this.oldIE = true;
				        if(parseInt(RegExp.$1) == 8) this.oldIE = true;
				        if(parseInt(RegExp.$1) == 9) this.oldIE = true;
				    }else{
				    	this.oldIE = false;
				    }
				}else{
					this.oldIE = false;
				}
			}
		};
		return app;
	});