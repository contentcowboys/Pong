define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'views/end',
		'views/likeGate',
		'views/home',
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		EndView,
		LikeGate,
		Home
	){
		var app = {
			pages: {},
			currentPage: undefined,
			prevPage: undefined,
			init: function(){
				facebook.init();
				//set listeners
				Backbone.on("app:checkLiked", this.checkLiked, this);
				if(bootstrap.end){ // if action is done
					this.showEnd();
				}else{ // if action is still running
					if(common.liked){
						this.showHome();
					}else{
						$.when( facebook.checkLogin() ).then(_.bind(this.checkLiked, this));
					}
				}
			},
			checkLiked: function(){
				if( common.pageLiked ) {
					this.showHome();
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
				if(!this.pages.likeGate) this.pages.likeGate = new LikeGate();
				this.pages.likeGate.render();
				this.switchPage("likeGate");
			},
			showHome : function () {
				if(!this.pages.home) this.pages.home = new Home();
				this.pages.home.render();
				this.switchPage("home");
			},
			switchPage : function (page) {
				//if current page is being rerendered return false
				if(this.prevPage == page) return false;
				if(this.prevPage) this.prevPage.$el.removeClass("show");
				this.prevPage = this.currentPage;
				this.currentPage = this.pages[page];
				this.currentPage.$el.addClass("show");
			}
		};
		return app;
	});