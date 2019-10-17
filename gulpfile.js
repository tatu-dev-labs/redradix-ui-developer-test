let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');

/*

Concatena, minifica y ofusca todos los JS
de la carpeta source especificados en el
src en un unico archivo optimizado en la
carpeta build una vez se ha compilado
el proyecto

*/
gulp.task('jsoptimize', () => {
    return gulp.src(['source/js/vendor/_jquery-3.3.1.js','source/js/vendor/_jquery.mousewheel.js','source/js/vendor/_bootstrap.bundle.js','source/js/vendor/_wow.min.js','source/js/vendor/_tab-to-accordion.js','source/js/_main.js'])
	.pipe(concat('site.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('source/js/'), { overwrite: true })
	.pipe(gulp.dest('build/js/'), { overwrite: true });
});

/*

Optimiza el peso de todas las imagenes
de la carpeta una vez se ha compilado
el proyecto en build

*/
gulp.task('imgoptimize', function () {
  gulp.src(['build/**/*.png', 'build/**/*.jpg', 'build/**/*.gif', 'build/**/*.jpeg'])
    .pipe(imagemin(
    {verbose: true},
    [
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({plugins: [{removeViewBox: true}]})
	]))
    .pipe(gulp.dest('build'), { overwrite: true });
});