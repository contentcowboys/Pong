require.config({
    paths: {
        jquery: 'bower/jquery/jquery.min',
        underscore: 'bower/lodash/dist/lodash.underscore.min',
        backbone: 'bower/backbone-amd/backbone-min',
        handlebars: 'bower/handlebars/handlebars.min',
        facebook: '//connect.facebook.net/en_US/all',
        text: 'bower/requirejs-text/text',
    },
    shim: {
        'facebook' : {
              exports: 'FB'
        },
        handlebars: {
            exports: 'Handlebars'
        },
    }
});
require(
    [
        'common',
        'backbone',
        'jquery',
        'app'
    ],
    function(common,Backbone, $, app){
        app.init();
    }
);