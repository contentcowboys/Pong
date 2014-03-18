define([
		'common',
		'backbone',
		'jquery',
		'underscore',
		'controllers/facebook',
		'views/end'
	], function(
		common,
		Backbone,
		$,
		_,
		facebook,
		EndView
	){
		var app = {
			pages: {},
			currentPage: undefined,
			prevPage: undefined,
			init: function(){
				
				if(bootstrap.end){ // if action is done
					this.showEnd();
				}else{ // if action is still running
					facebook.init();
				}
			},
			start: function(){

			},
			showEnd : function () {
				if(!this.pages.end) this.pages.end = new EndView();
				this.pages.end.render();
				this.switchPage("end");
			},
			switchPage : function (page) {
				if(this.prevPage) this.prevPage.$el.removeClass("show");
				this.prevPage = this.currentPage;
				this.currentPage = this.pages[page];
				this.currentPage.$el.addClass("show");
			}
		};
		return app;
	});