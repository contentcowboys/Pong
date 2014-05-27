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
			'default' : "http:"+common.url+"images/share/default.png"
		},
		events: {
			"click" : "share"
		},
		initialize: function (options) {
			this.parent = options.parent;
			this.$el = options.$el;
			if(this.$el.attr("share-name")){
				this.name = this.$el.attr("share-name");
			}else{
				this.name = "default";
			}
			if(this.$el.attr("share-title")){
				this.copy.title = language.get( "share" , this.$el.attr("share-title") );
			}else{
				this.copy.title = language.get( "share" , "defaultTitle" );
			}
			if(this.$el.attr("share-body")){
				this.copy.body = language.get( "share" , this.$el.attr("share-body") );
			}else{
				this.copy.body = language.get( "share" , "defaultBody" );
			}
            if(this.$el.attr("share-image")){
                this.image = "http:"+common.url+"images/share/"+this.$el.attr("share-image")+".png";
            }else{
                this.image = "http:"+common.url+"images/share/default.png";
            }
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