//imports
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
var requirejs = require('requirejs');


gulp.task('sass' , function(){
	//copy animate.css
	gulp.src('src/bower/animate.css/animate.css')
		.pipe(plumber())
		.pipe(rename("_animate.scss"))
	    .pipe(gulp.dest('src/sass'));
	//compile sass
	gulp.src('src/sass/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('public/css/'))
		.pipe(minifyCSS({}))
		.pipe(rename("main.min.css"))
    	.pipe(gulp.dest('public/css/'))
});



gulp.task('default' , function(){
	gulp.watch('**/*.scss', ['sass']);
});