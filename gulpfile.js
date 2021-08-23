var gulp = require('gulp'), 
    uglify = require('gulp-uglify');

gulp.task('default', function() {
});

gulp.task('compress', function(done) {
  gulp.src('e164.js')
  .pipe(uglify({mangle:true}))
  .pipe(gulp.dest('min'));
  done();
});
