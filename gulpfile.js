// Sass configuration
const gulp = require('gulp')
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');



const src = 'src/broadcast-helper.js',
	dist = 'dist/';


gulp.task('copy', function (callback) {
	// Copy to dist
	gulp.src(src).pipe(gulp.dest(dist));
});

gulp.task('uglify', function (callback) {
	// Copy and minifiy to dist
	gulp.src(src)
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(dist))
});

gulp.task('build', ['copy', 'uglify']);