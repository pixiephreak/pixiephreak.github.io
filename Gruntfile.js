/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({

    pkg: grunt.file.readJSON("package..json"),

    concat:{
      options:{
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options:{
        mangle: 'false',
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files:{
          'dist/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
        }
      }
    },

    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/**.js', 'test/**/*.js'],
      options: {
        globals: {
        jQuery: true,
        console: true,
        module: true,
        document: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','qunit']
    },

    imagemin: {
      dynamic: {
        files: [{
        expand: true,
        cwd: 'imgs_src/',
        src: ['**/*.{png,jpg,gif'],
        dest: 'dist/'
      }]
    }
    },




    critical: {
      dist: {
        option: {
          base: './'
        },
        files: [
        {src:['*.html'], dest: 'dist/'},
        // {src: ['views/*.html'], dest: 'dist/'}
        ]
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 200,
            suffix: '_1x',
            quality: 75
          },
          {
            /* Change these */
            width: 400,
            suffix: '_2x',
            quality: 75
          },
          {
            /* Change these */
            width: 800,
            suffix: '_3x',
            quality: 75
          }

          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'imgs_src/',
          dest: 'imgs/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
     clean: {
       dev: {
         src: ['imgs'],
     },
     },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['imgs']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'critical', 'uglify', 'jshint', 'qunit', 'concat', 'imagemin']);

  grunt.registerTask('test', ['jshint', 'qunit']);
};


