module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : {
			css : {
				src : ['css/libs/bootstrap.css','css/common.css','css/companies.css','css/footer.css','css/navigation.css','css/pricelist.css','css/searchbar.css'],
				dest : 'css/combined.css'
			},
			js : {
				options:{
					seperator : ';'
				},
				src: ['js/libs/jquery.min.js','js/libs/bootstrap.min.js','js/libs/angular.min.js','js/app.js'],
				dest : 'js/combined.js'
			}
		},
		cssmin : {
			css : {
				src:'css/combined.css',
				dest : 'css/combined.min.css'
			}
		},
		uglify : {
			js : {
				files : {
					'js/combined.js' : ['js/combined.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};