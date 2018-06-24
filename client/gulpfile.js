'use strict';

// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/Assets/scss/**/*.scss';
const SCSS_DEST = './src/Assets/css';

gulp.task('compile_scss', () => {
  gulp
    .src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_SRC))
    .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', () => {
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

gulp.task('default', ['watch_scss']);
