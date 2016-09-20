var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var path = require('path')
var browserSync = require('browser-sync').create();
var htmlbeautify = require('gulp-html-beautify');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

//browserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// uglify js
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('src/lib/*.js'),
        uglify(),
        rename({ suffix: '.min' }), //add .min suffix
        gulp.dest('dist/js')
    ],
    cb
  );
});

// minify css
gulp.task('minify-css', function() {
  return gulp.src(['src/lib/*.css', '!src/lib/*.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' })) //add .min suffix
    .pipe(gulp.dest('dist/css'));
});

//sass
gulp.task('sass', function () {
	sass('src/sass/*.scss', { sourcemap: true })
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); //inject css
});

//nunjucks template + htmlbeautify
gulp.task('nunjucks', function () {
  return gulp.src('src/pages/**/*.html')
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }))
    .pipe(htmlbeautify({indentSize: 2})) //html beautify
    .pipe(gulp.dest('dist'));
});

//watcher
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
	gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch(['src/pages/**/*.html', 'src/templates/**/*.html' ], ['nunjucks']);
  gulp.watch(['dist/js/*.js']).on('change', browserSync.reload);
  gulp.watch(['dist/*.html']).on('change', browserSync.reload);
});
