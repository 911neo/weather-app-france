var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('watchsass', function () {
    gulp.watch('./sass/**/*.sass',['sass']);
});



gulp.task('default', ['webserver','sass','watchsass']);
