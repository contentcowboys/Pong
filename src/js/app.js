define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'views/pages/end',
		'views/pages/likeGate',
		'views/pages/form',
		'views/pages/thankYOu',
		'views/pages/notMobile'
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		End,
		LikeGate,
		Form,
		ThankYou,
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

				//if likeGate is disabled don't show it
				if(!common.showLikeGate){
					console.log(common);
					this.switchPage("form");
					return false;
				}



				$.when( facebook.checkLogin() ).then(_.bind(this.checkLiked, this));
			},
			checkLiked: function(){
				if( common.pageLiked ) {
					this.switchPage("form");
				} else {
					this.switchPage("likeGate");
				}
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