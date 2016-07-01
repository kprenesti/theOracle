// ============ SETTING UP REQUIRES ==========//

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

//============= SETTING UP TASKS ==========//
gulp.task('scripts', function(){
  gulp.src(['js/**/*.js', '!js/**/*.min.js'])
  .pipe(plumber())
  .pipe(concat('concat.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
}); //end scripts

gulp.task('jpgs', function() {
    return gulp.src('images/src/*.jpg')
    .pipe(plumber())
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('dist/img'));
}); //end jpg

gulp.task('styles', function() {
    gulp.src('css/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
}); //end styles

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}); //end browserSync

gulp.task('watch', function(){
  gulp.watch('css/sass/**/*.scss', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('images/src/*.jpg', ['jpgs']);
});

gulp.task('default', ['watch', 'jpgs', 'styles', 'browser-sync', 'scripts']);
