// ============ SETTING UP REQUIRES ==========//

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

//============= SETTING UP TASKS ==========//
gulp.task('scripts', function(){
  gulp.src(['js/**/*.js', '!js/**/*.min.js'])
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}); //end browserSync

gulp.task('styles', function() {
    gulp.src('css/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
}); //end styles

gulp.task('jpgs', function() {
    return gulp.src('images/src/*.jpg')
    .pipe(plumber())
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('images/dest'));
});

gulp.task('watch', function(){
  gulp.watch('css/sass/**/*.scss', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('images/src/*.jpg', ['jpgs']);
});

gulp.task('default', ['watch', 'jpgs', 'styles', 'browser-sync', 'scripts']);
