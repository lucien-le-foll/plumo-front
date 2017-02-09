var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var exec = require('gulp-exec');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./views/**/*.*").on('change', browserSync.reload);
    gulp.watch("./js/**/*.*").on('change', browserSync.reload);
});

gulp.task('bower', function(){
    exec('bower install');
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("scss/*.scss")
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('app.css'))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['bower', 'serve']);