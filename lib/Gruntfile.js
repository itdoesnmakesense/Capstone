module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      files: ['../data/**/*.js'],
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in data
      build: ['Gruntfile.js', '../data/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../styles/css/main.css': '../styles/sass/main.scss'
        }
      }
    },
    uglify: {
      options:{
        banner:'/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build:{
        files:{
          'dist/js/app.min.js': 'data/**/*.js'
        }
      }
    },
    watch: {
      app: {
        files: ['../data/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../styles/sass/*.scss'],
        tasks: ['sass']
      }
      
    }
  
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch','uglify']);
};