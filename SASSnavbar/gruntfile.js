module.exports = function(grunt){
	grunt.initConfig({
		postcss: {
			options: {
			},
			dist: {
				src: "src/nav.css",
				dest: "dist/nav.css"
			}
		},
		sass: {
			dist: {
				files: {
					'src/nav.css' : 'src/nav.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('css',['sass','postcss']);

};