// ============ SETTING UP REQUIRES ==========//

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

//============= SETTING UP TASKS ==========//
gulp.task('scripts', function(){
  gulp.src('js/**/*.js', '!js/**/*.min.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min.js'
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
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
    gulp.watch('sass/**/*.scss',['styles']);
}); //end styles

gulp.task('jpgs', function() {
    return gulp.src('src/img/*.jpg')
    .pipe(plumber())
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('images'));
});

gulp.task('default', ['jpgs', 'styles', 'browser-sync', 'scripts']);
