module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'dist/style.css': 'src/scss/style.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['**/*.scss'],
				tasks: ['sass'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);

};
