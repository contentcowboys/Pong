require.config({
    paths: {
        jquery: '../bower/jquery/dist/jquery.min',
        underscore: '../bower/lodash/dist/lodash.underscore.min',
        backbone: '../bower/backbone-amd/backbone-min',
        handlebars: '../bower/handlebars/handlebars.min',
        facebook: '//connect.facebook.net/en_US/all',
        text: '../bower/requirejs-text/text',
        "jquery-validation" : '../bower/jquery-validation/jquery.validate',
        "jquery-placeholder" : '../bower/jquery-placeholder/jquery.placeholder',
    },
    shim: {
        "jquery-validation" : ["jquery"],
        "jquery-placeholder" : ["jquery"],
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
        'app',
        'jquery-validation',
        'jquery-placeholder'
    ],
    function(common,Backbone, $, app, undefined, undefined){
        app.init();
    }
);