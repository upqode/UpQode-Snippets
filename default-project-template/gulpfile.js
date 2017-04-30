var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// need to nunjucks
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var prettify = require('gulp-jsbeautifier');

// need to sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

// 1.browserSync
// 2.minify-js
// 3.minify-css
// 4.sass
// 5.nunjucks
// 6.svg-o
// 7.svgstore
// 8.watch
// 9.build

// browserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// uglify js
gulp.task('minify-js', function(next) {
  pump([
    gulp.src('src/lib/*.js'),
    uglify(),
    rename({ suffix: '.min' }), // add .min suffix
    gulp.dest('dist/js')
  ], next);
});

// minify css
gulp.task('minify-css', function() {
  return gulp.src(['src/lib/*.css', '!src/lib/*.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' })) // add .min suffix
    .pipe(gulp.dest('dist/css'));
});

// sass
gulp.task('sass', function() {
  return gulp.src('./src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', function(err) {
      this.emit('end');
      return notify().write(err);
    }))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream()); // inject css
});

// nunjucks template + htmlbeautify
gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.html')
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }))
    .pipe(prettify({'indent_size': 2})) // html beautify
    .pipe(gulp.dest('dist'))
    .on('end', browserSync.reload);
});

// svg opimization
gulp.task('svg-o', function() {
  return gulp
    .src('src/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      },
      removeDoctype: false
    }))
    .pipe(gulp.dest('dist/img/'));
});

// svg sprite
// TODO: Add pipe for beautify in dev and uglify in prod
gulp.task('svg-sprite', function() {
  return gulp
    .src('src/svg/sprite/*.svg')
    .pipe(svgmin({
      removeDoctype: false
    }))
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img/'));
});

// watcher
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch(['src/pages/**/*.html', 'src/templates/**/*.html'], ['nunjucks']);
  gulp.watch(['dist/js/*.js']).on('change', browserSync.reload);
});

// build
gulp.task('build', ['sass', 'nunjucks'], function() {
  console.log('Building files');
});
