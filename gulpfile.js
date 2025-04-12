var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var merge = require('merge-stream'); // Add merge-stream
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
});

gulp.task('build', function () {
    var tsResult = gulp.src(['e164.ts', '!test/**']) // Explicitly include source and exclude tests
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest(tsProject.options.outDir)),
        tsResult.js.pipe(gulp.dest(tsProject.options.outDir))
    ]);
});

gulp.task('compress', gulp.series('build', function() {
  return gulp.src('dist/e164.js') // Uglify the compiled JS from dist
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('min'));
}));
