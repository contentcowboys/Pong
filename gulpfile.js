//imports
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
var requirejs = require('requirejs');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('sass' , function(){
	//copy animate.css
	gulp.src('src/bower/animate.css/animate.css')
		.pipe(plumber())
		.pipe(rename("_animate.scss"))
	    .pipe(gulp.dest('src/sass/vendors'))
        .on("end", function(){
        //compile sass
        gulp.src('src/sass/main.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest('public/css/'))
            .pipe(minifyCSS({}))
            .pipe(rename("main.min.css"))
            .pipe(gulp.dest('public/css/'))
            .pipe(livereload());
    });

});

gulp.task('requirejs' , function(){
	//first requirejs
	var config = {
	    baseUrl: 'src/js',
	    name: 'main',
	    mainConfigFile : 'src/js/main.js',
	    out: 'public/js/main.js'
	};

	requirejs.optimize(config, function (buildResponse) {
	  		gulp.src('src/bower/requirejs/require.js')
				.pipe(plumber())
			    .pipe(gulp.dest('public/js'));
	}, function(err) {
	    console.log(err);
	});
});

gulp.task('default' , function(){
	livereload.listen();
	gulp.watch('**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['requirejs']);
});
