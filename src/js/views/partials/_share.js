/* views/_share.js */
define([
	'common',
	'backbone',
	'jquery',
	'handlebars',
	'text!templates/partials/_share.hbs',
	'controllers/language'
], function (common, Backbone, $, Handlebars, template, language ) {
	var view = Backbone.View.extend({
		compiled: Handlebars.compile(template),
		copy : {},
		images : {
			'default' : "http:"+common.url+"images/share.png"
		},
		events: {
			"click" : "share",
		},
		initialize: function (options) {
			this.parent = options.parent;
			this.$el = options.selector;
			console.log(this);
			if(options.name){
				this.name = options.name;
			}else{
				this.name = "default";
			}
			if(options.title){
				this.copy.title = language.get( "share" , options.title );
			}else{
				this.copy.title = language.get( "share" , "defaultTitle" );
			}
			if(options.body){
				this.copy.body = language.get( "share" , options.body );
			}else{
				this.copy.body = language.get( "share" , "defaultBody" );
			}
			this.image = this.images[this.name];
			return this;
		},
		render: function () {
			this.$el.html(this.compiled());
			return this;
		},
		share : function () {
			_gaq.push(['_trackEvent', 'share', this.name+":open"]);
			var self = this;
			FB.ui(
			  {
			    method: 'feed',
			    name: this.copy.title,
			    link: "http:"+common.url,
			    picture: this.image,
			    caption: '',
			    description: this.copy.body
			  },
			  function(response) {
			    if (response && response.post_id) {
			    	_gaq.push(['_trackEvent', 'share', this.name+":done"]);
			      self.parent.trigger("share:"+self.name+":true");
			    } else {
			    	_gaq.push(['_trackEvent', 'share', this.name+":cancel"]);
			      self.parent.trigger("share:"+self.name+":false");
			    }
			  }
			);
		}
	});
	return view;
});