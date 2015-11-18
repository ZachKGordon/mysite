var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')

// Gulp task
gulp.task('default', function() {
gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    ascade: false
  }))
  .pipe(gulp.dest('./css/'));
});

// Gulp watch
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['default','icons']);
});

gulp.task('icons', function() {
  return gulp.src('sass/icons/*')
  .pipe(gulp.dest('css/icons'));
});
