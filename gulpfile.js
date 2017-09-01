var gulp           = require('gulp'), 
    sass           = require('gulp-sass'),
    autoprefixer   = require('gulp-autoprefixer'); 

gulp.task('sass', function() {
  return gulp.src('./assets/include/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('sass-op', function() {
  return gulp.src('./html/one-pages/accounting/assets/scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(autoprefixer(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(gulp.dest('./one-pages/accounting/assets/css/'))
});

gulp.task('watch', function() {
  gulp.watch('./html/assets/include/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);