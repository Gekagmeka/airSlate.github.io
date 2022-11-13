let gulp = require('gulp'),
        pug = require('gulp-pug'),
        stylus = require('gulp-stylus');

//convert to html
gulp.task('pug', function(){
    return gulp.src('app/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('app'))
});

// for stylus
gulp.task('stylus', function () {
    return gulp.src('app/styles/main.styl')
      .pipe(stylus())
      .pipe(gulp.dest('app/styles/'));
  });

gulp.task('watch', function(){
    gulp.watch('app/*.pug', gulp.parallel('pug'));
    gulp.watch('app/styles/main.styl', gulp.parallel('stylus'));
});

gulp.task('default', gulp.parallel('watch'));