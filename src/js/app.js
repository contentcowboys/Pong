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
				//set listeners
				Backbone.on("page:show", this.switchPage, this);

				// if action is done
				if(common.end){ 
					this.switchPage("end");
					return false;
				}

				if(!common.mobileEnabled && !common.onFacebook){
					this.switchPage("notMobile");
					return false;
				}

				// if action is desktop only
				if(bootstrap.end){ 
					this.switchPage("notMobile");
					return false;
				}

				//initalise facebook
				facebook.init();

				//check if old version of IE is running
				this.checkOldIE();

				$.when( facebook.checkLogin() ).then(_.bind(this.checkLiked, this));
			},
			checkLiked: function(){
				var self = this;
				$.when(this.loaded()).then(function(){
					if( common.pageLiked || !common.showLikeGate ) {
						self.switchPage(common.landingPage);
					} else {
						self.switchPage("likeGate");
					}
				});
				
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

				if(this.prevPage){
					if(this.oldIE){
						this.prevPage.$el.removeClass("active");
					}else{
						$("body").css("overflowY", "hidden");
						this.prevPage.$el.addClass(common.pages.effectOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$("body").css("overflowY", "auto");
							$(this).removeClass(common.pages.effectOut);
							$(this).removeClass("active");
						});
					}
				}

				this.currentPage = this.pages[page];
				this.currentPage.$el.addClass("active");

				//put effect 
				if(!this.oldIE){
					this.currentPage.$el.addClass(common.pages.effectIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						FB.Canvas.setAutoGrow();
						$(this).removeClass(common.pages.effectIn);
					});
				}

				//make current page previous page for next page switch
				this.prevPage = this.currentPage;

				//track which page is visited
				_gaq.push(['_trackEvent', 'page', page]);
			},
			checkOldIE : function () {
			   if (navigator.appName == "Microsoft Internet Explorer") {
				    var ua = navigator.userAgent;
				    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
				    if (re.exec(ua) != null) {
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