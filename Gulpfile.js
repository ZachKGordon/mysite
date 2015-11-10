var gulp = require('gulp');
var sass = require('gulp-sass');

// Gulp task
gulp.task('default', function() {
gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});

// Gulp watch
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['default']);
});
