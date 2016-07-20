/**
 * Grunt build
 */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			  options: {
			    // define a string to put between each file in the concatenated output
			    separator: ';'
			  },
			  dist: {
			    // the files to concatenate
			    src: ['client/**/*.js', '!client/module.js'],
			    // the location of the resulting JS file
			    dest: 'public/js/app.min.js'
			  }
			}
	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};