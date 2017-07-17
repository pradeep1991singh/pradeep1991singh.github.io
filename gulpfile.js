'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var naturalSort = require('gulp-natural-sort');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');

var appBaseUrl = 'http://localhost:8000/index.html';

gulp.task('copy', function() {
  gulp
    .src(['./node_modules/percentify-circle/dist/**/*'])
    .pipe(gulp.dest('lib/percentify-circle'));
});

gulp.task('sass', function() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('inject', function() {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp
    .src(
      ['./js/**/*.js', './css/**/*.css', './lib/percentify-circle/**/*.css'],
      {
        read: false
      }
    )
    .pipe(naturalSort());

  return target.pipe(inject(sources)).pipe(gulp.dest('.'));
});

gulp.task('webserver', function() {
  gulp.src('.').pipe(
    webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    })
  );
});

gulp.task('default', function() {
  runSequence('serve');
});

gulp.task('serve', function() {
  runSequence('copy', 'sass', 'inject', 'webserver', 'sass:watch');
});

gulp.task('prod', function() {
  runSequence('copy', 'sass', 'inject');
});
