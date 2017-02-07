'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var naturalSort = require("gulp-natural-sort");
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');

var appBaseUrl = 'http://localhost:8000/src/index.html';
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('inject', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp
    .src(['./src/**/*.js', 
          './src/**/*.css'
          ], {
            read: false
          })
    .pipe(naturalSort());
 
  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    }));
});

gulp.task('default', function() {
  runSequence('sass', 'inject', 'webserver', 'sass:watch');
});

gulp.task('serve', function() {
  runSequence('sass', 'inject', 'webserver', 'sass:watch');
});

gulp.task('deploy', function() {
  runSequence('sass', 'inject');
});