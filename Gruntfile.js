/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      options:{
        mangle: 'false'
      },
      my_target: {
        files:{
          'dest/output.min.js': ['js/*.js']
        }
      }
    },

    critical : {
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
          }

          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['**/*.{gif,GIF,jpg,JPG,png,PNG}'],
          cwd: 'imgs_src',
          dest: 'dist/imgs/'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'imgs_src',
          src: '**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'dist/imgs/'
        }]
      },
      // rename: {
      //   files: {
      //     'tmp/rename.jpg': 'test/fixtures/test.jpg'
      //   }

    },

    /* Clear out the images directory if it exists */
     clean: {
       dev: {
         src: ['dist/imgs'],
     },
     },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/imgs']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'critical', 'imagemin']);

};