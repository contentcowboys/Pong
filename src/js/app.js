define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'views/pages/end',
		'views/pages/likeGate',
		'views/pages/form',
		'views/pages/thankYOu'
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		EndView,
		LikeGate,
		Form,
		ThankYou
	){
		var app = {
			pages: {},
			currentPage: undefined,
			prevPage: undefined,
			init: function(){
				facebook.init();
				//check if old version of IE is running
				this.checkOldIE();
				//set listeners
				Backbone.on("page:show:form", this.showForm, this);
				Backbone.on("page:show:thankYou", this.showThankYou, this);
				Backbone.on("page:show:likeGate", this.showLikeGate, this);
				Backbone.on("app:checkLiked", this.checkLiked, this);
				Backbone.on("page:render" , this.pageRender, this);
				if(bootstrap.end){ // if action is done
					this.showEnd();
				}else{ // if action is still running
					if(common.liked){
						this.showForm();
					}else{
						$.when( facebook.checkLogin() ).then(_.bind(this.checkLiked, this));
					}
				}
			},
			checkLiked: function(){
				if( common.pageLiked ) {
					this.showForm();
				} else {
					this.showLikeGate();
				}
			},
			showEnd : function () {
				if(!this.pages.end) this.pages.end = new EndView();
				this.pages.end.render();
				this.switchPage("end");
			},
			showLikeGate : function () {
				console.log("showLikeGate");
				if(!this.pages.likeGate) this.pages.likeGate = new LikeGate();
				this.pages.likeGate.render();
				this.switchPage("likeGate");
			},
			showForm : function () {
				if(!this.pages.form) this.pages.form = new Form();
				this.pages.form.render();
				this.switchPage("form");
			},
			showThankYou : function () {
				if(!this.pages.thankYou) this.pages.thankYou = new ThankYou();
				this.pages.thankYou.render();
				this.switchPage("thankYou");
			},
			switchPage : function (page) {
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
				this.prevPage = this.currentPage;
				this.currentPage.$el.addClass("active");
				if(!this.oldIE){
					this.currentPage.$el.addClass(common.pages.effectIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						FB.Canvas.setAutoGrow();
						$(this).removeClass(common.pages.effectIn);
					});
				}
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
					this.oldIE = true;
				}
			},
			pageRender : function (page) {
				this.pages[page].render();
				this.switchPage(page);
			}
		};
		return app;
	});