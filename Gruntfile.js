module.exports = function (grunt) {
  grunt.registerTask('watch', [ 'watch' ]);
  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      css: {
        files: ['less/*.less'],
        tasks: ['less:style'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
