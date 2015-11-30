var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')

// Gulp task
gulp.task('default', function() {
gulp.src('src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    ascade: false
  }))
  .pipe(gulp.dest('./public/'));
});

// Gulp watch
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['default', 'icons']);
});

gulp.task('icons', function() {
  return gulp.src('src/sass/files/*')
  .pipe(gulp.dest('public/files'));
});
