module.exports = function(grunt) {
    grunt.initConfig({
        //package info
        pkg: grunt.file.readJSON('package.json'),        
        //watch for changes in files
        watch: 
        {
            sass:{ //watch for changes to scss sass files
                files: [ 'src/sass/**/*.scss' ],
                tasks: [ 'sass' ]
            },
            js:{ //watch for changes in javascript files
                files: [ 'src/javascript/**/*.js', '!src/javascript/libs/**/*.js' ],
                tasks: [ 'uglify', 'copy:js' ]
            },
            libs:{ //watch for changes in javascript librarie files
                files: [ 'src/javascript/libs/**/*.js' ],
                tasks: [ 'concat' ]
            },
            images:{ //watch for new images
                files: [ 'src/images/**/*' ],
                tasks: [ 'imagemin' ]
            }
        },
        // minify javascript files
        uglify: 
        {
            js: {
                files: {
                    'public/javascript/main.min.js': [ 'src/javascript/main.js' ],
                    'public/javascript/libs.min.js': [ 'src/javascript/libs.js' ]
                }
            }
        },
        //concatination of your javascript libraries
        concat: 
        {
            options: {
                banner: "/* Don't make any modefications to this file!! \n",
                separator: ';'
            },
            libs: {
                src: [ 'src/javascript/libs/jquery-2.0.3.min.js' ],
                dest:  'src/javascript/libs.js'
            }
        },
        //optimize and compress images for web
        imagemin: 
        {
            allimages: {
                options: {
                    optimizationLevel: 7,
                    pngquant: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif}'], 
                    dest: 'public/images'
                }]
            }
        }
        //copy files
        copy: 
        {
            js:{ // copy a development unminified version of the main javascript to the public folder
                expand: true,
                flatten: true,
                src:  'src/javascript/main.js',
                dest: 'public/javascript/dev'
            }
        },
        // convert scss sass files to native css
        sass: 
        {
            main: {
                options: {
                    style: 'compact'
                },
                files: {
                    'public/css/main.css': 'src/sass/main.scss'
                }
            }
        }
        
    });
    
    // Loading in all necessary modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //set the watch as the default task
    grunt.registerTask('default', ['watch']);
};