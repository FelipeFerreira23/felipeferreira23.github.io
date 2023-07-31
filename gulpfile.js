// Define some plugins!
var { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssnano = require('gulp-cssnano');

/**
 * Compile Sass.
 */
function scssTask() {
  return src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(dest('./assets/css'));
};

function watchTask() {
  watch(
    ['src/scss/**/*.scss'],
    series(scssTask)
  );
}

exports.default = series(scssTask, watchTask);