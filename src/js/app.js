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
		endView
	){
		var app = {
			pages: {},
			init: function(){
				//if action is done
				if(bootstrap.end){
					this.showEnd();
				}else{
					facebook.init();
				}
			},
			start: function(){

			},
			showEnd : function () {
				if(!this.pages.end) this.pages.end = new EndView();
				this.page.end.render();
				this.switchPage("end");
			}
			switchPage : function (page) {
				console.log(page);
			}
		};
		return app;
	});