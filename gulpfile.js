var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat        = require('gulp-concat');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./views/**/*.*").on('change', browserSync.reload);
    gulp.watch("./js/**/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);