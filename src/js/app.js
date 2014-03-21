define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'views/end',
		'views/likeGate',
		'views/form'
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		EndView,
		LikeGate,
		Form
	){
		var app = {
			pages: {},
			currentPage: undefined,
			prevPage: undefined,
			init: function(){
				//facebook.init();
				//set listeners
				Backbone.on("page:show:form", this.showForm, this);
				Backbone.on("page:show:thankYou", this.showThankYou, this);
				Backbone.on("page:show:likeGate", this.showLikeGate, this);
				Backbone.on("app:checkLiked", this.checkLiked, this);
				if(bootstrap.end){ // if action is done
					this.showEnd();
				}else{ // if action is still running
					if(!common.liked){
						console.log("msg");
						this.showForm();
					}else{
						console.log("msg2");
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
			switchPage : function (page) {
				//if current page is being rerendered return false
				if(this.prevPage == page) return false;
				if(this.prevPage){
					this.prevPage.$el.addClass(common.pages.effectOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass("active");
					});
				}
				this.currentPage = this.pages[page];
				this.prevPage = this.currentPage;
				this.currentPage.$el.addClass("active");
				this.currentPage.$el.addClass(common.pages.effectIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass(common.pages.effectIn);
				});
			}
		};
		return app;
	});